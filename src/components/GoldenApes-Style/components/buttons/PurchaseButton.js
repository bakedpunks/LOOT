// import { Link } from "gatsby"
import React from "react";
import styled from "styled-components";
import { Caption2, SmallText } from "../styles/TextStyles";
import Image2 from "../../../GoldenApes-Style/components/utilites/images/Logo.svg";
import Image3 from "../../../GoldenApes-Style/components/utilites/images/Ring.svg";

// Props are used to pass around data between components.
// This makes it easier to create components that are reusable.
// Add the word 'props' to the PurchaseButton function.
// props can be constructed meaning you can get the sub values directly (subtitle title)
// {this helps simplify code}

function PurchaseButton(props) {
  // Destructor the props,
  // there're be no need to use the word 'props' every time you try to access it inside the function
  // You can it down to multiple values
  const { title, subtitle } = props;
  return (
    //link the button component. Firstly, import 'Link' from gatsby using the import statement.
    //Link the Destination to="(what ever page or source file destination)"
    // wrap all the contents of the PurchaseButton component with Link and link it to 'source'
    // <Link to="/">
    <Wrapper>
      {/* To show the props sett {} */}
      {/* Props is an object */}
      {/* title is a property passed from hero section */}
      {/* add || after props.title to add a fall back option */}
      <IconWrapper>
        <Icon class="icon" src={Image2} />
        <Ring src={Image3} />
      </IconWrapper>
      <TextWrapper>
        <Title>{title || "TITLE"}</Title>
        <Subtitle>{subtitle || "SUBTITLE"}</Subtitle>
      </TextWrapper>
    </Wrapper>
    // </Link>
  );
}

export default PurchaseButton;

const Wrapper = styled.div`
  max-width: 280px;
  height: 77px;
  padding: 12px;
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  border: 0px;
  display: grid;
  grid-template-columns: 53px auto; // Controls each column
  justify-content: start;
  align-items: center;
  gap: 20px;
  //Asterisk apply it to all child elements at the same time
  //Apply to all elements in Wrapper
  *,
  & {
    transition: 0.8s cubic-cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  //Nesting in styled components
  // add selectors is add a colon and the name itself i.e. :hover.
  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-9px) scale(1.5);

    .icon {
      transform: scale(3);
      z-index: 4;
    }
  }
`;

const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
`;
// Caption2 and SmallText from the TextStyles file.
const Title = styled(Caption2)`
  color: black;
`;
const Subtitle = styled(SmallText)`
  color: black;
  opacity: 0.7;
`;
const Icon = styled.img`
  width: 120px;
  height: 120px;
  margin-left: -30px;
  margin-bottom: 7px;
`;
// Styled Components allow you to select a parent component via its child component.
// We're setting position to absolute
const Ring = styled.img`
  position: absolute;
  top: -10px;
  left: -16px;
  // Need $ {} Name Of The Component:The Interaction
  // using '&', this applies it to the element itself.
  ${Wrapper}:hover & {
    transform: rotate(30deg) scale(1.2) translate(1px, 1px);
  }
`;

const IconWrapper = styled.div`
  width: 55px;
  height: 55px;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-self: center;
  position: relative;
  ${Wrapper}:hover & {
    filter: hue-rotate(10deg);
    z-index: 4;
  }
`;
