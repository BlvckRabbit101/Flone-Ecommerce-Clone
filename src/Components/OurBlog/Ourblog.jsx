import React from 'react'
import styled from '@emotion/styled'
import Ourcard from './Ourcard'
import Bg1 from '../../assets/images/blog-1.jpg'
import Bg2 from '../../assets/images/blog-2.jpg'
import Bg3 from '../../assets/images/blog-3.jpg'
import Title from '../Title/Title'


const Ourblog = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
            <Title title='OUR BLOG' />
        </Top>
        <Bottom>
            <Ourcard Bground={Bg1} title='Lorem ipsum dolor sitamet consec.' text='By Shop Admin'/>
            <Ourcard Bground={Bg2} title='Lorem ipsum dolor sitamet consec.' text='By Shop Admin'/>
            <Ourcard Bground={Bg3} title='Lorem ipsum dolor sitamet consec.' text='By Shop Admin'/>
        </Bottom>
      </Wrapper>
    </Container>
  )
}

export default Ourblog

const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  padding-top: 100px;
  padding-bottom: 150px;
`

const Wrapper = styled.div`
    width: 80%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    // background-color: aqua;
    gap:50px;
`
const Top = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:15px;
`

const Bottom = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:flex-start;
    gap:30px;

`
