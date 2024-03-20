import React from 'react'
import styled from '@emotion/styled'

const Shoparrow = (props) => {
  return (
    <Button>
      {props.icon}
    </Button>
  )
}

export default Shoparrow

const Button = styled.button`
    // padding: 20px;
    background-color:#eeeeee;
    font-weight:500;
    font-size:16px;
    border-radius:50%;
    text-align:center;
    color:#424242;
    width:50px;
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center; 
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    &:hover {
        color:white;
        background-color:#A749FF;
    }
`