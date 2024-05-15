import { yupResolver } from '@hookform/resolvers/yup'
import UploadImage from '@mui/icons-material/CloudUpload'
import React, { useState, useEffect } from 'react'
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
} from '../NewProducts/styles'

export default function EditProduct() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const {
    push,
    location: {
      state: { product }
    }
  } = useHistory()

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto'),
    price: Yup.string().required('Digite o preço do produto'),
    category: Yup.object().required('Escolha uma categoria'),
    file: Yup.mixed()
      .notRequired()
      .test(
        'type',
        'Carregue apenas arquivos de extensões png, jpg, jpeg.',
        value => {
          if (value.length === 0) {
            return value
          } else {
            return (
              value[0]?.type === 'image/jpeg' || value[0]?.type === 'image/png'
            )
          }
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
      await api.put(`products/${product.id}`, productDataFormData)
      toast.success('Produto editado com sucesso')

      setTimeout(() => {
        push('/listar-produtos')
      }, 2000)
    } catch (err) {}
  }

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <h2>Editar Produto</h2>
        <div>
          <Label>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            defaultValue={product.name}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Preço</Label>
          <Input
            type="number"
            {...register('price')}
            defaultValue={product.price}
          />
          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </div>
        <div>
          <Controller
            name="category"
            control={control}
            defaultValue={product.category}
            render={({ field }) => {
              return (
                <ReactSelectStyle
                  classNamePrefix="react-select"
                  {...field}
                  options={categories}
                  getOptionLabel={cat => cat.name}
                  getOptionValue={value => value.id}
                  placeholder="Categorias...."
                  defaultValue={product.category}
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
          <input
            type="checkbox"
            {...register('offer')}
            defaultChecked={product.offer}
          />
          <Label>Produto em Oferta ?</Label>
        </ContainerInput>
        <Button>Editar</Button>
      </form>
    </Container>
  )
}
