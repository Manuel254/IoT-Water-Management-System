import React from "react";
import { Typography, Divider, Box, Icon } from "@mui/material";

const MainCardContent = ({ name, value, icon }) => {
  return (
    <>
      <Box sx={{ display: "flex", pt: 1, pb: 2 }}>
        <Icon sx={{ fontSize: 20, mr: 2 }}>{icon}</Icon>
        <Typography variant="caption" sx={{ flexGrow: 1 }}>
          {name}
        </Typography>
        <Typography
          variant="caption"
          color="white"
          sx={{ backgroundColor: "#424242", p: 1 }}
        >
          {value}
        </Typography>
      </Box>
      <Divider />
    </>
  );
};

export default MainCardContent;
