import { InputBase, Box, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = styled(Box)`
  background: #ffffff;
  width: 38%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
`;

const SearchInputBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
`;

const Search = () => {
  return (
    <SearchBox>
      <SearchInputBase placeholder="Search for products, brands, and more" />
      <Box style={{color: "#2874F0", margin: "auto 5px"}}>
        <SearchIcon />
      </Box>
    </SearchBox>
  );
};

export default Search;
