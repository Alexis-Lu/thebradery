import React, { useEffect, useState } from "react"
import "../styles/components/header.css"
import logo from "../public/the-bradery-logo_v2.svg"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import TemporaryDrawer from "./drawer"
import PopoverComponent from "./popover"
import SearchPopover from "./searchPopover"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { ThunkDispatch } from "@reduxjs/toolkit"
import { RootState } from "../app/store"
import { getAllProducts } from "../features/product/productSlice"

interface userInfos {
  firstname: string
  lastname: string
  email: string
  password: string
  address: string
}

export default function Header() {
  const [userInfos, setUserInfos] = useState<userInfos[] | null>(null)
  const datas = useSelector((state: any) => state.product.items)
  const dispatch: ThunkDispatch<RootState, any, any> = useDispatch()
  useEffect(() => {
    if (!datas.length) {
      dispatch(getAllProducts())
    }
    const userInfosString = localStorage.getItem("userInfos")
    if (userInfosString) {
      const userDatas = JSON.parse(userInfosString)
      setUserInfos(userDatas)
    }
  }, [])

  return (
    <div className="container">
      <div className="containerLeft">
        <SearchPopover />
      </div>
      <div className="containerCenter">
        <img
          className="logo"
          src={logo}
          alt="The Bradery"
          onClick={() => (window.location.href = "/")}
          style={{ cursor: "pointer" }}
        />
      </div>

      <div className="containerRight">
        <div
          className="containerRightItems"
          style={{ fontSize: "22px", fontWeight: "bold" }}
        >
          {userInfos
            ? `${userInfos[0].firstname} ${userInfos[0].lastname}`
            : null}
        </div>
        <div className="containerRightItems">
          <PopoverComponent />
        </div>
        <div className="containerRightItems">
          <TemporaryDrawer />
        </div>
      </div>
    </div>
  )
}
