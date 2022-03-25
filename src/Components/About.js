import React from "react";
import { Typography, Container, Box } from "@mui/material";

const About = () => {
  return (
    <div>
      <Box>
        <Container>
          <Typography
            variant="h5"
            component="h1"
            sx={{ textTransform: "uppercase" }}
            gutterBottom
          >
            About IOT Water Monitoring System
          </Typography>
          <Typography variant="body2" component="p" gutterBottom>
            The system allows a user to manage his/her water tank level in real
            time and also determine the average usage of water in the house.
            <br />
            <br />
            To observe the level of water in the tank and some description of
            the tank, navigate to the tank section indicated on the sidebar.
            <br />
            To view the analysis of water usage of the water in the tank,
            navigate to analytics page on the sidebar.
          </Typography>
          <Typography variant="caption">&copy; Immanuel Kituku 2022</Typography>
        </Container>
      </Box>
    </div>
  );
};

export default About;
