import React, { useEffect, useState } from "react";
import { marked } from "marked";
import $ from "jquery";
import "./Dashboard.scss";
import { useLocation } from "react-router-dom";
import { Spinner } from "../UI/Spinner/Spinner.jsx";
const Dashboard = (props) => {
  const location = useLocation();
  const [state, setstate] = useState(false);
  console.log(location);
  useEffect(() => {
    setstate(false);
    fetch(
      `https://raw.githubusercontent.com/afraz-malik/docs/main/${
        location.pathname === "/" ? "README.md " : location.pathname
      }`
    )
      .then((res) => res.text())
      .then((res) => {
        $(".injectedMd").empty();
        setstate(true);
        var $log = $(".injectedMd"),
          html = $.parseHTML(marked.parse(`${res}`));
        $log.append(html);
      });
  }, [location.pathname]);

  return (
    <>
      {!state ? (
        <Spinner />
      ) : (
        <>
          <div className="injectedMd"></div>
          <div className=""></div>
        </>
      )}
    </>
  );
};

export default Dashboard;
