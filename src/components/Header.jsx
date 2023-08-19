import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Logo from "../assets/logo2.png";
import styled from "@emotion/styled";
import { CurrencyLiraSharp } from "@mui/icons-material";

const Container = styled(AppBar)`
  background-color: #1df252;
`;

const Header = () => {
  return (
    <>
      <Container position="static">
        <Toolbar>
          <img src={Logo} alt="logo" style={{ width: 50 }} />

          <div>
            <h1
              style={{
                color: "black",
                marginLeft: 20,
                fontFamily: "roboto",
              }}
            >
              CodePen
            </h1>
          </div>
        </Toolbar>
      </Container>
    </>
  );
};

export default Header;
