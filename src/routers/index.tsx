import { useRoutes } from 'react-router-dom'
import Application from '~/pages/Application'

const AppRoutes = () => {
  const element = useRoutes([{ path: '/v3/application/detail', element: <Application /> }])
  return element
}

export default AppRoutes
