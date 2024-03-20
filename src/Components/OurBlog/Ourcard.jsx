import React from 'react'
import styled from '@emotion/styled'

const Ourcard = ({Bground, title, text}) => {
  return (
    <Wrap style={{backgroundImage:`url(${Bground})`}}>
      <Top>
        <Banner>Lifestyle</Banner>
      </Top>
      <Bottom>
        <Bhold>
            <Title>{title}</Title>
            <Text>{text}</Text>
        </Bhold>
      </Bottom>
    </Wrap>
  )
}

export default Ourcard

const Wrap = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-start;
    width:320px;
    height:200px;
    background-color:blue;
    gap:10px;
    padding:10px;
    position:relative;
`

const Top = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:flex-start;
`

const Banner = styled.div`
    padding: 2px 10px;
    color:white;
    font-size:14px;
    font-weight:500;
    background-color:#A749FF;
    
`
const Bottom = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%
`

const Bhold = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:10px;
    padding: 10px 15px;
    background-color:white;
    position:absolute;
    top:150px;
`


const Title = styled.div`
    font-size:24px;
    font-weight:500;
    cursor:pointer;
    text-align:center;
    width:250px;

    &:hover{
        color: #A749FF;
    }

`

const Text = styled.div`
    font-size:16px;
    font-weight:400;   
    text-align:center; 
    color:#555252;
    font-style: italic;
`