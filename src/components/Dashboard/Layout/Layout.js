import React, { useEffect, useState } from "react";
import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import Markdown from "markdown-to-jsx";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { useLocation, Link, useNavigate } from "react-router-dom";
import "./Layout.scss";
import { Divider, TextField } from "@mui/material";
import { action } from "../../../redux/actions.js";
import { useDispatch, useSelector } from "react-redux";
import Autocomplete from "@mui/material/Autocomplete";
import { githubURL } from "../../Helpers/GlobalVariables.js";

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
  const values = useSelector((state) => state.items);
  const navigate = useNavigate();
  const [md, setmd] = useState(``);
  useEffect(() => {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    // var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function () {
      modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    // span.onclick = function () {
    // modal.style.display = "none";
    // };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
    fetch(`${githubURL}SUMMARY.md`)
      .then((res) => res.text())
      .then((res) => {
        setmd(res);
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
            <SearchSharpIcon
              className="hover:text-primary cursor-pointer"
              id="myBtn"
            />
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
      <div id="myModal" className="modal">
        {/* <!-- Modal content --> */}
        <div className="modal-content">
          <div className="modal-body p-5 relative ">
            {/* <span className="close text-black absolute top-[-20px] right-[15px]">
              &times;
            </span> */}
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              disableClearable
              onChange={(event, newValue) => {
                navigate(values.filter((val) => val.name === newValue)[0].link);
                document.getElementById("myModal").style.display = "none";
              }}
              options={values.map((option) => option.name)}
              renderInput={(params, id) => {
                return (
                  <TextField
                    key={id}
                    {...params}
                    label="What are you looking for?"
                  />
                );
              }}
            />
          </div>
        </div>
      </div>
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
