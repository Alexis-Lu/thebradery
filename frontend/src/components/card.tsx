import React from "react"
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material/"
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined"
import { addProductToCart } from "../features/cart/cartSlice"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"

interface Props {
  id: number
  name: string
  price: string
  inventory: number
  img: string
}

export default function ProductCard(props: Props) {
  const dispatch = useDispatch()
  const cart = useSelector((state: any) => state.cart.items)

  function handleAddToCart(datas: any) {
    dispatch(addProductToCart(datas))
  }

  return (
    <Card
      sx={{
        boxShadow: "0 0 0 0 transparent",
      }}
    >
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CardMedia
          component="img"
          height="300"
          image={props.img}
          alt="random"
        ></CardMedia>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
            width: "100%",
          }}
        >
          <Typography gutterBottom variant="h5" component="h1">
            {props.name}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            style={{
              fontSize: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div>{props.price}€ </div>
            <div>
              {props.inventory === 0 ? (
                "Stock épuisé"
              ) : (
                <Button
                  style={{ border: "1px solid" }}
                  onClick={() => handleAddToCart(props)}
                >
                  <AddCardOutlinedIcon />
                </Button>
              )}
            </div>
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}
