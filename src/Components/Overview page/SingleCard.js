import { Card, CardContent, Box, Typography, Divider } from "@mui/material";

const SingleCard = ({ mainIcon, smallIcon, period, quantity, time }) => {
  return (
    <Card
      sx={{
        width: 250,
        p: 1,
        margin: "0 auto",
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>{mainIcon}</Box>
          <Box>
            <Typography variant="caption">{period}</Typography>
            <Typography variant="h6">{quantity}</Typography>
          </Box>
        </Box>
      </CardContent>
      <Divider />
      <Box sx={{ display: "flex", mt: 2 }}>
        {smallIcon}
        <Typography variant="caption">{time}</Typography>
      </Box>
    </Card>
  );
};

export default SingleCard;
