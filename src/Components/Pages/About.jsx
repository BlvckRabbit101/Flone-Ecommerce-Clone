import React from 'react'
import styled from '@emotion/styled'
import Herosub from '../Hero/Herosub'
import AboutTitle from '../Title/AboutTitle'
import Ban1 from '../../assets/images/barnd-logo-1.png'
import Ban2 from '../../assets/images/barnd-logo-2.png'
import Ban3 from '../../assets/images/barnd-logo-3.png'
import Ban4 from '../../assets/images/barnd-logo-4.png'
import Ban5 from '../../assets/images/barnd-logo-5.png'

const About = () => {
  
  return (
    <Container>
      <Herosub title='About Us' />
      <Wrapper>
          <Head>
            <Who>Who are We</Who>
            <Welcome><AboutTitle title='Welcome To Flone' /></Welcome>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat irure</Text>
          </Head>
          <Cardhold>

          </Cardhold>
          <Banner>

          </Banner>

        <Team>
          <AboutTitle title='Team Members' />
          <Text2>Lorem ipsum dolor sit amet conse ctetu.</Text2>
        </Team>
        <Bannerhold>
            <Img  src={Ban1} />
            <Img src={Ban2} />
            <Img src={Ban3} />
            <Img src={Ban4} />
            <Img src={Ban5} />
        </Bannerhold>
      </Wrapper>
    </Container>
  )
}

export default About

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

const Head = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:100px;
`

const Who = styled.div`
  font-size:18px;
  color:#666866;
  font-weight:500;
`

const Welcome = styled.div`
  color:#433F3F;
`

const Text = styled.div`
  color:#433F3F;  
  font-size:18px;
  font-weight:400;
  width:90%;
  text-align:center;
  line-height:30px;
  margin-top:20px;
`

const Cardhold = styled.div`

`

const Banner = styled.div`

`

const Team = styled.div`
  // background-color:gold;
  width:100%;
  display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
const Text2 = styled.div`
  color:#433F3F;  
  font-size:14px;
  font-weight:400;
  width:90%;
  text-align:center;
  // margin-top:20px;
`

const Bannerhold = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-wrap:wrap;
  padding-top:100px;
  padding-bottom:100px;
  width:100%;
  // background-color:blue;
`
const Img = styled.img`
  color:#616161;
  width:120px;
  height:120px;
  object-fit:contain;
  cursor:pointer
`