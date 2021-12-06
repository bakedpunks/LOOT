import { Link } from "gatsby"
import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { menuData } from "../../data/menuData"
import MenuButton from "../buttons/MenuButton"
import MenuTooltip from "../tooltips/MenuTooltip"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef()
  const tooltipRef = useRef()

  //   custom function to add more functionality
  function handleClick(event) {
    setIsOpen(!isOpen)
    event.preventDefault()
    console.log(event)
  }

  // Logging whether the document has been clicked to the console.
  function handleClickOutside(event) {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      !tooltipRef.current.contains(event.target)
    ) {
      console.log("Document is clicked")
      setIsOpen(false)
    }
  }

  // useEffect listens to every single state change
  // If you don't want that, add '[]' to the hook. This will ensure that it only runs once.
  // To sync with a specific state, you can specify the state as we're doing in the code snippet below.
  useEffect(() => {
    // Do something
    // add an event listener for when the use clicks anywhere on the page
    // run a function every time the document is clicked.
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <Wrapper>
      <Link to="/">
        <img src="/images/logos/logo.svg" alt="Logo" />
      </Link>
      <MenuWrapper count={menuData.length} ref={ref}>
        {menuData.map((item, index) =>
          item.link === "/account" ? (
            <MenuButton
              key={index}
              item={item}
              onClick={event => handleClick(event)}
            />
          ) : (
            <MenuButton item={item} key={index} />
          )
        )}
        <HamburgerWrapper>
          <MenuButton
            item={{
              title: "",
              icon: "/images/icons/hamburger.svg",
              link: "/",
            }}
            onClick={event => handleClick(event)}
          />
        </HamburgerWrapper>
      </MenuWrapper>
      {/* Wrap it in a div Since, MenuTooltip is a component so you can pass the ref */}
      <div ref={tooltipRef}>
        <MenuTooltip isOpen={isOpen} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  display: grid;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;

  @media (max-width: 768px) {
    top: 30px;
  }
  @media (max-width: 450px) {
    top: 20px;
    padding: 0 20px;
  }
`
const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${props => props.count}, auto);

  @media (max-width: 768px) {
    > a {
      display: none;
    }
    grid-template-columns: auto;
  }
`

const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

// NOTES
// add in an array of data
// Turn Simple Values into objects using { }
//  {/* se the .map() method to iterate over the array items  */}
//  {/* then return a p tag for every item */}
// add the property name
// add in the key property to Link and set it equal to index
// {/* For accessibility's sake, always add the alt attribute to the images. */}
// you can pass props to styled-components
// pass in a title prop to MenuItem and give it a value of item.title.
// if a MenuItem has a title, otherwise we'll set the gap to 0
// Example ( gap: ${props => (props.title ? "10px" : "0px")}; )
// count the number in the menuData array and pass it to the MenuWrapper
// read more about the strict equality operator https://codeburst.io/javascript-showdown-vs-7be792be15b5
// You'll notice that even when the tooltip kind of disappears once isOpen is false, it's still clickable. To fix this, we'll add the display property and set it to none when isOpen is false.
// Adding the display property comes with a drawback which is that the animation doesn't work. To resolve this, we'll comment out the display property and use the visibility one instead.
