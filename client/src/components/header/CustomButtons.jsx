import { Box, Button, Typography, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AuthDialog from "../login/AuthDialog";
import { useState, useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";

const ButtonBox = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "0 3% 0 auto",
  "& > button, & > p, & > div": {
    margin: "auto 25px",
    fontSize: "15px",
    fontWeight: "600",
    width: "max-content",
    textAlign: "center",
  },
  [theme.breakpoints.down("md")]: {
    padding: "20px",
    flexDirection: "column",
    gap: "30px",
    "& > button, & > p, & > div": {
      width: "auto"
    }
  },
}));


const LoginButton = styled(Button)`
  background: #ffffff;
  color: #2874f0;
  text-transform: none;
  border-radius: 2px;
  padding: 5px 40px;
  box-shadow: none;
  margin: auto 40px auto 0;
`;

const CustomButtons = () => {
  const [open, setOpen] = useState(false);
  const { login, setLogin } = useContext(DataContext);

  return (
    <ButtonBox>
      {login ? (
        <Typography>
          <Profile login={login} setLogin={setLogin} />
        </Typography>
      ) : (
        <LoginButton variant="contained" onClick={() => setOpen(true)}>
          Login
        </LoginButton>
      )}

      <Typography>Become a Seller</Typography>
      <Typography>More</Typography>

      <Box style={{display: "flex", justifyContent: "center"}}>
        <ShoppingCartIcon fontSize="small" />
        <Typography style={{ fontSize: "15px", fontWeight: "600" }}>
          Cart
        </Typography>
      </Box>

      <AuthDialog open={open} setOpen={setOpen} />
    </ButtonBox>
  );
};

export default CustomButtons;
