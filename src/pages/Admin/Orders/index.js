import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'

import api from '../../../services/api'
import formatDate from '../../../utils/formartDate'
import status from './order-status'
import Row from './row'
import { Container, Menu, ButtonMenu } from './styles'

export default function Orders() {
  const [orders, setOrders] = useState([])
  const [filterOrders, setFilterOrders] = useState([])
  const [activeStatus, setActiveStatus] = useState(1)
  const [rows, setRows] = useState([])

  useEffect(() => {
    async function loadOrders() {
      try {
        const response = await api.get('orders')

        setOrders(response.data)
        setFilterOrders(response.data)
      } catch (err) {}
    }

    loadOrders()
  }, [])

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: formatDate(order.createdAt),
      status: order.status,
      products: order.products
    }
  }

  useEffect(() => {
    const newRows = filterOrders.map(ord => createData(ord))
    setRows(newRows)
  }, [filterOrders])

  useEffect(() => {
    if (activeStatus === 1) {
      setFilterOrders(orders)
    } else {
      const statusIndex = status.findIndex(sts => sts.id === activeStatus)
      const newFilteredOrders = orders.filter(
        order => order.status === status[statusIndex].value
      )
      setFilterOrders(newFilteredOrders)
    }
  }, [orders, activeStatus])

  function handleStatus(status) {
    if (status.id === 1) {
      setFilterOrders(orders)
    } else {
      const newOrders = orders.filter(order => order.status === status.value)
      setFilterOrders(newOrders)
    }
    setActiveStatus(status.id)
  }

  return (
    <Container>
      <Menu>
        {status &&
          status.map(status => (
            <ButtonMenu
              key={status.id}
              type="button"
              onClick={() => handleStatus(status)}
              isActiveStatus={activeStatus === status.id}
            >
              {status.label}
            </ButtonMenu>
          ))}
      </Menu>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell className="button" />
              <TableCell className="close-table">Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do pedido</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <Row
                key={row.orderId}
                row={row}
                setOrders={setOrders}
                orders={orders}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
