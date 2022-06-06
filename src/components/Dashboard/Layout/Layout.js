import React, { useEffect, useState } from "react";
import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import Markdown from "markdown-to-jsx";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { useLocation, Link } from "react-router-dom";
import "./Layout.scss";
import { Divider } from "@mui/material";
import { action } from "../../../redux/actions.js";
import { useDispatch } from "react-redux";

const drawerWidth = 300;
const openedMixin = (theme) => ({
  width: drawerWidth,
  backgroundColor: "rgba(245,247,249,1.00)",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  // zIndex: 9999,
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
}));

const Layout = ({ children }) => {
  const [md, setmd] = useState(``);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/afraz-malik/docs/main/SUMMARY.md")
      .then((res) => res.text())
      .then((res) => {
        // let changedres = res.replace(/["'(]/g, "(/");

        // let md = marked.parse(`${changedres}`);
        // $(".inject").empty();
        // var $log = $(".inject"),
        //   html = $.parseHTML(md);
        // $log.append(html);
        setmd(res);
      });
    window.addEventListener("click", function (e) {
      console.log(e.target);
      // if (e.target && e.target.matches("li.item")) {
      // e.target.className = "foo"; // new class name here
      // }
    });
  }, []);

  return (
    <Box sx={{ display: "flex", maxWidth: "100%", width: "100%" }}>
      <Drawer variant="permanent" open={true}>
        <div
          style={{
            display: "flex",
            width: "100%",
          }}>
          <div className="logo-wrapper-drawer  m-3 !ml-4  flex gap-5 !items-center !justify-center">
            <Link
              to="/"
              className="flex items-center justify-center gap-2 no-underline text-black">
              <img
                alt="babylonia"
                className="!w-12 "
                src={
                  "https://www.gitbook.com/cdn-cgi/image/width=40,height=40,fit=contain,dpr=1,format=auto/https%3A%2F%2F2291982380-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-MYhzrDAfX5zFHrvlOS1%252Ficon%252FJ04OFM6YdKtaPz0nJ9aM%252FBabylonia_Logo_02.01_FFD42A_600px.png%3Falt%3Dmedia%26token%3D7c80b1b9-b587-4954-bff9-48b307976f47"
                }
              />
              <h4 className="m-0  text-2xl font-bold hover:text-primary">
                babylonia.app
              </h4>
            </Link>
            <SearchSharpIcon className="hover:text-primary cursor-pointer" />
          </div>
        </div>
        <Divider />
        <div className="inject overflow-y-auto overflow-x-hidden">
          <Markdown
            options={{
              overrides: {
                a: {
                  component: LinkGen,
                  props: {
                    className: "foo",
                  },
                },
              },
            }}>
            {md}
          </Markdown>
        </div>
      </Drawer>
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
          sx={{
            flexGrow: 1,
            width: "102.3%",
            padding: "20px 50px",
          }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};
const LinkGen = ({ children, ...props }) => {
  const location = useLocation();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      action({
        name: children[0]
          .replace(
            /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
            ""
          )
          .replace(/\s+/g, " ")
          .trim(),
        link: props.href,
      })
    );
  }, []);
  return (
    <Link
      to={props.href}
      className={
        location.pathname.slice(1) === props.href ||
        (location.pathname === "/" && props.href === "README.md")
          ? "active"
          : ""
      }>
      {children}
    </Link>
  );
};

export default Layout;
