import React from "react"
import styled from "styled-components"
import {useHistory} from "react-router-dom"

const LogoStyle = styled.div`
  width: auto;
  height: auto;
  font-family: Montserrat;
  font-size: 1.313rem;
  font-weight: bold;
  color: white;
  opacity: 1;
  cursor: pointer;
`





const Logo = () => {
    const history = useHistory();
    return (
        <>
            <LogoStyle onClick={()=>history.push("/")}>
                Yirang
            </LogoStyle>
        </>
    )
}

export default Logo