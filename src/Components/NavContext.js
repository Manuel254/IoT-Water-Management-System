import React, { createContext, useState } from "react";

export const navContext = createContext();

export const NavProvider = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div>
      <navContext.Provider value={{ mobileOpen, handleDrawerToggle }}>
        {props.children}
      </navContext.Provider>
    </div>
  );
};

export default NavProvider;
