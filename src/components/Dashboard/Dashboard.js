import React, { useEffect } from "react";
import { marked } from "marked";
import $ from "jquery";
import "./Dashboard.scss";
import { useLocation } from "react-router-dom";
const Dashboard = (props) => {
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/afraz-malik/docs/main/${
        location.pathname === "/" ? "README.md " : location.pathname
      }`
    )
      .then((res) => res.text())
      .then((res) => {
        $(".injectedMd").empty();
        // Parsing HTML into Div
        var $log = $(".injectedMd"),
          html = $.parseHTML(marked.parse(`${res}`));
        $log.append(html);
      });
  }, [location.pathname]);

  return <div className="injectedMd">{}</div>;
};

export default Dashboard;
