import React from "react";
import styled from "styled-components";
import IconHeader from "./IconSlider";
import DeliverSlider from "./DeliverSlider";
import background from "../images/home-background.png";
import Banner from "./Banner";
function Home() {
  return (
    <Container>
      <IconHeader />
      <DeliverSlider />
      <Banner />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  &:before {
    content: "";
    background: url(${background}) center center / cover no-repeat fixed;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
