import Layout from '../components/Layout'
import Home from './Home'
import Table from './Table'
import Detail from './Detail'
import NotFound from './NotFound'
import counterRoute from './Counter'

// 配置路由规则
export const createRoutes = (store) => ({
  path: '/',
  component: Layout,
  indexRoute: Home,
  childRoutes: [
    counterRoute(store),
    Table,
    Detail,
    NotFound,
  ]
})

export default createRoutes
