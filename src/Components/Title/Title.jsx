import React from 'react'
import styled from '@emotion/styled'

const Title = (props) => {
  return (
    <Top>
      <hr style={{width:'100px', border:'1px solid black'}} />
            <Head>{props.title}</Head> 
        <hr style={{width:'100px', border:'1px solid black'}} />
    </Top>
  )
}

export default Title

const Top = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:15px;
`

const Head = styled.div`
    font-size:32px;
    font-weight:700;
    text-transform:uppercase;
`
