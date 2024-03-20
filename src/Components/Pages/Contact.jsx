import React from 'react'
import styled from '@emotion/styled'
import Herosub from '../Hero/Herosub'
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiWorld } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Contact = () => {
    

  return (
    <Container>
      <Herosub title='Contact Us' />
      <Wrapper>
        <Left>
          <Holder>
            <Holdleft>
              <Icon><BsFillTelephoneFill /></Icon>
            </Holdleft>
            <Holdright>
              <div>+012 345 678 102</div>
              <div>+012 345 678 102</div>
            </Holdright>
          </Holder>
          <Holder>
            <Holdleft>
              <Icon>< GiWorld /></Icon>
            </Holdleft>
            <Holdright>
              <div>urname@email.com</div>
              <div>urwebsitename.com</div>
            </Holdright>
          </Holder>
          <Holder>
            <Holdleft>
              <Icon><FaLocationDot /></Icon>
            </Holdleft>
            <Holdright>
              <div>Address goes here,</div>
              <div>street, Crossroad 123.</div>
            </Holdright>
          </Holder>
          <Leftbtm>
            <Head>Follow us</Head>
            <Iconhold>
              <Socialicon><FaFacebookF /></Socialicon>
              <Socialicon><FaPinterestP /></Socialicon>
              <Socialicon><FaTumblr /></Socialicon>
              <Socialicon><FaVimeoV /></Socialicon>
              <Socialicon><FaTwitter  /></Socialicon>
            </Iconhold>
          </Leftbtm>
        </Left>
        <Right>
          <Wrap>
          <Head>Get In Touch</Head>
            <Tophold>
              <Name placeholder='Name*'></Name>
              <Email placeholder='Email*'></Email>
            </Tophold>
              <Subject placeholder='Subject*'></Subject>
              <Message placeholder='Your Message*'></Message>
            <Send>SEND</Send>
          </Wrap>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Contact

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
    justify-content:center;
    align-items:center;
    // background-color: aqua;
    gap:15px;
    padding-top:100px;
    padding-bottom:100px;
`

const Left = styled.div`
  width:35%;
  height:600px;
  background-color:#F3F3F3;
  display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:50px;
`

const Holder = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:center;
  width:60%;
  // background-color:gold;
  gap:20px;
`

const Holdleft = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;

`

const Icon = styled.div`
  padding:5px 10px;
  border: 1px solid black;
  border-radius:70%;
  cursor:pointer;
  font-size:18px;

  &:hover{
    background-color:black;
    color:white;
  }

`

const Leftbtm = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
    gap:15px;
`

const Iconhold = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:50%;
  font-size:20px;
  color:#4B565C;
`

const Socialicon = styled.div`
  cursor:pointer;

  &:hover{
    color:#A749FF;
  }

`

const Holdright = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`

const Right = styled.div`
  width:65%;
  height:600px;
  background-color:#F3F3F3;
  display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

const Wrap = styled.div`
  width:80%;
  display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    // background-color:aqua;
    gap:30px;
    padding-top:40px;
    padding-bottom:40px;
`

const Head = styled.div`
  font-size:28px;
  font-weight:500;
  color:#4B565C;
`

const  Tophold = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    gap:30px;
`

const Name = styled.input`
  padding: 10px 35px;
  background-color:transparent;
  border: 1px solid #C1C1C1;
  font-size:15px;
`

const Email = styled.input`
  padding: 10px 35px;
  background-color:transparent;
  border: 1px solid #C1C1C1;
  font-size:15px;
`

const Subject = styled.input`
  width:95%;
  padding: 10px 5px 10px 20px;
  background-color:transparent;
  border: 1px solid #C1C1C1;
  font-size:15px;
`

const Message = styled.input`
  width:95%;
  padding: 20px 5px 140px 20px;
  background-color:transparent;
  border: 1px solid #C1C1C1;
  font-size:15px;
`

const Send = styled.button`
  border-radius:0;
  padding: 10px 50px;
  background-color:#404040;
  color:white;
  margin-top:20px;

  &:hover{
    background-color:#A749FF;
  }
`

