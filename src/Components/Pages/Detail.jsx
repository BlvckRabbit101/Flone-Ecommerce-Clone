import React from 'react'
import Herosub from '../Hero/Herosub'
import styled from '@emotion/styled'
import axios from "axios";
import { useParams } from 'react-router-dom'; 
import { useEffect, useState } from 'react';
import Title from '../Title/Title'

const Detail = () => {
    const [data, setData] = useState()
    const {id} = useParams()
    const getOneProduct = async() => {
      await axios.get(`https://fakestoreapi.com/products/${id}`).then(res => {
        // console.log(res.data);
        setData(res.data)
      }).catch(error => {
        console.log(error);
      })
    }

    console.log(data?.title)

    useEffect(() => {
      getOneProduct()
    },[])


  return (
    <Container>
        <Herosub title='Shop' />
      <Wrapper>
        <Body>
            <Left>
                <Imagehold>
                    <Image src={data?.image}/>
                </Imagehold>
            </Left>
            <Right>
                
                <Pname>{data?.title}</Pname>
                <Price>${data?.price}</Price>
                <div style={{width:'90%'}}>{data?.description}</div>
                <hr style={{width:'100%', border:'1px solid #F7F7F7', marginBottom:'30px', marginTop:'30px'}} />
                <Cathold style={{color:'#6C6767'}}>Category : <Cat>{data?.category}</Cat> </Cathold>
            </Right>
        </Body>

        <Title title='Related Products'/>
      </Wrapper>
    </Container>
  )
}

export default Detail

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
    // background-color: aqua;
`

const Body = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:center;
  width:100%;
  margin-top:100px;
  margin-bottom:100px;
`

const Left = styled.div`
  display:flex;
  flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
  width:50%;
//   background-color:red;
`

const Imagehold = styled.div`
    width:450px;
    height:500px;
    background-color:white;
    border-radius:5px;
    border: 1px solid #F7F7F7;
`

const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:contain;
`

const Right = styled.div`
  display:flex;
  flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
  width:50%;
  
//   background-color:blue;
`

const Pname = styled.div`
    font-size:24px;
    font-weight:500;
`

const Price = styled.div`
    font-size: 24px;
    text-align:left;
    color:#FE5252;
    margin-bottom:50px;
`
const Cathold = styled.div`
    color:#6C6767;
    display:flex;
    gap:5px;
`

const Cat = styled.div`
    color:#6C6767;
    cursor:pointer;

    &:hover{
        color:#A749FF;
    }
`