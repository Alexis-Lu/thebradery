import React from "react"
import { Card, CardContent, CardMedia, Typography } from "@mui/material/"

interface Props {
  name: string
  price: string
}

export default function ProductCard(props: Props) {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.price}
        </Typography>
      </CardContent>
    </Card>
  )
}
