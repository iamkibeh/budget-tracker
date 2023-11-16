import { useRoutes } from 'react-router-dom'
import { routesConfig } from './utils/routesConfig'

function App() {
  const routes = useRoutes(routesConfig)
  return <>{routes}</>
}

export default App
