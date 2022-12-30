import { Add, Remove } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Annoucments from "../components/Announcment/Annoucments";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Newsletter from "../components/Newsletter/Newsletter";
import { mobile } from "../components/responsive";
import shoes from "../Images/img12.jpg";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({
  padding: "10px",
  flexDirection: 'column',
})}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover; 
  ${mobile({
  height: "40vh",
})}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({
  padding: "10px",
})}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 60%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  ${mobile({
  width: "100%",
})}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 11px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  justify-content: space-between;
  ${mobile({
  width: "100 %",
})}
`;
const AmountContiner = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled(Link)`
  padding: 15px;
  border: 1px solid teal;
  background-color: white;
  cursor: pointer;
  color: black;
  text-decoration: none;

  &:hover{
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Annoucments />
      <Wrapper>
        <ImgContainer>
          <Image src={shoes} alt="shoes.jpg" />
        </ImgContainer>

        <InfoContainer>
          <Title>Luiz Veton Shoes</Title>
          <Desc>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            assumenda ipsum eligendi maiores perferendis quo commodi quaerat
            placeat odio vitae quibusdam iusto accusamus magni temporibus velit
            harum voluptas animi sint vel delectus, possimus atque. At dolorum
            perferendis saepe dolore ducimus qui velit facilis, alias
            consequuntur numquam, laudantium veniam. Omnis, culpa?
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContiner>
              <Remove style={{cursor:'pointer'}}/>
              <Amount>1</Amount>
              <Add style={{cursor:'pointer'}}/>
            </AmountContiner>
            <Button to='/cart'>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
