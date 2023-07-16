import { AppBar, Toolbar, Box, Typography, styled } from "@mui/material";
import Search from "./Search";
import CustomButtons from "./CustomButtons";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;

const StyledBox = styled(Box)`
  margin-left: 12%;
  line-height: 0;
`;

const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
  font-weight: bold;
`;

const Header = () => {
  const logoUrl =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  return (
    <div>
      <StyledHeader>
        <Toolbar style={{minHeight: "55px"}}>
          <StyledBox>
            <img src={logoUrl} alt="logo" style={{ width: "75px" }} />
            <Box style={{ display: "flex" }}>
              <SubHeading>
                Explore&nbsp;
                <Box component="span" style={{ color: "yellow" }}>
                  Plus
                </Box>
              </SubHeading>
              <img
                src={subURL}
                alt="plus"
                style={{ width: "10px", height: "10px", marginLeft: "4px" }}
              />
            </Box>
          </StyledBox>
          <Search/>
          <Box style={{marginLeft: "3%"}}>
            <CustomButtons/>
          </Box>
        </Toolbar>
      </StyledHeader>
    </div>
  );
};

export default Header;
