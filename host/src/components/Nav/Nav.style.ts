import styled from "styled-components";

export const List = styled.ul`
  padding: 0;
  max-width: 165px;
  list-style: none`
export const ListItem = styled.li``



export const ListIcon = styled.div`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
`

export const ListIconHover = styled.div`
  position: absolute;
  left: 15px;
  top: 50%;
  opacity: 0;
  transform: translateY(-50%);`


export const ListLink = styled.a`
  display: block;
  position: relative;
  padding: 10px 10px 10px 55px;
  border-radius: 4px;
  font-weight: bold;   
  text-decoration: none;
  color: #C7C7C7;
  font-size: 14px;
  &:hover {
    color: #197BBD;
    background-color: #F0F7FF;
    ${ListIconHover} {
      opacity: 1;
    }
  }
`
