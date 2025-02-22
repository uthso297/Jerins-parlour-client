import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Layout/Root';
import Home from './Pages/Home/Home/Home';
import OurPortfolio from './Pages/OurPortfolio/OurPortfolio';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/portfolio',
        element: <OurPortfolio></OurPortfolio>
      },
      {
        path: 'register',
        element: <Register></Register>
      }

    ]

  },

  {
    path: 'login',
    element: <Login></Login>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />

  </StrictMode>,
)
