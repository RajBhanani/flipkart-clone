import {
  Box,
  IconButton,
  TextField,
  Typography,
  Button,
  styled,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

const DialogLoginButton = styled(Button)`
  text-transform: none;
  background-color: #fb641b;
  color: white;
  font-size: medium;
  height: 48px;
  border-radius: 2px;
`;

const LoginText = ({ setAccount, accountInitialValue }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <TextField variant="standard" label="Enter email/mobile number" />
      <Box style={{ display: "flex", alignItems: "end" }}>
        <TextField
          variant="standard"
          label="Enter password"
          type={showPassword ? "text" : "password"}
          style={{ width: "100%" }}
        />
        <IconButton onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </Box>
      <Typography style={{ fontSize: "15px", color: "#696969" }}>
        By continuing you agree with Flipkart's policies.
      </Typography>
      <DialogLoginButton>Login</DialogLoginButton>
      <Typography style={{ textAlign: "center" }}>OR</Typography>
      <Button
        variant="outlined"
        style={{ textTransform: "none", height: "48px" }}
      >
        Request OTP
      </Button>
      <Typography
        style={{ textAlign: "center", color: "#2874F0", marginTop: "138px", cursor: "pointer"}}
        onClick={() => setAccount(accountInitialValue.signup)}
      >
        New? Create account
      </Typography>
    </>
  );
};

export default LoginText;
