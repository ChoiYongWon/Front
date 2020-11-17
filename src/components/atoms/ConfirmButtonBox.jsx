import React from "react"
import styled from "styled-components"

const Button = styled.input.attrs(props=>({type: "button"}))`
    width : ${props=>props.width};
    height: ${props=>props.height};
    background-color: #f1f3f6;
    font-size: 1.5rem;
    border: 1px solid #ccd4e0;
    color: #707070;
    margin: 2% 0;
    
`

const ConfirmButtonBox=({width, height, value, onClick})=>(
    <>
        <Button width={width} height={height} value={value} onChange={onClick}>
        </Button>
    </>
)

export default ConfirmButtonBox