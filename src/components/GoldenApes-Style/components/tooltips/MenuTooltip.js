import React from "react"
import styled from "styled-components"
import { tooltipData } from "../../data/menuData"
import MenuButton from "../buttons/MenuButton"

export default function MenuTooltip(props) {
  const { isOpen } = props
  return (
    <Wrapper isOpen={isOpen}>
      {tooltipData.map((item, index) => (
        <MenuButton key={index} item={item} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  right: 30px;
  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  border-radius: 20px;
  padding: 20px;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  display: grid;
  grid-template-columns: 150px;
  gap: 10px;
  z-index: 1;
  transition: 0.3s ease-in-out;
  /* display: ${props => (props.isOpen ? "block" : "none")}; */
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  transform: ${props =>
    props.isOpen
      ? "skewY(0) rotate(0) translateY(0)"
      : "skewY(-5deg) rotate(5deg) translateY(-30px)"};
`

//NOTES:
// using the useState hook
// The first step is to import it.
// The first variable is the initial state
// the second variable is used to update the state
// setting isOpen to false.
// change isOpen to true when the user clicks on it
// changing the text depending on the value of isOpen
// Instead of setting the value to true, simply toggle it
//  if the value is true and the user clicks on it, isOpen will change to false, and vice-versa
// use the .map() method to iterate through all the array items in tooltipData.
