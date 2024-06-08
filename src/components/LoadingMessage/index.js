import Proptypes from 'prop-types'
import React from 'react'

import { Container, Message, IconWarn, IconLoading } from './styles'

export function LoadingMessage({ children, loading }) {
  return (
    <Container>
      {!loading && <IconWarn />}
      {loading && <IconLoading />}
      <Message>{loading ? 'Carregando' : children}</Message>
    </Container>
  )
}
LoadingMessage.propTypes = {
  children: Proptypes.string,
  loading: Proptypes.bool
}
