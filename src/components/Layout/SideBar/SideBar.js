import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
import { matchPath, useLocation } from "react-router";

import { theme } from "./sideBar.css";
import DrawerHeaderComponent from "./drawerHeader";
import { menuList } from "./menuList";
import { Drawer } from "./drawer";
const drawerWidth = 240;

export default function SideBar() {
  /* Get Location */
  const location = useLocation();
  /* Create State  */
  const [open, setOpen] = React.useState(true);

  /* Handle Drawer Operation open and closed */
  const handleDrawer = () => {
    setOpen(!open);
  };

  /* Check Active route and return Class Name */
  const getActiveClassName = (routeName) => {
    const currentMatchRouteObj = matchPath(location.pathname, routeName);
    if (currentMatchRouteObj && currentMatchRouteObj.path === routeName) {
      return true;
    }
    return false;
  };

  /* get Menu Item Background Color */
  // TODO: type added remaining
  const getMenuCSSProps = (routeName) => {
    const isActive = getActiveClassName(routeName);
    let cssPropsObj = { color: theme.palette.menu.color };
    if (isActive) {
      cssPropsObj = {
        ...cssPropsObj,
        ...{
          backgroundColor: theme.palette.menu.backgroundColor,
          color: theme.palette.menu.activeColor,
          borderLeft: theme.palette.menu.activeBorder,
          paddingLeft: theme.palette.menu.paddingLeft,
        },
      };
    }
    return cssPropsObj;
  };

  /* get Menu Icon css props */
  const getCSSProps = (routeName) => {
    const isActive = getActiveClassName(routeName);
    let cssPropsObj = {
      fontSize: theme.palette.menuIcon.fontSize,
    };
    if (isActive) {
      cssPropsObj = {
        ...cssPropsObj,
        ...{
          color: theme.palette.menu.activeColor,
        },
      };
    }
    return { sx: cssPropsObj };
  };

  return (
    <Drawer variant="permanent" /* open={open} */>
      {/*  <DrawerHeaderComponent
        open={open}
        handleDrawer={handleDrawer}
        username={"Anja"}
      /> */}
      <List>
        {/* Disabled link only for demo then remove disabled code "menu.isDisabled ? '#' : menu.link" */}
        {menuList.map((menu, index) => (
          <NavLink exact to={menu.isDisabled ? "#" : menu.link} key={index}>
            <ListItem
              disabled={menu.isDisabled}
              button
              key={menu.menuName}
              sx={getMenuCSSProps(menu.link)}
            >
              <ListItemIcon>
                {menu.menuIcon &&
                  React.createElement(menu.menuIcon, getCSSProps(menu.link))}
              </ListItemIcon>
              <ListItemText primary={menu.menuName} />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Drawer>
  );
}
