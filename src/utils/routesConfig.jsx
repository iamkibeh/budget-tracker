import Layout from "../components/Layout";
import DashboardHomePage from "../components/dashboard/DashboardHomePage";

export const routesConfig = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <DashboardHomePage /> },
      
    ],
  },
]