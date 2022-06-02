import React, { useState } from "react";
// import useTheme from "@mui/material/styles/useTheme";
import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
// import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import {
  darkGray,
  secondaryColor,
  primaryColor,
  dark,
} from "../../Helpers/GlobalVariables";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { useNavigate, useLocation, Link } from "react-router-dom";
import items from "../../../routes";
import "./Layout.scss";
// import Logo from "../../../assets/images/ShiftERP.png";
// import shiftErpIcon from "../../../assets/images/logo.png";
import Switch from "../../UI/Switch.js";
import Typography from "../../UI/Typography";
import { Divider } from "@mui/material";
// import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
const drawerWidth = 280;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-end",
//   padding: theme.spacing(0, 1),

//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(["width", "margin"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(!open && {
//     width: `calc(94.9% )`,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  backgroundColor: "pink",
  // zIndex: 9999,
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Layout = ({ children }) => {
  // const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(true);
  // const [user, setUser] = useState({});
  // const [activeTab, setActiveTab] = useState(["Dashboard"]);
  const [listOpen, setListOpen] = useState({});
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  const handleClickForParent = (obj) => {
    getCurrentActiveTabs(obj);
    navigate(obj.path);
    if (obj.childs.length > 0) {
      setListOpen({
        ...listOpen,
        [obj.text]: !listOpen[obj.text],
      });
    }
  };

  const getCurrentActiveTabs = (obj) => {
    // setActiveTab(obj.path.split("/"));
  };

  const handleClickForChild = (child) => {
    getCurrentActiveTabs(child);
    navigate(child.path);
  };

  return (
    <Box sx={{ display: "flex", maxWidth: "100%", width: "100%" }}>
      <CssBaseline />
      {/* 
        <AppBar
          position="fixed"
          open={open}
          style={{
            boxShadow: "none",
            borderBottom: "1px solid #e3e3e3",
          }}>
          {
            <Toolbar
              style={{
                width: "100%",
                backgroundColor: "#fff",
              }}>
              {activeTab.map((tab, index) => (
                <Typography
                  fontSize={11}
                  key={index}
                  className="breadcrumbs-container"
                  color={index > 1 ? darkGray : "primary"}>
                  {index > 1 ? (
                    <ArrowRightRoundedIcon
                      sx={{ fontSize: 16, fontColor: darkGray }}
                    />
                  ) : (
                    ""
                  )}

                  {capitalizeFirstLetter(tab.replace("-", " "))}
                </Typography>
              ))}
              <Button
                className="mr-5"
                color="primary"
                variant="contained"
                fullWidth={false}
                style={{ textTransform: "none", marginLeft: "auto" }}
                disabled={false}
                onClick={logoutButtonClicked}>
                Logout
              </Button>
            </Toolbar>
          }
        </AppBar> */}
      <Drawer variant="permanent" open={open}>
        {" "}
        <div
          style={{
            display: "flex",
            width: "100%",
          }}>
          {open ? (
            <div className="logo-wrapper-drawer mx-3 my-3 flex gap-5 !items-center !justify-center">
              <Link to="/" className="flex items-center justify-center gap-3">
                <img
                  alt="shift-erp"
                  className="!w-12 "
                  src={
                    "https://www.gitbook.com/cdn-cgi/image/width=40,height=40,fit=contain,dpr=1,format=auto/https%3A%2F%2F2291982380-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-MYhzrDAfX5zFHrvlOS1%252Ficon%252FJ04OFM6YdKtaPz0nJ9aM%252FBabylonia_Logo_02.01_FFD42A_600px.png%3Falt%3Dmedia%26token%3D7c80b1b9-b587-4954-bff9-48b307976f47"
                  }
                />
                <h4 className="m-0">babylonia.app</h4>
              </Link>
              <SearchSharpIcon className="hover:text-orange-500 cursor-pointer" />
            </div>
          ) : (
            <div className="icon-wrapper-drawer  my-4">
              <Link to="/" className={`text-[${primaryColor}] `}>
                <img
                  alt="shift-erp"
                  src={
                    "https://www.gitbook.com/cdn-cgi/image/width=40,height=40,fit=contain,dpr=1,format=auto/https%3A%2F%2F2291982380-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-MYhzrDAfX5zFHrvlOS1%252Ficon%252FJ04OFM6YdKtaPz0nJ9aM%252FBabylonia_Logo_02.01_FFD42A_600px.png%3Falt%3Dmedia%26token%3D7c80b1b9-b587-4954-bff9-48b307976f47"
                  }
                />
              </Link>
            </div>
          )}
        </div>
        <Divider />
        <List>
          {/* {items.map((item, index) => {
              return (
                <div key={index}>
                  <ListItemButton
                    onClick={() => handleClickForParent(item)}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}>
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}>
                      {location.pathname === item.path
                        ? item.iconActive
                        : item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={{ opacity: open ? 1 : 0 }}
                      primaryTypographyProps={{
                        fontSize: 13,
                        fontWeight: "medium",
                        color:
                          location.pathname === item.path
                            ? "primary"
                            : darkGray,
                      }}
                    />
                    {item.childs.length > 0 &&
                      (listOpen[item.text] ? (
                        <ArrowDropUpRoundedIcon
                          sx={{
                            color:
                              location.pathname === item.path
                                ? primaryColor
                                : secondaryColor,
                            ...(!open && { display: "none" }),
                          }}
                          fontSize="small"
                        />
                      ) : (
                        <ArrowDropDownRoundedIcon
                          sx={{
                            color:
                              location.pathname === item.path
                                ? primaryColor
                                : secondaryColor,
                            ...(!open && { display: "none" }),
                          }}
                          fontSize="small"
                        />
                      ))}
                  </ListItemButton>
                  {item.childs.map((child, index1) => (
                    <div className="mx-3 padding-y-0" key={index1}>
                      {open && (
                        <Collapse
                          in={listOpen[item.text]}
                          timeout="auto"
                          unmountOnExit>
                          <List component="div" disablePadding>
                            <ListItemButton
                              className={
                                location.pathname === child.path
                                  ? "active"
                                  : null
                              }
                              sx={{ pl: 4 }}
                              onClick={() => handleClickForChild(child)}>
                              <ListItemText
                                primary={child.text}
                                primaryTypographyProps={{
                                  fontSize: 13,
                                  fontWeight: "medium",
                                  color:
                                    location.pathname === child.path
                                      ? "primary"
                                      : darkGray,
                                  marginLeft: 1.5,
                                }}
                              />
                            </ListItemButton>
                          </List>
                        </Collapse>
                      )}
                    </div>
                  ))}
                </div>
              );
            })} */}
          <div className="inject"></div>
          <div className="profile-container">
            <div className="row align-items-center m-3">
              <div className="col-2 p-1">
                <Switch onClick={handleDrawerToggle} />
              </div>
              <div className="col-8">
                {open && (
                  <Typography fontSize={13} color={dark}>
                    Collapse Sidebar
                  </Typography>
                )}
              </div>
            </div>
          </div>
        </List>
      </Drawer>
      {/* <DrawerHeader /> */}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: "100vh",
          width: "100%",
          maxWidth: "100%",
        }}>
        <Box
          component="main"
          sx={{ flexGrow: 1, width: "102.3%", padding: "20px 50px" }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
