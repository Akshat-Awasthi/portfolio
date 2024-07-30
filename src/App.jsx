import React from "react"
import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import MainPage from "./Components/MainPage"
import Layout from "./Components/Shared/Layout"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<MainPage/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
