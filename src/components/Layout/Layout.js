import React from "react";

import { Box, Container } from "@mui/material";
import Header from "components/Layout/Header/Header";
import Footer from "components/Layout/Footer/Footer";
import Body from "components/Layout/Body/Body";
import SideBar from "components/Layout/SideBar/SideBar";

const Layout = ({ childArr }) => {
  return (
    <Container maxWidth={false} disableGutters>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f8f8f8",
        }}
      >
        {/* Header Layout */}
        <Box
          component="header"
          sx={{ width: "100%", position: "fixed", zIndex: "1000", top: 0 }}
          aria-label="Header Component"
        >
          <Header />
        </Box>
        {/* Side Bar Layout */}
        <Box
          component="div"
          sx={{
            width: "100%",
            display: "flex",
            top: "4vw",
            position: "relative",
            minHeight: "91vh",
          }}
          aria-label="Side Bar Component"
        >
          <Box
            component="nav"
            sx={{ flexShrink: { sm: 0 } }}
            aria-label="Side Bar Component"
          >
            <SideBar />
            {/* Main Body Layout */}
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              width: "auto",
              backgroundColor: "#f8f8f8",
              p: 4,
              m: 5,
            }}
          >
            <Body router={childArr} />
          </Box>
        </Box>
        {/* Footer */}
        <Box
          component="footer"
          sx={{ width: "100%", position: "fixed", bottom: 0 }}
        >
          <Footer />
        </Box>
      </Box>
    </Container>
  );
};

export default Layout;
