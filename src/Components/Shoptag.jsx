import React from 'react'
import styled from '@emotion/styled' 

const Shoptag = (props) => {
  return (
    <Catnav>
        <Check type='checkbox'></Check>
        <Tag>{props.Tag}</Tag>
        <Qty className='qty'>{props.Qty}</Qty>
    </Catnav>
  )
}

export default Shoptag

const Check = styled.input`
    margin:0;

`

const Tag = styled.div`
flex:1;
`

const Qty = styled.div`
  background-color:#EEEEEE;
  border-radius:25px;
  padding:0px 15px;
  font-weight:500;
  color:#9A9A9A;

  
`

const Catnav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  cursor:pointer;
  width:100%;
  font-weight:400;

 
  &:hover{
    color:#A749FF;
    }

  &:hover .qty{
    background-color:#A749FF;
    color:white;
  }
  
`



