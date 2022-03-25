import React, { createContext, useState } from "react";

export const navContext = createContext();

export const NavProvider = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div>
      <navContext.Provider value={{ mobileOpen, handleDrawerToggle }}>
        {children}
      </navContext.Provider>
    </div>
  );
};

export default NavProvider;
