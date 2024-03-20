import React from 'react'
import styled from '@emotion/styled'

const AboutTitle = (props) => {
  return (
    <Top>
        <Head>{props.title}</Head> 
        <hr style={{width:'70px', border:'2px solid black'}} />
    </Top>
  )
}

export default AboutTitle

const Top = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:10px;
`

const Head = styled.div`
    font-size:32px;
    font-weight:500;
`
