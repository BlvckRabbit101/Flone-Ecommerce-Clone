import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import {NavLink, Link} from 'react-router-dom';
import axios from "axios";
import Detail from '../Pages/Detail';
import Title from '../Title/Title'

const Deals = () => {
  const [data, setData] = useState()
    

  const getProduct = async () => {
    await axios.get('https://fakestoreapi.com/products').then((res) => {
      console.log(res.data)
      setData(res.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  const newData = data?.slice(0, 8)

  useEffect(() => {
    getProduct()
    console.log('hello');
  },[])


console.log(newData)
  return (
    <Container>
      <Wrapper>
        <Top>
            <Title title='DAILY DEALS!' />
        </Top>
        <Mid>
            <Link to='/'><Button>New Arrivals</Button></Link>
            <Link to='/'><Button>Best Sellers</Button></Link>
            <Link to='/'><Button>Sale Items</Button></Link>
        </Mid>
        <Bottom>
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
          
        </Bottom>
      </Wrapper>
    </Container>
  )
}

export default Deals

const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  padding-bottom: 100px;
`

const Wrapper = styled.div`
    width: 80%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    // background-color: aqua;
`
const Top = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:15px;
`

const Mid = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:20px;
`

const Button = styled.div`
    padding: 5px 0px;
    border: none;
    background-color: transparent;
    font-size:20px;
    font-weight:500;
    color:#555252;
    margin-top:10px;

    &:hover{
        color:black;
    }
`

const Bottom = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:flex-start;
  margin-top:40px;
  flex-wrap:wrap;
  gap:25px;
  // background-color:gold;
`

const Cardwrap = styled.div`
  width:249px;
  height:450px;
  // background-color:gold;
  cursor:pointer;
  
`

const Card = styled.div`
  width:250px;
  height:300px;
  background-color:white;
  display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border:1px solid #F7F7F7;
`

const Cardbtm = styled.div`
  width:250px;
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
  width: 250px;
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