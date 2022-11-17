import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <Card sx={{ height: "4.5vw", boxShadow: "0px 2px 4px #15223229" }}>
      <Box component="div">
        <Grid container>
          <Grid
            item
            xs={6}
            sx={{
              textAlign: "left",
              margin: "2rem 0rem 1rem 0rem",
              position: "fixed",
              right: "40px",
              top: "16px",
            }}
          >
            <AccountCircleIcon fontSize={"large"} />

            <Typography component="span" color="primary" textAlign="left">
              Anjali
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default Header;
