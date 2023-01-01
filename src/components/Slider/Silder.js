import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import {
  SliderContainer,
  Arrow,
  SilderWrapper,
  ImgContainer,
  InfoContainer,
  Image,
  Slider,
  Title,
  Desc,
  Button,
} from "./SliderStyles";
import { silderItems } from "../data";

const Silder = () => {
  const [sliderIndex, SetSliderIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      SetSliderIndex(sliderIndex > 0 ? sliderIndex -1 : 2);
    } else {
      SetSliderIndex(sliderIndex < 2 ? sliderIndex +1 : 0);
    }
  };

  return (
    <SliderContainer>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <SilderWrapper sliderIndex={sliderIndex}>
        {silderItems.map((item) => (
          <Slider bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} alt="sweeterimg" />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title} </Title>
              <Desc>{item.desc}</Desc>
              <Button to='/productlist'>SHOP NOW!</Button>
            </InfoContainer>
          </Slider>
        ))}
      </SilderWrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </SliderContainer>
  );
};

export default Silder;
