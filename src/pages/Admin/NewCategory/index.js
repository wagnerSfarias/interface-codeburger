import { yupResolver } from '@hookform/resolvers/yup'
import UploadImage from '@mui/icons-material/CloudUpload'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { ErrorMessage, LoadingMessage } from '../../../components'
import paths from '../../../constants/paths'
import { useUser } from '../../../hooks/UserContext'
import api from '../../../services/api'
import {
  Container,
  Label,
  Input,
  Button,
  LabelUpload,
  EditIcon
} from './styles'

export default function NewCategory() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const { push } = useHistory()
  const { logout } = useUser()

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto'),
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
      )
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ resolver: yupResolver(schema) })

  useEffect(() => {
    async function loadCategoreis() {
      try {
        const response = await api.get('categories')

        setTimeout(() => {
          setCategories(response.data)
          setLoading(false)
        }, 1000)
      } catch (err) {
        setLoading(false)
      }
    }
    loadCategoreis()
  }, [])

  const onSubmit = async data => {
    const categoryDataFormData = new FormData()

    categoryDataFormData.append('name', data.name)
    categoryDataFormData.append('file', data.file[0])

    try {
      const response = await api.post('categories', categoryDataFormData, {
        validateStatus: () => true
      })

      if (response.status === 200 || response.status === 201) {
        toast.success('Categoria cadastrada com sucesso')
        setCategories([...categories, response.data])

        reset({ name: '', file: {} })
        setFileName(null)
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

  function editCategory(category) {
    push(paths.EditCategory, { category })
  }

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <h2>Criar Categoria</h2>
        <div>
          <Label>Nome</Label>
          <Input type="text" {...register('name')} errorExist={error} />
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

        <Button>Criar</Button>
      </form>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell className="close"></TableCell>
              <TableCell className="edit">Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories &&
              categories.map(category => (
                <TableRow
                  key={category.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {category.name}
                  </TableCell>
                  <TableCell className="cell-image">
                    <img src={category.url} alt="imagem-categoria" />
                  </TableCell>
                  <TableCell className="edit">
                    <EditIcon onClick={() => editCategory(category)} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {loading && <LoadingMessage loading />}

      {!loading && categories.length === 0 && (
        <LoadingMessage>
          Nenhum histórico de categoria foi encontrado.
        </LoadingMessage>
      )}
    </Container>
  )
}
