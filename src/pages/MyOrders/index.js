import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

import BannerImg from '../../assets/banner.jpg'
import { Banner, Footer } from '../../components'
import api from '../../services/api'
import formatDate from '../../utils/formartDate'
import Row from './row'
import { Container, ContainerWarn } from './styles'

export function MyOrders() {
  const [orders, setOrders] = useState([])
  const [rows, setRows] = useState([])

  useEffect(() => {
    async function loadOrders() {
      try {
        const response = await api.get(`user/orders`)

        setOrders(response.data)
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
    const newRows = orders.map(ord => createData(ord))
    setRows(newRows)
  }, [orders])

  return (
    <Container>
      <Banner src={BannerImg} alt="Imagem banner" />
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell className="button" />
              <TableCell>Pedido</TableCell>
              <TableCell>Data do pedido</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <Row key={row.orderId} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <ContainerWarn>
        <h2>
          Qualquer dúvida ou problema com seu pedido, entre em contato conosco,
          através do nosso whatsApp.
        </h2>

        <a
          href="http://api.whatsapp.com/send?phone=551139938888&text=Olá,%20Pode%20me%20ajudar%20com%20meu%20pedido?."
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp />
        </a>
      </ContainerWarn>
      <Footer />
    </Container>
  )
}
