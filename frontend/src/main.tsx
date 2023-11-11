import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import App from "./App"
import "./index.css"
import Login from "./pages/login"
import Register from "./pages/register"
import Commands from "./pages/commands"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div>
    <ToastContainer position="top-center" />
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/commands" element={<Commands />} />
        </Routes>
      </Router>
    </Provider>
  </div>,
)
