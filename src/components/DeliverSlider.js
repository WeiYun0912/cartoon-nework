import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import db from "../firebase";
function DeliverSlider() {
  const [deliver, setDeliver] = useState();
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
  };

  useEffect(() => {
    db.collection("cartoons-deliver").onSnapshot((snapshot) => {
      let tempDeliver = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setDeliver(tempDeliver);
    });
  }, []);

  return (
    <Carousel {...settings}>
      {deliver &&
        deliver.map((d) => (
          <>
            <Wrap>
              <img src={d.imgUrl} alt="" />
            </Wrap>
          </>
        ))}
    </Carousel>
  );
}

export default DeliverSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;

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
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  margin: 0 15px;
  img {
    border: 4px solid transparent;
    border-radius: 14px;
    width: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;
    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
