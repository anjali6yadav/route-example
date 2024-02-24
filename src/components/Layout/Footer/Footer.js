import React from "react";
import { Card, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Card sx={{ boxShadow: "0" }}>
      <Grid container>
        <Grid item xs={11} sx={{ textAlign: "center", padding: "2px" }}>
          <Typography variant="body1">2024</Typography>
        </Grid>
        <Grid item xs={1} sx={{ textAlign: "right", paddingRight: 5 }}>
          <Typography variant="body1">0.1.1</Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Footer;
