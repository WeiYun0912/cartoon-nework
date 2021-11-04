import React from "react";
import styled from "styled-components";
import LOGO from "../images/logo.svg";
import GAME from "../images/game.svg";
import VIDEO from "../images/video.svg";
import APP from "../images/app.svg";

function Header() {
  return (
    <Container>
      <LogoWrap>
        <Logo src={LOGO} />
      </LogoWrap>
      <IconWrap>
        <Wrap>
          <Icon src={GAME} />
          <span>GAMES</span>
        </Wrap>
        <Wrap>
          <Icon src={VIDEO} />
          <span>VIDEOS</span>
        </Wrap>
        <Wrap>
          <Icon src={APP} />
          <span>APPS</span>
        </Wrap>
      </IconWrap>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 70px;
  background: #000;
  padding: 0 25px;
  color: #fff;
  display: flex;
  min-width: 100%;
  flex: 1;
`;

const Logo = styled.img`
  width: 105px;
`;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrap = styled.div`
  display: flex;
  width: 100%;
`;

const Wrap = styled.a`
  flex: 1 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-weight: bold;
  letter-spacing: 1.5px;
  font-size: 14px;
`;

const Icon = styled.img`
  width: 40px;
  margin: 0 auto 5px;
`;
