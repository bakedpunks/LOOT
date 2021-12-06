import React from "react";
import styled from "styled-components";

export default function MockupAnimation() {
  return (
    <Wrapper>
      <div className="mockup5" />
    </Wrapper>
  );
}

//3D positioned elements a perspective
//Perspective property.
//TRANSFORM ORIGIN
const Wrapper = styled.div`
  position: relative;
  perspective-origin: top left;
  perspective: 5000;

  @media (max-width: 768px) {
    transform: scale(0.6);
    transform-origin: top left;
  }
  /* @media (max-width: 450px) {
    transform: scale(0.4);
  } */

  //YOU CAN ADD PLUS OR MINUS TO GIVE DIFFERENT EFFECTS GOING INTO DIFFERENT DIRECTIONS AND
  // 3D transform to all the mockups inside the MockupAnimation component.
  div {
    transform: rotateY(-20deg) rotateX(20deg);
    transform-origin: bottom left;
  }
  * {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  :hover div {
    transform: rotateX(0deg) rotateY(0deg);
    &.mockup5 {
      transform: translate(-70px, 30px);
      transition-delay: 0.2s;
    }
    :hover {
      filter: brightness(150%) saturate(120%);
    }
  }
  .mockup5 {
    opacity: 0.2;
    position: absolute;
    width: 442px;
    height: 294px;
    left: 10px;
    top: -55px;
    background: url("/images/animations/mockup5.svg"), rgba(39, 20, 62, 0.2);
    border: 0.5px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    backdrop-filter: blur(27.3844px);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 14px;
  }
`;
