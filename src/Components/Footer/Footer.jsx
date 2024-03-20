import React from 'react'
import styled from '@emotion/styled'
import {NavLink, Link} from 'react-router-dom';
import Logo from '../../assets/images/logo.png'

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
            <img style={{marginBottom:'10px'}} src={Logo} />
            <Text>© 2020 Flone.</Text>
            <Text>All Rights Reserved</Text>
        </Left>
        <Mid>
            <Holder>
                <Title>ABOUT US</Title>
                <Navhold>
                    <Nav to='/About'>About us</Nav>
                    <Nav to='/About'>Store location</Nav>
                    <Nav to='/Contact'>Contact</Nav>
                    <Nav to='/About'>Orders tracking</Nav>
                </Navhold>
            </Holder>
            <Holder>
                <Title>USEFUL LINKS</Title>
                <Navhold>
                    <Nav to='/About'>Returns</Nav>
                    <Nav to='/About'>Support Policy</Nav>
                    <Nav to='/About'>Size guide</Nav>
                    <Nav to='/About'>FAQs</Nav>
                </Navhold>
            </Holder>
            <Holder>
                <Title>FOLLOW US</Title>
                <Navhold>
                    <Nav to='/Contact'>Facebook</Nav>
                    <Nav to='/Contact'>Twitter</Nav>
                    <Nav to='/Contact'>Instagram</Nav>
                    <Nav to='/Contact'>Youtube</Nav>
                </Navhold>
            </Holder>
        </Mid>
        <Right>
            <Holder>
                <Title>SUBSCRIBE</Title>
                <Type>Get E-mail updates about our latest shop and special offers.</Type>
                <Input>
                    <input style={{outline:'none', padding: '10px 50px 10px 0px', fontSize:'15px', backgroundColor:'transparent',border:'none', borderBottom:'2px solid #EBEBEB'}} placeholder='Enter your email here...'></input>
                </Input>
                <Link to='/'><Button>Subscribe</Button></Link>
            </Holder>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  background-color: #F6F6F8;
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  padding-top: 100px;
  padding-bottom: 100px;
`

const Wrapper = styled.div`
    width: 80%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    // background-color: aqua;
`

const Left = styled.div`
   width:150px;
   height: 200px;
//    background-color:blue;
   display:flex;
   flex-direction:column;
    justify-content:center;
    align-items:flex-start;
`

const Text = styled.div`
    font-size:15px;
`

const Mid = styled.div`
    width: 520px;
    height: 200px;
    // background-color:green;
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
`

const Holder =styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-start;
    gap:10px;
    // width: 300px;
    // color:gold;
`

const Title =styled.div`
    text-transform:uppercase;
    font-size:16px;
    font-weight:500;
`

const Navhold =styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    gap:10px;
`
const Nav = styled(NavLink)`
  text-decoration:none;
  color: #555252;
  font-size:16px;
  font-weight:400;
  display:flex;
  justify-content:center;
  align-items:center;
  gap:3px;
    // background-color: yellow;

  &:hover {
    color: #A752FF;
  }

`

const Right = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    // background-color: red;
    width: 250px;
    height: 200px;
`

const Type = styled.div`
  color:#555252;
`

const Input = styled.div`
  margin-top:15px;
`

const Button = styled.div`
    padding: 5px 0px;
    border: none;
    background-color: transparent;
    font-size:16px;
    font-weight:500;
    color:black;
    text-decoration:underline;
    text-transform:uppercase;

    &:hover{
        color:#A749FF;
    }
`