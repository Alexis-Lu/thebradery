import React from "react"
import { Popover, Button } from "@mui/material"
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined"

export default function PopoverComponent() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const userInfos = JSON.parse(localStorage.getItem("userInfos") || "{}")

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? "simple-popover" : undefined

  function handleClickCommands() {
    window.location.href = "/commands"
  }

  function handleClickDisconnect() {
    localStorage.removeItem("userInfos")
    window.location.href = "/"
  }

  function handleClickConnect() {
    window.location.href = "/login"
  }

  return (
    <div>
      <React.Fragment>
        <Button
          onClick={handleClick}
          style={{ cursor: "pointer", color: "black" }}
          sx={{ "&:hover": { backgroundColor: "transparent" } }}
          disableRipple
        >
          <AccountCircleOutlined />
        </Button>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          style={{ marginTop: "10px" }}
        >
          <div
            style={{
              margin: "30px 50px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
              {userInfos[0] ? (
                <h3>
                  Bienvenue {userInfos[0].firstname} {userInfos[0].lastname} !
                </h3>
              ) : null}
            </div>
            <div>
              {userInfos[0] ? (
                <div
                  style={{
                    margin: "0px 0px",
                    width: "100%",
                    padding: "10px 0px",
                  }}
                >
                  <Button
                    style={{
                      color: "black",
                      padding: "10px 20px",
                      backgroundColor: "#fcf5ee",
                      border: "1px solid #f5e6d9",
                    }}
                    onClick={handleClickCommands}
                  >
                    Mes commandes
                  </Button>
                </div>
              ) : null}
              {userInfos[0] ? (
                <div>
                  <Button
                    style={{
                      color: "black",
                      padding: "10px 20px",
                      backgroundColor: "#fcf5ee",
                      border: "1px solid #f5e6d9",
                    }}
                    onClick={handleClickDisconnect}
                  >
                    Me déconnecter
                  </Button>
                </div>
              ) : (
                <Button
                  style={{
                    color: "black",
                    padding: "10px 20px",
                    backgroundColor: "#fcf5ee",
                    border: "1px solid #f5e6d9",
                  }}
                  onClick={handleClickConnect}
                >
                  Me connecter
                </Button>
              )}
            </div>
          </div>
        </Popover>
      </React.Fragment>
    </div>
  )
}
