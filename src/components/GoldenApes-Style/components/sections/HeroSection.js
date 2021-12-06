/* eslint-disable jsx-a11y/alt-text */
// Gatsby allows you to move around pages without refreshing
import React from "react";
import styled, { keyframes } from "styled-components";
import MockupAnimation from "../animations/MockupAnimation";
import WaveBackground from "../backgrounds/waveBackground";
import PurchaseButton from "../buttons/PurchaseButton";
import { themes } from "../styles/ColorStyles";
import { H1, MediumText } from "../styles/TextStyles";
import { ConnectToMetamas } from "../../../ConnectMetamask/ConnectToMetamask.bk.11.27.2021.jsx";
import Image from "../../../GoldenApes-Style/components/utilites/images/Background.svg";

function HeroSection() {
  //TO HAVE JAVASCRIPT MIXED WITH YOUR HTML RETURN FUNCTION

  return (
    // YOUR CONTENT WILL ALWAYS NEED A PARENT CONTAINER
    // YOU CAN USE DIV "<div></div>" or MT brackets "<></>"
    <Wrapper>
      <ImageWrapper>
        <img class="img-fluid" src={Image} />
      </ImageWrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>
            <h2> Metagascar </h2>
          </Title>
          <card>
            <cardWrapper>
              <p className="mainText">
                The Metaverse is open, and the rocketships of explorers have
                been dispatched!The first MetaIsland to be discovered by the
                Alpha Explorer "Meta" has been dubbed Metagascar.Here you will
                find a thriving community of unique MetaHumans who reside in
                their equally unique MetaHomes.On the island of Metagascar you
                will find various facet 's of social activity including
                friendship, dating, and of course what island would be complete
                without messages in a bottle!
              </p>
            </cardWrapper>
          </card>
          <span> SPAN </span> <Description> DESCRIPTION </Description>
          {/* Pass in Props */}
          <PurchaseButton
            title="CLICK TO"
            subtile="CONNECT TO WALLET"
            onClick="connectToMetamask"
            className="btn btn-primary d-flex align-items-center"
            style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
          >
            Connect Wallet
          </PurchaseButton>
        </TextWrapper>
        {/* <MockupAnimation /> */}
      </ContentWrapper>
    </Wrapper>
  );
}

//NEED TO EXPORT COMPONENT TO USE IN THE WEBSITE
export default HeroSection;

// declaring all the styles
const animation = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter:blur(10px);}
  /* 80% { opacity: 0.5; transform: translateY(-10px); filter:blur(10px);} */
 100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`;

const ImageWrapper = styled.div`
  mix-blend-mode: multiply;
  position: absolute;
  display: flex;
  size: 100vh;
  width: 102vw;
  margin: 0;
  padding: 0;
  z-index: -1;
  opacity: 1;
  img {
    z-index: 2;
  }
`;

// YOU CAN CHOOSE WHICH HTML TAG TO ADD A STYLE PROPERTY TO
// TO USE CSS STYLES IN PROPERTY YOU NEED TO USE THE `` BACK TICKS
// OPENING AND CLOSING BACK TICK YOU CAN SET CSS PROPERTY'S
const Wrapper = styled.div`
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 360px auto;
  z-index: 2;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    padding: 150px 20px 250px;
    gap: 60px;
  }
`;

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid; //set grid display
  gap: 30px; //setting gapping "border-spacing"

  /* only select immediate children, we're using '>' */
  /* set different properties to specific elements, we're using ':nth-child(n)'. */
  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;

    /* TITTLE */
    :nth-child(1) {
      animation-delay: 0s;
    }
    /* DESCRIPTION */
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    /* BUTTON */
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`;

const Title = styled(H1)`
  color: ${themes.dark.text1};
  background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  span {
    background: linear-gradient(180deg, #6163cc 0%, #992b99 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 450px) {
    font-size: 48px;
  }
`;
const Description = styled(MediumText)``;

const card = styled.div`
  position: relative;
  perspective-origin: top left;
  perspective: 5000;

  @media (max-width: 768px) {
    transform: scale(0.6);
    transform-origin: top left;
  }
  @media (max-width: 450px) {
    transform: scale(0.4);
  }
  p {
    transform: rotateY(-20deg) rotateX(20deg);
    transform-origin: bottom left;
  }
  * {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover {
    filter: brightness(150%) saturate(120%);
  }
  .mainText {
    position: absolute;
    width: 183px;
    height: 120px;
    left: 0;
    top: 0px;
    border: 0.273134px solid rgba(255, 255, 255, 0.3);
    box-sizing: border-box;
    box-shadow: 0px 16.3881px 32.7761px rgba(99, 30, 187, 0.5);
    backdrop-filter: blur(21.8507px);
    border-radius: 16px;
  }
`;

const cardWrapper = styled.div`
  background: black;
`;
