import { Box, Button, Typography, styled } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ButtonBox = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  & > p, & > div {
    margin: auto 5px;
    font-size: 15px;
    font-weight: 600;
    width: 135px;
    text-align: center
  }
`

const LoginButton = styled(Button)`
  background: #FFFFFF;
  color: #2874F0;
  text-transform: none;
  border-radius: 2px;
  padding: 5px 40px;
  box-shadow: none;
  margin: auto 40px auto 0;
`

const CustomButtons = () => {
  return (
    <ButtonBox>
        <LoginButton variant="contained">Login</LoginButton>
        <Typography>Become a Seller</Typography>
        <Typography>More</Typography>
        <Box style={{display: "flex"}}>
          <ShoppingCartIcon fontSize='small'/>
          <Typography style={{fontSize: "15px", fontWeight: "600"}}>Cart</Typography>
        </Box>
    </ButtonBox>
  )
}

export default CustomButtons