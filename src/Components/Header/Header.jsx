import React from 'react'
import styled from '@emotion/styled'
import {NavLink, Link} from 'react-router-dom';
import Logo from '../../assets/images/logo.png'
import { FiLogOut, FiSearch } from "react-icons/fi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { CgShoppingBag } from "react-icons/cg";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {

  return (
    <Container>
      <Wrapper>
        <Left>
        <Nav to='/'><img src={Logo} /></Nav>
        </Left>
        <Mid>
            <Nav to='/'>Home<MdKeyboardArrowDown /></Nav>
            <Nav to='/Shop'>Shop<MdKeyboardArrowDown /></Nav>
            <Nav to='/Collections'>Collections</Nav>
            <Nav to='/Blog'>Blog<MdKeyboardArrowDown /></Nav>
            <Nav to='/About'>About</Nav>
            <Nav to='/Contact'>Contact</Nav>
        </Mid>
        <Right>
            <Icon><FiSearch style={{width:'20px', height:'20px'}} /></Icon>
            <Icon><MdOutlineAccountCircle style={{width:'20px', height:'20px'}} /></Icon>
            <Icon><FiHeart style={{width:'20px', height:'20px'}} /></Icon>
            <Icon><CgShoppingBag style={{width:'20px', height:'20px'}} /></Icon>
        </Right>
      </Wrapper>

    </Container>
  )
}

export default Header

const Container = styled.div`
//   background-color: gold;
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  height: 70px;
`

const Wrapper = styled.div`
    width: 80%;
    height:70px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    // background-color: aqua;
`

const Left = styled.div`
   width:110px;
   height:30px;
//    background-color:blue;
`

const Mid = styled.div`
    width: 500px;
    // background-color:green;
    display:flex;
    justify-content:space-between;
    align-items:center;
    
`
const Right = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    // background-color: red;
    // gap:15px;
    width: 130px;
`

const Icon = styled.div`
    color:#555252;
    cursor: pointer;

    &:hover {
        color:#A752FF;
    }
`

const Nav = styled(NavLink)`
  text-decoration:none;
  color: #555252;
  font-size:16px;
  display:flex;
  justify-content:center;
  align-items:center;
  gap:3px;
//   background-color: blue;

  &:hover {
    color: #A752FF;
  }

`