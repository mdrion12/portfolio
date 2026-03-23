import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Home from './Component/Home.jsx'
import About from './Component/About.jsx'
import Skills from './Component/Skills.jsx'
import Projects from './Component/Projects.jsx'
import Contact from './Component/Contact.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,   // ✅ fixed
    children: [
      {
        index: true,
        element: <Home />   // ✅ fixed
      },
      {
        path: "home",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "skills",
        element: <Skills />
      },
      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "contact",
        element: <Contact />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)