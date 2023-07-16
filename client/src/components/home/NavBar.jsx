import { Box, Typography, styled } from "@mui/material"
import {navData} from "../../constants/data"

const NavBox = styled(Box)`
    padding: 10px 100px;
    display: flex;
    justify-content: space-evenly;
`

const ItemBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 140px;
    text-align: center;
`

const NavBar = () => {
  return (
    <NavBox>
        {
            navData.map(data => (
                <ItemBox>
                    <img src={data.url} alt={data.text} style={{width: "64px"}}/>
                    <Typography style={{fontSize: "14px", fontWeight: "600"}}>{data.text}</Typography>
                </ItemBox>
            ))
        }
    </NavBox>
  )
}

export default NavBar