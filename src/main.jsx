// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DetailWork from './components/detailWork.jsx';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';
import About from './components/about.jsx';
import Work from './components/work.jsx';
import Contact from './components/contact.jsx';
import Service from './components/service.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/navigation",
    element: <About />,
  },
  {
    path: "/work",
    element: <Work />,
  },
  {
    path: "/work/:id",
    element: <DetailWork />,
  },
  {
    path: "/email-us",
    element: <Contact />,
  },
  {
    path: "/service",
    element: <Service />,
  },
]);

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <AnimatePresence>
    <RouterProvider router={router} />
  </AnimatePresence>
  // </StrictMode>,
)
