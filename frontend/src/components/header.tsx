import React, { useEffect, useState } from "react"
import "../styles/components/header.css"
import logo from "../public/the-bradery-logo_v2.svg"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import TemporaryDrawer from "./drawer"
import PopoverComponent from "./popover"

interface userInfos {
  firstname: string
  lastname: string
  email: string
  password: string
  address: string
}

export default function Header() {
  const [userInfos, setUserInfos] = useState<userInfos[] | null>(null)
  useEffect(() => {
    const userInfosString = localStorage.getItem("userInfos")
    console.log(userInfosString)
    if (userInfosString) {
      const userDatas = JSON.parse(userInfosString)
      setUserInfos(userDatas)
    }
  }, [])

  return (
    <div className="container">
      <div className="containerLeft">
        <SearchOutlinedIcon />
        // TODO: finir search <input type="text" placeholder="Search" />
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
