import React from 'react'
import styled from '@emotion/styled'

const SubCard = ({icon, title, text}) => {
  return (
    <Wrap>
      <Left>
        <Icon><img src={icon} /></Icon>
      </Left>
      <Right>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Right>
    </Wrap>
  )
}

export default SubCard

const Wrap = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    width:300px;
    // background-color:white;
    gap:10px;
`
const Left = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    width:50px;
    // background-color:red;
`

const Icon = styled.div`
    width:50px;
    height:50px;

    &:hover{
        
    }
`

const Right = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    width:200px;
    // background-color:blue;
    // gap:5px;
`

const Title = styled.div`
    font-size:16px;
`

const Text = styled.div`
    font-size:14px;
    color:#555252;
`