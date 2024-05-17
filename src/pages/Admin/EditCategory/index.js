import { yupResolver } from '@hookform/resolvers/yup'
import UploadImage from '@mui/icons-material/CloudUpload'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { ErrorMessage } from '../../../components'
import { useUser } from '../../../hooks/UserContext'
import api from '../../../services/api'
import { Label, Input, Button, LabelUpload } from '../NewCategory/styles'
import { Container } from './styles'

export default function EditCategory() {
  const [fileName, setFileName] = useState(null)
  const [error, setError] = useState(false)

  const {
    push,
    location: {
      state: { category }
    }
  } = useHistory()
  const { logout } = useUser()

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do categoria'),
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
      )
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async data => {
    const categoryDataFormData = new FormData()

    categoryDataFormData.append('name', data.name)
    categoryDataFormData.append('file', data.file[0])

    try {
      const response = await api.put(
        `categories/${category.id}`,
        categoryDataFormData,
        { validateStatus: () => true }
      )
      if (response.status === 200 || response.status === 201) {
        toast.success('Categoria editada com sucesso.')

        setTimeout(() => {
          push('/nova-categoria')
        }, 2000)

        setError(false)
      } else if (response.status === 400) {
        toast.error('Nome da categoria já existe, tente usar outro nome.')
        setError(true)
      } else if (response.status === 401) {
        logout()
        toast.error('Ocorreu um erro com sua autenticação! Tente novamente.')

        setTimeout(() => {
          push('/login')
        }, 2000)
      } else {
        throw new Error()
      }
    } catch (err) {}
  }

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <h2>Editar Categoria</h2>
        <div>
          <Label>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            defaultValue={category.name}
            errorExist={error}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
          {error && <ErrorMessage>Nome da categoria já existe.</ErrorMessage>}
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

        <Button>Editar</Button>
      </form>
    </Container>
  )
}
