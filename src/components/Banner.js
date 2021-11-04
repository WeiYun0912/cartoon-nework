import React from "react";
import styled from "styled-components";
import Pattern from "../images/pattern.svg";
import Banner1 from "../images/banner1.png";
function Banner() {
  return (
    <Wrapper>
      <Container>
        <BannerWrap>
          <LeftBanner></LeftBanner>
          <RightBanner>
            <Title>HAPPY CHEESE DAY</Title>
            <Descrption>
              Celebrate Cheese Day with Tom & Jerry! Download Cheese Day
              activity sheets, watch Cheese Day videos, download Cheese Day
              recipes and play a Cheese Day game!
            </Descrption>
            <BannerButton>FIND OUT MORE</BannerButton>
          </RightBanner>
        </BannerWrap>
      </Container>
    </Wrapper>
  );
}

export default Banner;

const Wrapper = styled.div`
  margin: 10px 0;
  border-radius: 14px;
  padding: 64px;
  background: url(${Pattern}) center center / cover no-repeat fixed;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  background-color: #342e34;
  background-attachment: fixed;
`;

const Container = styled.div`
  display: flex;
  max-width: 1280px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const BannerWrap = styled.div`
  display: flex;
`;

const LeftBanner = styled.div`
  background: url(${Banner1});

  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  //   flex-basis: 50%;

  &:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: 56.25%;
  }
`;

const RightBanner = styled.div`
  background: #fff;
  color: #000;
  font-weight: bold;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  padding: 10px;
`;

const Title = styled.p`
  font-size: 32px;
`;

const Descrption = styled.p`
  font-size: 16px;
  padding-bottom: 24px;
`;

const BannerButton = styled.button`
  background: #000;
  color: #fff;
  padding: 1.2em;
  font-size: 1.2em;
  width: 100%;
  font-weight: bold;
  border-radius: 10px;
  border: 1px solid #000;
`;
