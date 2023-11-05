import React from "react"
import "../styles/components/header.css"
import logo from "../public/the-bradery-logo_v2.svg"
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined"
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"

export default function Header() {
  return (
    <div className="container">
      <div className="containerLeft">
        <SearchOutlinedIcon />
        // TODO: finir search <input type="text" placeholder="Search" />
      </div>
      <div className="containerCenter">
        <img className="logo" src={logo} alt="The Bradery" />
      </div>

      <div className="containerRight">
        <div className="containerRightItems">// TODO - add Name</div>
        <div className="containerRightItems">
          <AccountCircleOutlinedIcon />
        </div>
        <div className="containerRightItems">
          <ShoppingBagOutlinedIcon />
        </div>
      </div>
    </div>
  )
}
