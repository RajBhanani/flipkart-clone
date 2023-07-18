import { useEffect } from "react";

import NavBar from "./NavBar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";
import { getProducts } from "../../redux/actions/product_actions";
import { useDispatch, useSelector } from "react-redux";

const HomeBox = styled(Box)`
  padding: 10px;
  background-color: #f2f2f2;
`;

const Home = () => {
  const { products } = useSelector((state) => state.getProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

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
