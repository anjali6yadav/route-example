import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

/* Create Side Bar Menu List  */
export const menuList = [
  {
    menuName: "Dashboard",
    menuIcon: HomeOutlinedIcon,
    link: "/dashboard",
    isActive: true,
  },

  {
    menuName: "AboutUS",
    menuIcon: WorkOutlineIcon,
    link: "/about",
    isActive: false,
    isDisabled: false,
  },

  {
    menuName: "Settings",
    menuIcon: SettingsOutlinedIcon,
    link: "/settings",
    isActive: false,
    isDisabled: false,
  },
  {
    menuName: "Sign out",
    menuIcon: LogoutOutlinedIcon,
    link: "/logout",
    isActive: true,
  },
];
