import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import Login from "./layout/Login"
import EditClient from "./pages/EditClient"
import ShowClient from "./pages/ShowClient"
import Home from "./pages/Home"
import NewClient from "./pages/NewClient"



function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element= {<Login />} >
        </Route>

        <Route path="/clientes" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="nuevo" element={<NewClient />} />
          <Route path="edit/:id" element={<EditClient />} />
          <Route path=":id" element={<ShowClient />} />
        </Route>



      </Routes>
    </BrowserRouter>

  )
}

export default App
