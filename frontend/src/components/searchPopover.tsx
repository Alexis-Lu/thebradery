import React, { useState } from "react"
import { Popover, InputBase, IconButton } from "@mui/material"
import { Search as SearchIcon } from "@mui/icons-material"
import { useSelector } from "react-redux"
import { set } from "react-hook-form"

interface Product {
  id: number
  name: string
  description: string
  price: number
  inventory?: number
  img: string
}

const SearchPopover = () => {
  const products = useSelector((state: any) => state.product.items)
  const [searchValue, setSearchValue] = useState("")
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSearchValue(value)
    // Mettre à jour la valeur de recherche uniquement si la longueur est supérieure ou égale à 3
    if (value.length >= 3 || value === "") {
      setSearchValue(value)
    }
  }

  const filteredProducts = products.filter((product: Product) =>
    product.name.toLowerCase().includes(searchValue.toLowerCase()),
  )

  const handlePopoverOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  function handleClickProduct(id: number) {
    window.location.href = `/product/${id}`
  }

  const open = Boolean(anchorEl)

  return (
    <>
      <IconButton onClick={handlePopoverOpen}>
        <SearchIcon style={{ color: "black" }} />
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div style={{ padding: "0px" }}>
          <InputBase
            placeholder="Rechercher produit"
            value={searchValue}
            onChange={handleSearchChange}
            style={{
              backgroundColor: "lightgrey",
              padding: "10px",
              width: "100%",
            }}
          />
          {searchValue.length >= 3 &&
            // Afficher les résultats seulement si la longueur de la recherche est supérieure ou égale à 3
            filteredProducts.map((product: Product) => (
              <div
                key={product.id}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  cursor: "pointer",
                }}
                onClick={() => {
                  handleClickProduct(product.id)
                }}
              >
                <h3>{product.name}</h3>
                <img
                  style={{ width: "50px", height: "auto" }}
                  src={product.img}
                  alt={product.name}
                />
              </div>
            ))}
        </div>
      </Popover>
    </>
  )
}

export default SearchPopover
