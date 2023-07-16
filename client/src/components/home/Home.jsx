import NavBar from "./NavBar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";

const HomeBox = styled(Box)`
  padding: 10px;
  background-color: #f2f2f2;
`;

const Home = () => {
  return (
    <>
      <NavBar />
      <HomeBox>
        <Banner />
      </HomeBox>
    </>
  );
};

export default Home;
