import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Requests from "../features/axiosRequest"
import Header from "../components/header"
import { Button } from "@mui/material"
import { useDispatch } from "react-redux"
import { addProduct } from "../features/product/productSlice"
import { addProductToCart } from "../features/cart/cartSlice"

interface Product {
  id: number
  name: string
  description: string
  price: number
  inventory: number
  img: string
}

export default function Product() {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<Product>()
  const dispatch = useDispatch()

  useEffect(() => {
    Requests("GET", `/api/products/${id}`).then((res) => {
      setProduct(res[0])
    })
  }, [id])

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "80px",
        }}
      >
        <div style={{ width: "50%" }}>
          <img
            style={{
              margin: "20px",
              width: "50%",
              objectFit: "cover",
            }}
            src={product ? product?.img : ""}
          ></img>
        </div>
        <div style={{ width: "50%" }}>
          <div
            style={{
              display: "flex",
              height: "100%",
              flexDirection: "column",
            }}
          >
            <div style={{ margin: "20px 0px" }}>
              <h2>{product ? product.name : null}</h2>
            </div>
            <div style={{ margin: "20px 0px" }}>
              {product ? product.price + " €" : null}
            </div>
            <div style={{ margin: "20px 0px" }}>
              <Button
                onClick={() => {
                  dispatch(addProductToCart(product))
                }}
              >
                Ajouter au panier
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
