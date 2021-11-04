import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import showIcon1 from "../images/showicon1.png";
import showIcon2 from "../images/showicon2.png";
import showIcon3 from "../images/showicon3.png";
import showIcon4 from "../images/showicon4.png";
import showIcon5 from "../images/showicon5.png";
import showIcon6 from "../images/showicon6.png";
import showIcon7 from "../images/showicon7.png";
import showIcon8 from "../images/showicon8.png";
import showIcon9 from "../images/showicon9.png";
import showIcon10 from "../images/showicon10.png";
import showIcon11 from "../images/showicon11.png";
import showIcon12 from "../images/showicon12.png";
import showIcon13 from "../images/showicon13.png";
function IconSlider() {
  let settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    // rows: 1,
    // sliderPerRow: 6,

    // centerPadding: 200,
  };

  return (
    <Carousel {...settings}>
      <Wrap backgroundColor="#2cb978">
        <ShowIcon src={showIcon1} />
      </Wrap>
      <Wrap backgroundColor="#43dde6">
        <ShowIcon src={showIcon2} />
      </Wrap>
      <Wrap backgroundColor="#ac3f21">
        <ShowIcon src={showIcon3} />
      </Wrap>
      <Wrap backgroundColor="#28c7fa">
        <ShowIcon src={showIcon4} />
      </Wrap>
      <Wrap backgroundColor="#ff304f">
        <ShowIcon src={showIcon5} />
      </Wrap>
      <Wrap backgroundColor="#f85959">
        <ShowIcon src={showIcon6} />
      </Wrap>
      <Wrap backgroundColor="#ffd615">
        <ShowIcon src={showIcon7} />
      </Wrap>
      <Wrap backgroundColor="#ff1f5a">
        <ShowIcon src={showIcon8} />
      </Wrap>
      <Wrap backgroundColor="#eac100">
        <ShowIcon src={showIcon9} />
      </Wrap>
      <Wrap backgroundColor="#124e96">
        <ShowIcon src={showIcon10} />
      </Wrap>
      <Wrap backgroundColor="#ffd717">
        <ShowIcon src={showIcon11} />
      </Wrap>
      <Wrap backgroundColor="#1a2639">
        <ShowIcon src={showIcon12} />
      </Wrap>
      <Wrap backgroundColor="#4e413b">
        <ShowIcon src={showIcon13} />
      </Wrap>
    </Carousel>
  );
}

export default IconSlider;

const Carousel = styled(Slider)`
  background: rgba(0, 0, 0, 0.5);
  box-shadow: rgb(0 0 0 / 69%) 10px 26px 30px -10px,
    rgb(0 0 0 / 73%) 10px 16px 10px -10px;
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  .slick-prev:before,
  .slick-next:before {
    color: #fff;
  }

  .slick-list {
    overflow: hidden;

    padding: 0 2.5em;
  }

  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  border-radius: 50%;
  clip-path: inset(0 0 0 0 round 0 0 50% 50%);
  background: ${(props) => props.backgroundColor};
  margin-top: 10px;
  width: 40% !important;
`;

const ShowIcon = styled.img`
  max-width: 100%;
  opject-fit: cover;
  cursor: pointer;
`;
