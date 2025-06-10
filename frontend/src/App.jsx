import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { Layout, ProtectedRoutes } from "./components"
import { AuthRedirect, ForgotPassword, LandingPage, Login, Register, ResendVerification, ResetPassword, VerifyEmail } from "./pages"


const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <Register/>
  },
  {
    path: '/auth-redirect',
    element: <AuthRedirect/>
  },
  {
    path: '/verify-email',
    element: <VerifyEmail/>
  },
  {
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <LandingPage/>
      },
      {
        path: '/forgot-password',
        element: <ForgotPassword/>
      },
      {
        path: '/reset-password',
        element: <ResetPassword/>
      },
      {
        path: '/resend-verification',
        element: <ResendVerification/>
      },    
    ]
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
