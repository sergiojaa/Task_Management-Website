import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"


function App() {
 const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {path:'/',
        element:<Home/>
      }

    ]
  }
 ])

  return (
   <div>
    <RouterProvider router={router}>

    </RouterProvider>
   </div>
  )
}

export default App
