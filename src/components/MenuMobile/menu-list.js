import { FaShoppingBag, FaUserCog, FaList } from 'react-icons/fa'
import { MdHome, MdOutlineShoppingCart } from 'react-icons/md'

import paths from '../../constants/paths'

const listOptions = [
  {
    id: 1,
    label: 'Início',
    link: paths.Home,
    icon: MdHome
  },
  {
    id: 2,
    label: 'Ver Produtos',
    link: paths.Products,
    icon: FaShoppingBag
  },
  {
    id: 3,
    label: 'Carrinho',
    link: paths.Cart,
    icon: MdOutlineShoppingCart
  },
  {
    id: 4,
    label: 'Meus Pedidos',
    link: paths.MyOrders,
    icon: FaList
  },
  {
    id: 5,
    label: 'Painel Admin',
    link: paths.Orders,
    icon: FaUserCog
  }
]

export default listOptions
