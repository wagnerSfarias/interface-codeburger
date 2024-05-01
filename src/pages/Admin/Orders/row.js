import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useUser } from '../../../hooks/UserContext'
import api from '../../../services/api'
import formatCurrency from '../../../utils/formatCurrency'
import status from './order-status'
import { ReactSelectStyle } from './styles'

export default function Row({ row, setOrders, orders }) {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [deliveryTax] = useState(5)
  const history = useHistory()
  const { logout } = useUser()

  const sumAllPrice = row.products.reduce((acc, current) => {
    return current.price * current.quantity + acc
  }, 0)

  async function setNewStatus(id, status) {
    setIsLoading(true)
    try {
      const response = await api.put(
        `orders/${id}`,
        { status },
        { validateStatus: () => true }
      )

      if (response.status === 200 || response.status === 201) {
        const newOrders = orders.map(order => {
          return order._id === id ? { ...order, status } : order
        })

        setOrders(newOrders)
      } else if (response.status === 401) {
        logout()
        toast.error('Ocorreu um erro com sua autenticação! Tente novamente.')

        setTimeout(() => {
          history.push('/login')
        }, 2000)
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Falha no sistema! Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell className="button">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" className="close-table">
          {row.orderId}
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.date}</TableCell>
        <TableCell>
          <ReactSelectStyle
            classNamePrefix="react-select-status"
            options={status.filter(sts => sts.value !== 'Todos')}
            menuPortalTarget={document.body}
            isSearchable={false}
            placeholder="Status"
            defaultValue={
              status.find(option => option.value === row.status) || null
            }
            onChange={newStatus => {
              setNewStatus(row.orderId, newStatus.value)
            }}
            isLoading={isLoading}
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Pedido
              </Typography>
              <p className="number-order">Nº {row.orderId}</p>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Quantidade</TableCell>
                    <TableCell>Produto</TableCell>
                    <TableCell>Categoria</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.products.map(productRow => (
                    <TableRow key={productRow.id}>
                      <TableCell component="th" scope="row">
                        {productRow.quantity}
                      </TableCell>
                      <TableCell>{productRow.name}</TableCell>
                      <TableCell>{productRow.category}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell className="price">Total</TableCell>
                    <TableCell></TableCell>
                    <TableCell className="price">
                      {formatCurrency(sumAllPrice + deliveryTax)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

Row.propTypes = {
  orders: PropTypes.array,
  setOrders: PropTypes.func,
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    orderId: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        quantity: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired
        // url: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
}
