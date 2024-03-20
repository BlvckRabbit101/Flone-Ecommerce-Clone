import React from 'react'
import styled from '@emotion/styled'
import Herosub from '../../Hero/Herosub'
import Cartbtn from './Cartbtn'
import { GrEdit } from "react-icons/gr";
import { GrClose } from "react-icons/gr";

const Cart = () => {
  return (
    <Container>
      <Herosub title='Cart Page' />
      <Wrapper>
        <Top>
            <Header>Your Cart Items</Header>
            <Table>
              <Tr>
                <Thead>image</Thead>
                <Thead>product name</Thead>
                <Thead>price</Thead>
                <Thead>qty</Thead>
                <Thead>subtotal</Thead>
                <Thead>action</Thead>
              </Tr>
              <Tr>
                <Tbody>
                  <Pimage></Pimage>
                </Tbody>
                <Tbody>
                  <Pname>Name</Pname>
                </Tbody>
                <Tbody>$Price</Tbody>
                <Tbody>
                  <Quant>
                    <Qbtn>-</Qbtn>
                    <Qinput type='text'></Qinput>
                    <Qbtn>+</Qbtn>
                  </Quant>
                </Tbody>
                <Tbody>Total</Tbody>
                <Tbody>
                  <Edit>
                    <Icon><GrEdit /></Icon>                    
                    <Icon><GrClose /></Icon>    
                  </Edit>
                </Tbody>
              </Tr>
            </Table>
            <Buttonhold>
                <Buttonpush><Cartbtn name='CONTINUE SHOPPING' /></Buttonpush>
                <Cartbtn name='update shopping cart'/>
                <Cartbtn name='clear shopping cart'/>
            </Buttonhold>
        </Top>
        <Bottom></Bottom>
      </Wrapper>
    </Container>
  )
}

export default Cart


const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100%;
`

const Wrapper = styled.div`
    width: 80%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    // background-color: blue;
    gap:15px;
    padding-top:100px;
    padding-bottom:100px;
`

const Top = styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    // background-color: gold;
`


const Header = styled.div`
    font-size:20px;
    font-weight:500;
    width:100%;
    text-align:left;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  // background-color:green;
  border: 1px solid #EBEBEB;
  
`

const Tr = styled.tr`
  text-align: center;
  border-bottom: 1px solid #EBEBEB;
  
`

const Thead = styled.th`
  border-bottom: 1px solid #EBEBEB;
  padding:10px;
  background-color:#F9F9F9;
  font-size:14px;
  color:#333;
  font-weight:500;
  text-transform:uppercase;
`

const Tbody = styled.td`
  padding:20px;
  font-size:15px;
  font-weight:500;
  color:#333;
  
`

const Pimage = styled.img`
  width:80px;
  height:80px;
  background-color:black;
  object-fit:contain;
`

const Pname = styled.div`
  cursor:pointer;

  &:hover{
    color:#A749FF;
  }
`

const Quant = styled.div`
  color:#333;
  display:flex;
  justify-content:center;
  align-items:center;
  // background-color:gold;
`


const Qbtn = styled.button`
    border: 1px solid #e5e5e5;
    height: 42px;
    background-color:transparent;
    border-radius:0;
    padding:0px;
    width:20px;
    font-size: 14px;

    &:hover{
      border: 1px solid #e5e5e5;
    }
`


const Qinput = styled.input`
  color: #333;
  font-size: 14px;
  height: 40px;
  margin: 0;
  width: 80px;
  background-color: transparent;
  border: 1px solid #e1e1e1;
  border-right:none;
  border-left:none;
  padding: 0;
  text-align: center;
`

const Edit = styled.div`
  color:#333;
  display:flex;
  justify-content:center;
  align-items:center;
  gap:20px;
`

const Icon = styled.div`
  cursor:pointer;

  &:hover{
    color:#A749FF;
  }
`

const Buttonhold = styled.div`
    display:flex;
    width:100%;
    gap:20px;
    // background-color: aqua;
    padding-top:30px;
    padding-bottom:30px;
`

const Buttonpush = styled.div`
    flex:1;
`

const Bottom = styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    // background-color: biege;
`
