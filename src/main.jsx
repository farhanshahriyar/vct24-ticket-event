import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import PricePage from './pages/PricePage/PricePage';
import FeatureDetails from './layouts/Features/FeatureDetails';
// import { UserProvider } from './context/UserContext.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/price",
        element: <PricePage/>,
      },
      {
        path: "/feature/:id",
        element: <FeatureDetails/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
     <RouterProvider router={router} />

  </React.StrictMode>,
)
