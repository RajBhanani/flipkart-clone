import { Typography, TextField, Button, styled, IconButton, Box } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

const DialogSignupButton = styled(Button)`
  text-transform: none;
  background-color: #fb641b;
  color: white;
  font-size: medium;
  height: 48px;
  border-radius: 2px;
  margin-top: 15px;
`;

const SignupText = ({setAccount, accountInitialValue}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <TextField variant="standard" label="Enter First Name" />
      <TextField variant="standard" label="Enter Last Name" />
      <TextField variant="standard" label="Enter Username" />
      <TextField variant="standard" label="Enter Email" />
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
      <TextField variant="standard" label="Enter Phone" />
      <DialogSignupButton>Sign up</DialogSignupButton>
      <Typography
        style={{ textAlign: "center", color: "#2874F0", cursor: "pointer"}}
        onClick={() => setAccount(accountInitialValue.login)}
      >
        Already have an account? Login.
      </Typography>
    </>
  );
};

export default SignupText;
