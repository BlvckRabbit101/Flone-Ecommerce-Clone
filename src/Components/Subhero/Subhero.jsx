import React from 'react'
import styled from '@emotion/styled'
import SubCard from './SubCard'
import A from '../../assets/images/support-1.png'
import B from '../../assets/images/support-2.png'
import C from '../../assets/images/support-3.png'
import D from '../../assets/images/support-4.png'

const Subhero = () => {
  return (
    <Container>
      <Wrapper>
        <SubCard icon={A} title='Free Shipping' text='Free shipping on all order' />
        <SubCard icon={B} title='Support 24/7' text='Free shipping on all order' />
        <SubCard icon={C} title='Money Return' text='Free shipping on all order' />
        <SubCard icon={D} title='Order Discount' text='Free shipping on all order' />
      </Wrapper>
    </Container>
  )
}

export default Subhero

const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  padding-top: 80px;
  padding-bottom: 80px;
`

const Wrapper = styled.div`
    width: 80%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    // background-color: aqua;
`
