import React, { useEffect, useState, useMemo } from "react"
import "../styles/pages/home.css"
import Requests from "../features/axiosRequest"
import ProductCard from "../components/card"
import { Grid } from "@mui/material"
import { toast } from "react-toastify"

export default function Home() {
  const [datas, setDatas] = useState<object[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Requests("GET", "/api/products")
        setDatas(response)
      } catch (error) {
        toast.error("Error fetching data:")
      }
    }

    fetchData()
  }, [])

  return (
    <div className="containerHome">
      <Grid container spacing={6}>
        {datas ? (
          datas.map((data: any) => (
            <Grid item xs={12} sm={6} md={3} key={data.id}>
              <ProductCard
                id={data.id}
                name={data.name}
                price={data.price}
                inventory={data.inventory}
                img={data.img}
              />
            </Grid>
          ))
        ) : (
          <p>Aucune donnée</p>
        )}
      </Grid>
    </div>
  )
}
