import styled from "styled-components";
import Annoucments from "../components/Announcment/Annoucments";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Newsletter from "../components/Newsletter/Newsletter";
import Products from "../components/Products/Prodects";
import { mobile } from "../components/responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({
    width: "0px 20px",
    display: "flex",
    flexDirection: "column",
   
  })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({
  marginRight: '0',
})}
`;

const Select = styled.select`
  padding: 10px;
  margin-left: 20px;
  border-radius: 10px;
  ${mobile({
  margin: "10px 0px",
})}
`;
const Option = styled.option``;

const ProductLists = () => {
  return (
    <Container>
      <Navbar />
      <Annoucments />
      <Title>Clothes</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Prodcuts:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Prodcuts:</FilterText>
          <Select>
            <Option disabled selected>
              Newest
            </Option>
            <Option>Price (asc)</Option>
            <Option>Price (decs)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Footer />
    </Container>
  );
};

export default ProductLists;
