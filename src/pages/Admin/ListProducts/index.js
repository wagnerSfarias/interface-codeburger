import Cancel from '@mui/icons-material/Cancel'
import Checked from '@mui/icons-material/CheckBox'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import paths from '../../../constants/paths'
import { useUser } from '../../../hooks/UserContext'
import api from '../../../services/api'
import formatCurrency from '../../../utils/formatCurrency'
import { Container, Img, EditIcon } from './styles'

export default function ListProducts() {
  const [products, setProducts] = useState()
  const { push } = useHistory()
  const { logout } = useUser()

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await api.get('products', {
          validateStatus: () => true
        })

        if (response.status === 200 || response.status === 201) {
          setProducts(response.data)
        } else if (response.status === 401) {
          logout()
          toast.error('Ocorreu um erro com sua autenticação! Tente novamente.')

          setTimeout(() => {
            push('/login')
          }, 2000)
        } else {
          throw new Error()
        }
      } catch (err) {
        toast.error('Falha no sistema! Tente novamente.')
      }
    }

    loadProducts()
  }, [])

  function isOffer(offerStatus) {
    if (offerStatus) {
      return <Checked style={{ color: '#228B22' }} />
    }
    return <Cancel style={{ color: '#CC1717' }} />
  }

  function editProduct(product) {
    push(paths.EditProduct, { product })
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell className="offer-icon">Produto em Oferta</TableCell>
              <TableCell className="close"></TableCell>
              <TableCell className="edit">Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products.map(product => (
                <TableRow
                  key={product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell>{formatCurrency(product.price)}</TableCell>
                  <TableCell className="offer-icon">
                    {isOffer(product.offer)}
                  </TableCell>
                  <TableCell className="close">
                    <Img src={product.url} alt="imagem do produto" />
                  </TableCell>
                  <TableCell className="edit">
                    <EditIcon onClick={() => editProduct(product)} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
