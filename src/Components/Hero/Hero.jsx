import React from 'react'
import styled from '@emotion/styled'
import {NavLink, Link} from 'react-router-dom';
import Heroimg from '../../assets/images/hero.png'


const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
            <Head>Smart Products</Head>
            <Subhead>Summer Offer 2024 Collection</Subhead>
            <Link to='/Shop'><Button>SHOP NOW</Button></Link>
        </Left>
        <Right>
            <img style={{width:'120%',height:'100%',marginTop:'50px', objectFit:'contain'}} src={Heroimg} />
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Hero

const Container = styled.div`
  background-color: #F0E0FF;
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  height: auto;
`

const Wrapper = styled.div`
    width: 80%;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    // background-color: aqua;
`


const Left = styled.div`
   width:50%;
   height:auto;
//    background-color:blue;
   display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
`

const Head = styled.div`
    font-size:28px;
    font-weight: 500;
    margin-bottom: 10px;
`

const Subhead = styled.div`
    font-size:72px;
    font-weight: 500;
    margin-bottom: 20px;
`

const Button = styled.div`
    padding: 15px 35px;
    border: 1px solid black;
    background-color: transparent;
    font-size:16px;
    font-weight:500;
    color:black;

    &:hover{
        background-color: #A749FF;
        color:white;
        border: 1px solid #A749FF;
    }
`

const Right = styled.div`
    display:flex;
    flex-direction:column
    justify-content:center;
    align-items:flex-start;
    // background-color: red;
    width:50%;
    height:auto;
`