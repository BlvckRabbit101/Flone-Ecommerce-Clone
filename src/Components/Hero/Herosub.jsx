import React from 'react'
import styled from '@emotion/styled'
import {NavLink} from 'react-router-dom';

const Herosub = (props) => {
  return (
    <Container>
      <Wrapper>
        <Nav to='/'>Home</Nav>
        <div>/</div>
        <div>{props.title}</div>
      </Wrapper>
    </Container>
  )
}

export default Herosub

const Container = styled.div`
  background-color: #F7F7F7;
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  height: auto;
`

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    // background-color: aqua;
    padding:35px;
    text-transform:uppercase;
    color: #555252;
    font-size:16px;
    font-weight:500;
    gap:5px;
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