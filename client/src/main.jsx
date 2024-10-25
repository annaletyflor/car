import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home.jsx'
import Patios from './pages/patios.jsx'
import Carropatio from './components/carropatio/Carropatio.jsx'
import Carrum from './pages/Carrum.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <PaginaErro/>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Patios", element: <Patios/>},
      { path: "/CarrosDisp", element: <Carropatio/>},
      { path: "/CarForm", element: <Carrum/>}
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);