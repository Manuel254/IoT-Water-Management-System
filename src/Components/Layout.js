import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useStyles } from "../Assets/styles";

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <Sidebar />
      <Navbar />
      <div component="main" className={classes.container}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
