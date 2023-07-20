import { Box, Button, Typography, styled } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const WrapperBox = styled(Box)`
  margin: 30px 0px;
  display: flex;
  padding: 3px;
  height: 300px;
  background-color: white;
`;

const SideBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white
    url(https://images.unsplash.com/photo-1630609083938-3acb39a06392?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)
    bottom/100% 40% no-repeat;
  gap: 20px;
`;

const ProductBox = styled(Box)`
  background: white;
  text-align: center;
`;

const ProductImage = styled("img")`
  width: auto;
  height: 150px;
`;

const Slide = ({ products, title, toggleAd = false }) => {
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <WrapperBox>
      <SideBox style={{ width: toggleAd ? "16%" : "13%" }}>
        <Typography variant="h5">{title}</Typography>
        <Button variant="contained" style={{ borderRadius: "2px" }}>
          View all
        </Button>
      </SideBox>
      <Box style={{ width: toggleAd ? "74%" : "87%", margin: "auto" }}>
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          infinite={true}
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
        >
          {products.map((product) => (
            <ProductBox key={product.id}>
              <ProductImage src={product.url} alt="product" />
              <Typography fontWeight={"bold"}>
                {product.title.shortTitle}
              </Typography>
              <Typography color={"green"}>{product.discount}</Typography>
              <Typography style={{ opacity: 0.6, fontSize: 14 }}>
                {product.tagline}
              </Typography>
            </ProductBox>
          ))}
        </Carousel>
      </Box>
      {toggleAd && (
        <Box>
          <img src={adURL} alt="ad" style={{height: "300px"}}/>
        </Box>
      )}
    </WrapperBox>
  );
};

export default Slide;
