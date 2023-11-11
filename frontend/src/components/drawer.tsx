import React, { useState, useEffect } from "react"
import {
  Drawer,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material"
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined"
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined"
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined"
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined"
import { useSelector, useDispatch } from "react-redux"
import Requests from "../features/axiosRequest"
import { resetCart, deleteOne, deleteAll } from "../features/cart/cartSlice"
import { toast } from "react-toastify"

interface Data {
  id: number
  name: string
  price: number
  inventory: number
}

function getTotal(data: any) {
  let total = 0
  data.map((item: any) => {
    for (let i = 0; i < item.quantity; i++) {
      total += item.price
    }
  })
  return total.toFixed(2)
}

export default function TemporaryDrawer() {
  const cart = useSelector((state: any) => state.cart.items)
  const dispatch = useDispatch()

  function handleDeleteOne(id: number) {
    dispatch(deleteOne(id))
  }

  function handleDeleteAll(id: number) {
    dispatch(deleteAll(id))
  }

  function command() {
    if (localStorage.getItem("userInfos") && localStorage.getItem("cart")) {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]")
      const userInfos = JSON.parse(localStorage.getItem("userInfos") || "{}")
      Requests("POST", "/api/orders", {
        userId: userInfos[0].id,
        addressOrder: userInfos[0].address,
        status: "En attente de validation",
        totalPrice: getTotal(cart),
      })
        .then((res) => {
          console.log(res.insertId)
          const promises = cart.map((item: any) => {
            return Requests("POST", "/api/productOrder", {
              idOrder: res.insertId,
              idProduct: item.id,
              quantity: item.quantity,
              price: item.price,
            })
          })
          return Promise.all(promises)
        })
        .then((responses) => {
          localStorage.removeItem("cart")
          dispatch(resetCart())
          toast.success("Votre commande a bien été prise en compte")
          setTimeout(() => {
            window.location.href = "/commands"
          }, 3000)
        })
        .catch((error) => {
          console.error(error)
        })
    } else {
      window.location.href = "/login"
    }
  }

  const [state, setState] = useState({
    right: false,
  })

  const toggleDrawer =
    (anchor: string, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      setState({ ...state, [anchor]: open })
    }

  const list = (anchor: string) => (
    <div
      role="presentation"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "500px",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px",
      }}
    >
      <div
        style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
      >
        <CloseOutlinedIcon
          onClick={toggleDrawer(anchor, false)}
          style={{ cursor: "pointer" }}
        />
      </div>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Nom</TableCell>
              <TableCell align="center">Prix</TableCell>
              <TableCell align="right">Quantité</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((row: any) => (
              <TableRow key={row.id}>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="center">{row.price}€</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">
                  <RemoveOutlinedIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDeleteOne(row.id)}
                  />{" "}
                  <DeleteOutlineOutlinedIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDeleteAll(row.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">{getTotal(cart)}€</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )

  return (
    <div>
      <React.Fragment key={"right"}>
        <ShoppingBagOutlinedIcon
          onClick={toggleDrawer("right", true)}
          style={{ cursor: "pointer" }}
        ></ShoppingBagOutlinedIcon>
        <Drawer
          anchor="right"
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
          {useSelector((state: any) => state.cart.items).length > 0 ? (
            <Button
              style={{
                width: "200px",
                margin: "20px",
                border: "1px solid black",
                color: "black",
              }}
              onClick={command}
            >
              Passer la commande
            </Button>
          ) : (
            <p style={{ fontSize: "20px", margin: "20px" }}>
              Votre panier est vide
            </p>
          )}
        </Drawer>
      </React.Fragment>
    </div>
  )
}
