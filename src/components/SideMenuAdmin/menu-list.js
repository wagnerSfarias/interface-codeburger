import AddCategory from '@mui/icons-material/AddCircleOutline'
import AddCart from '@mui/icons-material/AddShoppingCart'
import Home from '@mui/icons-material/Home'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import ViewList from '@mui/icons-material/ViewList'

import paths from '../../constants/paths'

const listLinks = [
  {
    id: 1,
    label: 'Home',
    link: paths.Home,
    icon: Home
  },
  {
    id: 2,
    label: 'Pedidos',
    link: paths.Orders,
    icon: ShoppingBagIcon
  },
  {
    id: 3,
    label: 'Listar Produtos',
    link: paths.ListProducts,
    icon: ViewList
  },
  {
    id: 4,
    label: 'Novo Produtos',
    link: paths.NewProduct,
    icon: AddCart
  },
  {
    id: 5,
    label: 'Nova Categoria',
    link: paths.NewCategory,
    icon: AddCategory
  }
]

export default listLinks
