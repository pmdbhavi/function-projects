import styled from 'styled-components'

export const TabCon=styled.li`
    margin:10px;
    list-style-type: none;
`

export const Button=styled.button`
    color:${props=>props.active ? "#3e4c59":"#9aa5b1"};
    font-size:30px;
    margin:10px;
    font-weight: 500;
    cursor: pointer;
    background-color: transparent;
    border-width:0px;
    border-bottom:${props =>props.active && "2px solid #0b69ff"};
`