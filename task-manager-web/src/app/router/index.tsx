import { DashboardLayout } from '@app/layouts/dashboard-layout'
import { HomePage } from '@pages'
import { createBrowserRouter, Navigate } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    element: <Navigate replace to='/' />,
    index: true,
  },
  {
    children: [
      {
        element: <HomePage />,
        path: 'home',
      },
    ],
    element: <DashboardLayout />,
    path: 'dashboard',
  },
])
