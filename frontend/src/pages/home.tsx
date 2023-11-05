import React, { useEffect, useState } from "react"
import "../styles/pages/home.css"
import Requests from "../features/axiosRequest"
import ProductCard from "../components/card"
import { Grid } from "@mui/material"

export default function Home() {
  const [datas, setDatas] = useState<object[]>([])
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await Requests(
          "GET",
          "http://localhost:3001/api/products",
        )
        setDatas(response)
        console.log(response)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="containerHome">
      <Grid container spacing={2}>
        {datas.map((data: any) => (
          <Grid item xs={12} sm={6} md={3} key={data.id}>
            <ProductCard name={data.name} price={data.price} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
