import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import logo from "../public/the-bradery-logo_v2.svg"
import { Button, TextField } from "@mui/material"
import Requests from "../features/axiosRequest"
import { toast } from "react-toastify"

interface IFormInput {
  email: string
  password: string
}

export default function Login() {
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    try {
      Requests("POST", "/api/users/login", data).then((res) => {
        if (res) {
          localStorage.setItem("userInfos", JSON.stringify(res))
          window.location.href = "/"
        } else {
          toast.error("Erreur lors de la connexion")
        }
      })
    } catch (error) {}
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "100%",
        height: "100vh",
        backgroundColor: "#fcf5ee",
      }}
    >
      <img
        style={{ width: "300px", height: "auto", cursor: "pointer" }}
        src={logo}
        alt="The Bradery"
        onClick={() => (window.location.href = "/")}
      />
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          width: "300px",
          border: "1px solid black",
          padding: "40px",
          borderRadius: "10px",
          backgroundColor: "white",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <label>Email</label>
        <TextField
          {...register("email")}
          required
          type="email"
          style={{ margin: "10px 0px" }}
        />
        <label>Mot de passe</label>
        <TextField
          {...register("password")}
          required
          type="password"
          style={{ margin: "10px 0px" }}
        />
        <Button
          type="submit"
          style={{
            backgroundColor: "#fcf5ee",
            border: "1px solid black",
            color: "black",
            margin: "20px 0px",
          }}
        >
          Submit
        </Button>
        <a href="/register" style={{ textDecoration: "none", color: "black" }}>
          Créer un compte
        </a>
      </form>
    </div>
  )
}
