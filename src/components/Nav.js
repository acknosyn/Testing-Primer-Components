import React from "react"
import styled from "styled-components"
import { Button } from "@primer/components"

import Menu from "./Menu"

const MenuButtonStyled = styled(Button)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000002;
`

const ButtonStyled = styled.button`
  position: fixed;
  top: 50px;
  right: 0;
  z-index: 1000002;
`

const MenuButton = props => (
  <MenuButtonStyled onClick={props.onClickAction}>{props.children}</MenuButtonStyled>
)
const HtmlButton = props => (
  <ButtonStyled onClick={props.onClickAction}>
    {props.children}
  </ButtonStyled>
)

class Nav extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
    }

    this.toggleMenu = this.toggleMenu.bind(this)
    this.wrapperRef = this.wrapperRef.bind(this)
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.escFunction = this.escFunction.bind(this)
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside)
    document.addEventListener("keydown", this.escFunction, false)
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside)
    document.removeEventListener("keydown", this.escFunction, false)
  }

  toggleMenu = () => {
    this.setState(prevState => {
      return { visible: !prevState.visible }
    })
  }

  wrapperRef = element => {
    this.navRef = element
  }

  handleMouseDown = e => {
    this.toggleMenu()

    e.stopPropagation()
  }

  handleClickOutside(event) {
    if (
      this.state.visible &&
      this.navRef &&
      !this.navRef.contains(event.target)
    ) {
      this.toggleMenu()
    }
  }

  escFunction(event) {
    if (this.state.visible && event.keyCode === 27) {
      this.toggleMenu()
    }
  }

  render() {
    return (
      <div ref={this.wrapperRef}>
        <MenuButton onClickAction={this.handleMouseDown}>Primer Button</MenuButton>
        <HtmlButton onClickAction={this.handleMouseDown}>HTML button</HtmlButton>
        <Menu
          handleMouseDown={this.handleMouseDown}
          menuVisible={this.state.visible}
        />
      </div>
    )
  }
}

export default Nav
