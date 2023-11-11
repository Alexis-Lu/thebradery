import React from "react"
import "../styles/pages/home.css"
import ProductCard from "../components/card"
import { Grid } from "@mui/material"
import { useSelector } from "react-redux"
import { Product } from "../features/product/productSlice"
import { RootState } from "../app/store"

export default function Home() {
  const datas: Product[] = useSelector(
    (state: RootState) => state.product.items,
  )

  function handleClickProduct(id: number) {
    window.location.href = `/product/${id}`
  }

  return (
    <div className="containerHome">
      <Grid container spacing={6}>
        {datas && datas.length > 0 ? (
          datas.map((data: any) => (
            <Grid item xs={12} sm={6} md={3} key={data.id}>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => handleClickProduct(data.id)}
              >
                <ProductCard
                  id={data.id}
                  name={data.name}
                  price={data.price}
                  inventory={data.inventory}
                  img={data.img}
                />
              </div>
            </Grid>
          ))
        ) : (
          <p>Aucune donnée</p>
        )}
      </Grid>
    </div>
  )
}
