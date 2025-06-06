import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { Layout, ProtectedRoutes } from "./components"

const router = createBrowserRouter([
  {
    path: '/',
    element: <></>
  },
  {
    path: '/login',
    element: <></>
  },
  {
    path: '/signup',
    element: <></>
  },
  {
    path: '/forgot-password',
    element: <></>
  },
  {
    path: '/resend-verifiaction',
    element: <></>
  },
  {
    element: <ProtectedRoutes/>, // protected route element
    children: [
      {
        element: <Layout/>,
        children: [
          {
            path: '/dashboard',
            element: <></>
          },
          {
            path: '/edit-workout/:workoutId',
            element: <></>
          },
          {
            path: '/edit-pr/:prId',
            element: <></>
          },            
        ]
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
