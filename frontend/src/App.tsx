import logo from "./logo.svg"
import { Counter } from "./features/counter/Counter"
import "./App.css"
import React from "react"
import Header from "./components/header"
import Home from "./pages/home"

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  )
}

export default App
