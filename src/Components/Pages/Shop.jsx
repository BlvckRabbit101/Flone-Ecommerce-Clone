import React, { useEffect, useState } from 'react'
import axios from "axios";
import {NavLink, Link} from 'react-router-dom';
import Herosub from '../Hero/Herosub'
import styled from '@emotion/styled'
import { FiLogOut, FiSearch } from "react-icons/fi";
import Shoptag from '../Shoptag'
import Shopbtn from '../Shopbtn'
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import Shoparrow from '../Shoparrow';

const Shop = () => {
  const [data, setData] = useState()

  const getProduct = async () => {
    await axios.get('https://fakestoreapi.com/products').then((res) => {
      console.log(res.data)
      setData(res.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  const newData = data?.slice(0, 9)

  useEffect(() => {
    getProduct()
    console.log('hello');
  },[])

  return (
    <Container >
        <Herosub title='Shop'/>
        <Wrapper>
          <Left>
            <Catholder>
                    <Head>Search</Head>
                    <Inputhold>
                      <Input placeholder='Search here...'/>
                      <Hr></Hr>
                      <Icon><FiSearch style={{width:'20px', height:'20px'}} /></Icon>
                    </Inputhold>
            </Catholder>
            <Catholder>
                    <Head>Refine By</Head>
                    <Catnav>
                        <Shoptag Tag='On Sale' Qty='4'/>
                    </Catnav>
                    <Catnav>
                        <Shoptag Tag='New' Qty='4'/>
                    </Catnav>
                    <Catnav>
                      <Shoptag Tag='In Stock' Qty='4'/>
                    </Catnav>
            </Catholder>
            <Catholder>
                    <Head>Filter by Price</Head>
                    <Catnav>
                        $14 - $1000
                    </Catnav>
            </Catholder>
            <Catholder>
                    <Head>Colour</Head>
                    <Catnav>
                        <Shoptag Tag='Green' Qty='4'/>
                    </Catnav>
                    <Catnav>
                        <Shoptag Tag='Cream' Qty='4'/>
                    </Catnav>
                    <Catnav>
                        <Shoptag Tag='Blue' Qty='4'/>
                    </Catnav>
                    <Catnav>
                        <Shoptag Tag='Black' Qty='4'/>
                    </Catnav>
            </Catholder>
            <Catholder>
                    <Head>Size</Head>
                    <Catnav>
                        <Shoptag Tag='XL' />
                    </Catnav>
                    <Catnav>
                        <Shoptag Tag='L' />
                    </Catnav>
                    <Catnav>
                        <Shoptag Tag='SM' />
                    </Catnav>
                    <Catnav>
                        <Shoptag Tag='XXL' />
                    </Catnav>
            </Catholder>
            <Catholder>
                    <Head>Tag</Head>
                    <Catbtn>
                        <Shopbtn name='Clothing' />
                        <Shopbtn name='Accessories' />
                        <Shopbtn name='For Men' />
                        <Shopbtn name='For Women' />
                        <Shopbtn name='Fashion' />
                    </Catbtn>
            </Catholder>
          </Left>
          <Right>
              <Top>
                <Sort >
                  <Sortvalue>Sort by newness</Sortvalue>
                  <Sortvalue>A - Z</Sortvalue>
                  <Sortvalue>Z - A</Sortvalue>
                  <Sortvalue>In Stock</Sortvalue>
                </Sort>
                <Show>Showing 1–12 of 20 result</Show>
                <View>
                  <BsFillGrid3X3GapFill style={{cursor:'pointer', width:'20px', height:'20px'}} />
                  <FaListUl style={{cursor:'pointer', width:'20px', height:'20px'}} />
                </View>
              </Top>
              <Mid>
                {newData?.map((props) => (
                <Cardwrap key={props.id}>
                  <Card>
                    <Image src={props.image} />
                  </Card>
                  <Cardbtm>
                    <Nav to={`/Detail/${props.id}`} ><Pname>{props.title}</Pname></Nav>
                    <Price>${props.price}</Price>
                  </Cardbtm>
                </Cardwrap>
              ))}
              </Mid>
              <Btm>
                  <Shoparrow icon="<<"/>
                  <Shoparrow icon="1"/>
                  <Shoparrow icon="2"/>
                  <Shoparrow icon=">>"/>
              </Btm>
          </Right>
        </Wrapper>
    </Container>
  )
}

export default Shop

const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100%;
  padding-bottom: 100px;
`

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  // background-color: gold;
  gap: 20px;
  padding-top: 100px;
`

const Left = styled.div`
  width: 25%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  // background-color: red; 
  gap: 25px;
`

const Right = styled.div`
  width: 75%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  // background-color: blue;
`

const Catholder = styled.div`
    width: 100%;
    padding-bottom: 15px;
    // background-color:blue;
`
const Head  = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
`

const Catnav = styled.div`
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  justify-content: flex-start;
  cursor:pointer;
  // background-color:aqua;
  margin-bottom:10px;

  &:hover{
    color:#A749FF;
  }

  
`

const Catbtn = styled.div`
  display:flex;
  flex-wrap:wrap;
  gap:15px;
`



const Inputhold = styled.div`
  padding: 0px 15px 0px 10px;
  border:1px solid #E6E6E6;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap:10px;
`


const Input = styled.input`
  outline:none;
  border:none;
  background-color:transparent;
  font-size:16px;
`


const Hr = styled.hr`
  width:0px;
  height:20px;
  border: 1px solid #A1A5AA;
  outline:none;
`

const Icon = styled.div`
    color:#555252;
    cursor: pointer;
    width:20px;
    height:20px;
    &:hover {
        color:#A752FF;
    }
`

const Top = styled.div`
    display:flex;
    justify-content: flex-start;
    align-items:center;
    gap: 30px;
    width:100%;
`
const Sort = styled.select`
    background-color:transparent;
    outline:none;
    border:none;
    font-size:15px;
    color:#936060;
    padding-right:20px;
`
const Sortvalue = styled.option`
  
`
const Show = styled.div`
  color:#936060;
  flex:1;
`


const View = styled.div`
    display:flex;
    gap: 15px;
    justify-content: center;
    align-items: center;
    color:#936060;
` 

const Mid = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:flex-start;
  margin-top:40px;
  flex-wrap:wrap;
  gap:25px;
  // background-color:gold;
`

const Cardwrap = styled.div`
  width:245px;
  height:450px;
  // background-color:gold;
  cursor:pointer;
  
`

const Card = styled.div`
  width:245px;
  height:300px;
  background-color:white;
  display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border:1px solid #F7F7F7;
`

const Cardbtm = styled.div`
  width:245px;
  height:100px;
  // background-color:red;
  display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    margin-top:15px;
`

const Pname = styled.div`
    font-size: 18px;
    // font-weight:500;
    text-align:center;

    &:hover{
      color:#A752FF;
    }
`

const Price = styled.div`
    font-size: 16px;
    text-align:center;
    color:#FE5252;
`

const Image = styled.img`
  width: 245px;
  height: 300px;
  object-fit:contain;
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

const Btm = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  gap:10px;
  width:100%;
`

// const  = styled.div`

// `