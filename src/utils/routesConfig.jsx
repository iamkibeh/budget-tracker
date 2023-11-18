import Layout from '../components/Layout'
import DashboardHomePage from '../components/dashboard/DashboardHomePage'
import Reports from '../components/dashboard/reports'
import Transactions from '../components/dashboard/transactions'

export const routesConfig = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <DashboardHomePage /> },
      {
        path: '/reports',
        element: <Reports />,
      },
      {
        path: '/transactions',
        element:<Transactions />,
      },
      {
        path: '/accounts',
        element: <h1>Accounts</h1>,
      },
    ],
  },
]
