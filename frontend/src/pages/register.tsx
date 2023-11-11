import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import logo from "../public/the-bradery-logo_v2.svg"
import { Button, TextField, Grid } from "@mui/material"
import Requests from "../features/axiosRequest"
import { toast } from "react-toastify"

interface IFormInput {
  firstname: string
  lastname: string
  email: string
  password: string
  address: string
}

export default function Register() {
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    try {
      Requests("POST", "/api/users", data).then((res) => {
        if (res) {
          window.location.href = "/login"
        } else {
          toast.error("Erreur lors de la création du compte")
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
          width: "600px",
          border: "1px solid black",
          padding: "40px",
          borderRadius: "10px",
          backgroundColor: "white",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              paddingRight: "5px",
            }}
          >
            <label>Prénom</label>
            <TextField
              {...register("firstname")}
              required
              type="text"
              style={{ margin: "10px 0px" }}
            />
            <label>Nom</label>
            <TextField
              {...register("lastname")}
              required
              type="text"
              style={{ margin: "10px 0px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              paddingLeft: "5px",
            }}
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
          </div>
        </div>
        <label>Adresse</label>
        <TextField
          {...register("address")}
          required
          type="text"
          style={{ margin: "10px 0px" }}
        />
        <Button
          type="submit"
          style={{
            backgroundColor: "#fcf5ee",
            border: "1px solid black",
            color: "black",
            margin: "10px 0px",
          }}
        >
          Créer mon compte
        </Button>
      </form>
    </div>
  )
}
