import styled from '@emotion/styled'
import React from 'react'

const Shopbtn = (props) => {
  return (
    <Button>
      {props.name}
    </Button>
  )
}

export default Shopbtn

const Button = styled.button`
    padding: 7px 20px;
    background-color:#eeeeee;
    font-weight:400;
    font-size:15px;
    border-radius:25px;
    text-align:center;
    color:#424242;

    &:hover {
        color:white;
        background-color:#A749FF;
    }
`