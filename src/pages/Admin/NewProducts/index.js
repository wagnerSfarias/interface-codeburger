import { yupResolver } from '@hookform/resolvers/yup'
import UploadImage from '@mui/icons-material/CloudUpload'
import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { ErrorMessage } from '../../../components'
import api from '../../../services/api'
import {
  Container,
  Label,
  Input,
  Button,
  LabelUpload,
  ReactSelectStyle,
  ContainerInput
} from './styles'

export default function NewProducts() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const { push } = useHistory()

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto'),
    price: Yup.number().typeError('Digite o preço do produto.'),
    category: Yup.object().required('Escolha uma categoria'),
    file: Yup.mixed()
      .test('required', 'Carregue uma imagem', value => {
        return value?.length > 0
      })
      .test(
        'type',
        'Carregue apenas arquivos de extensões png, jpg, jpeg.',
        value => {
          return (
            value[0]?.type === 'image/jpeg' || value[0]?.type === 'image/png'
          )
        }
      ),
    offer: Yup.bool()
  })
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  useEffect(() => {
    async function loadCategoreis() {
      try {
        const response = await api.get('categories')
        setCategories(response.data)
      } catch (err) {}
    }
    loadCategoreis()
  }, [])

  const onSubmit = async data => {
    const productDataFormData = new FormData()

    productDataFormData.append('name', data.name)
    productDataFormData.append('price', data.price)
    productDataFormData.append('category_id', data.category.id)
    productDataFormData.append('file', data.file[0])
    productDataFormData.append('offer', data.offer)
    try {
      await api.post('products', productDataFormData)

      toast.success('Produto cadastrado com sucesso')

      setTimeout(() => {
        push('/listar-produtos')
      }, 2000)
    } catch (err) {}
  }

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <h2>Criar Produto</h2>
        <div>
          <Label>Nome</Label>
          <Input type="text" {...register('name')} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Preço</Label>
          <Input type="number" {...register('price')} />
          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Categoria</Label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => {
              return (
                <ReactSelectStyle
                  classNamePrefix="react-select"
                  {...field}
                  options={categories}
                  getOptionLabel={cat => cat.name}
                  getOptionValue={value => value.id}
                  isSearchable={false}
                  placeholder="Categorias...."
                />
              )
            }}
          ></Controller>
          <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </div>
        <div>
          <LabelUpload>
            {fileName || (
              <>
                <UploadImage />
                Carregue a imagem
              </>
            )}

            <input
              {...register('file')}
              type="file"
              accept="image/png, image/jpeg"
              onChange={value => setFileName(value.target.files[0]?.name)}
            />
          </LabelUpload>
          <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </div>
        <ContainerInput>
          <input type="checkbox" {...register('offer')} />
          <Label>Produto em Oferta ?</Label>
        </ContainerInput>
        <Button>Criar</Button>
      </form>
    </Container>
  )
}
