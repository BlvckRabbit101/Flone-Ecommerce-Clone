import React from 'react'
import styled from '@emotion/styled'

const Cartbtn = (props) => {
  return (
    <Button >
      {props.name}
    </Button>
  )
}

export default Cartbtn

const Button = styled.button`
    padding: 10px 50px;
    background-color:#eeeeee;
    font-weight:500;
    font-size:14px;
    border-radius:25px;
    text-align:center;
    color:#424242;
    text-transform:uppercase;

    &:hover {
        color:white;
        background-color: #A749FF;
    }
`