import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  logo: {
    margin: "0 auto",
  },
  container: {
    margin: "5% 18%",
    "@media(max-width: 800px)": {
      margin: "15% auto",
      width: "100%",
    },
  },
  divider: {
    background: "#f5f5f5",
    width: "90%",
    margin: "0 auto",
  },
});
