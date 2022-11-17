import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

/* Create DrawerHeader div with css props */
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

/* Drawer Header Component and Apply css */
const DrawerHeaderComponent = ({ open, handleDrawer, username }) => {
  /* Get color on the basis of drawer open and close */
  const fontSize = "small";
  return (
    <DrawerHeader
      sx={{
        position: "absolute",
        right: "20px",
      }}
    >
      <Grid
        container
        sx={{
          marginTop: "1.5rem",
          padding: "0 0.5rem 0 0.5rem",
          height: "0",
          zIndex: "1",
          position: "absolute",
          right: "-1.1875rem",
          top: "-0.1875rem",
        }}
      >
        {/* Drawer has closed */}
        {!open && (
          <Grid item xs={12}>
            <IconButton
              sx={{
                backgroundColor: "#0079c2",
                color: "#ffffff",
                padding: "0rem",
                fontSize: "0.0625rem",
                position: "fixed",
                left: "3.4375rem",
                "&:hover": {
                  backgroundColor: "#0079c2d9",
                },
              }}
              aria-label={"Anja"}
              onClick={handleDrawer}
            >
              <KeyboardArrowRightIcon fontSize={fontSize} />
            </IconButton>
          </Grid>
        )}
        {/* Drawer has opened */}
        {open && (
          <>
            <Grid
              item
              xs={12}
              onClick={handleDrawer}
              sx={{
                textAlign: "right",
              }}
            >
              <IconButton
                sx={{
                  backgroundColor: "#0079c2",
                  color: "#ffffff",
                  padding: "0rem",
                  fontSize: "0.0625rem",
                  "&:hover": {
                    backgroundColor: "#0079c2d9",
                  },
                }}
                aria-label="Drawer collapse Icon"
              >
                <KeyboardArrowLeftIcon fontSize={fontSize} />
              </IconButton>
            </Grid>
          </>
        )}
      </Grid>
    </DrawerHeader>
  );
};

export default DrawerHeaderComponent;
