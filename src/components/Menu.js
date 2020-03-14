import React from "react"
import { Box, Flex } from "@primer/components"
import styled from "styled-components"

const MovedContainer = styled(Box)`
  width: 200px;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); // easeOutQuart https://easings.net/en#easeOutQuart
  overflow: scroll;
  z-index: 1000;
`

const hide = {
  transform: "translate3d(200px, 0, 0)",
}
const show = {
  overflow: "hidden",
}

const Menu = props => (
  <MovedContainer
    as="nav"
    role="navigation"
    onClick={props.handleMouseDown}
    style={props.menuVisible ? show : hide}
    bg="grey"
  ></MovedContainer>
)

export default Menu
