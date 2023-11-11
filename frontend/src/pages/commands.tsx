import React, { useEffect, useState } from "react"
import logo from "../public/the-bradery-logo_v2.svg"
import Requests from "../features/axiosRequest"
import { set } from "react-hook-form"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tab,
} from "@mui/material"

interface Command {
  id: number
  idOrder: string
  idProduct: number
  price: string
  quantity: string
}

export default function Commands() {
  const [commands, setCommands] = useState<any>([])
  const userInfosString = JSON.parse(localStorage.getItem("userInfos") || "{}")
  const [commandsProducts, setCommandsProducts] = useState<any>([])
  useEffect(() => {
    if (localStorage.getItem("userInfos")) {
      try {
        Requests("GET", `/api/orders/user/${userInfosString[0].id}`).then(
          (orders) => {
            setCommands(orders)

            const productRequests = orders.map((order: Command) => {
              return Requests(
                "GET",
                `/api/productOrder/order/${order.id}`,
              ).then((products) => {
                const productInfoRequests = products.map((product: any) =>
                  Requests("GET", `/api/products/${product.idProduct}`).then(
                    (res) => {
                      return res
                    },
                  ),
                )

                return Promise.all(productInfoRequests).then((productInfos) => {
                  return {
                    ...order,
                    products: productInfos.map((info, index) => ({
                      ...info,
                      quantity: products[index].quantity,
                    })),
                  }
                })
              })
            })

            Promise.all(productRequests).then((updatedCommandsProducts) => {
              setCommandsProducts(updatedCommandsProducts)
            })
          },
        )
      } catch (error) {
        console.log(error)
      }
    }
  }, [])

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        margin: "30px 0px",
        flexDirection: "column",
      }}
    >
      <img
        style={{ width: "300px", height: "auto", cursor: "pointer" }}
        src={logo}
        alt="The Bradery"
        onClick={() => (window.location.href = "/")}
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        {userInfosString[0] ? (
          <h1>Mes commandes</h1>
        ) : (
          <h1>Vous n'êtes pas connecté</h1>
        )}
        <TableContainer
          component={Paper}
          style={{ display: "flex", width: "80%" }}
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Date de commande</TableCell>
                <TableCell align="left">Details</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="right">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {commandsProducts.map((command: any, index: number) => (
                <TableRow key={command.id}>
                  <TableCell align="left">
                    {command.dateOrder.split("T")[0]}
                  </TableCell>
                  <TableCell align="left">
                    {console.log(commandsProducts)}
                    {commandsProducts[index]
                      ? commandsProducts[index].products.map(
                          (product: any, index: number) => (
                            <div key={product.id}>
                              {product.quantity} x {product.id}
                              {product[0] ? product[0].name : "test "}
                            </div>
                          ),
                        )
                      : null}
                  </TableCell>
                  <TableCell align="left">{command.status}</TableCell>
                  <TableCell align="right">{command.totalPrice} €</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}
