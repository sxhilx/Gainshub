import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { PublicLayout, ProtectedLayout, ProtectedRoutes } from "./components"
import { AddPR, AddWorkout, AuthRedirect, Dashboard, ForgotPassword, LandingPage, Login, Register, ResendVerification, ResetPassword, VerifyEmail, Workouts } from "./pages"


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
    element: <PublicLayout/>,
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
        element: <ProtectedLayout/>,
        children: [
          {
            path: '/dashboard',
            element: <Dashboard/>
          },
          {
            path: '/add-workout/:id?',
            element: <AddWorkout/>
          },
          {
            path: '/workouts',
            element: <Workouts/>
          },
          {
            path: '/edit-workout/:workoutId',
            element: <></>
          },
          {
            path: '/add-pr',
            element: <AddPR/>
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
