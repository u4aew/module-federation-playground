import styled from 'styled-components';
import coverBlue from './icons/cover-blue.svg'
import coverOrange from './icons/cover-orange.svg'
import coverGreen from './icons/cover-green.svg'


export const Wrapper = styled.div`
  min-height: 200px;
  width: 320px;
  box-sizing: border-box;
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  border-radius: 26px;
  &.is-blue {
    background-image: url(${coverBlue});
  }
  &.is-green {
    background-image: url(${coverGreen});
  }
  &.is-orange {
    background-image: url(${coverOrange});
  }
`

export const Header = styled.div``
export const Title = styled.div`
  font-weight: 700;
`
export const Caption = styled.div`
 font-size: 12px;
 opacity: 0.8; 
`
export const Bin = styled.div`
  font-size: 20px;
  font-weight: 500;
`
export const Body = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
export const Cols = styled.div`
  display: flex;
  margin: 0 -15px;
`
export const ColsItem = styled.div`
  margin: 0 15px;
`
export const ColsTitle = styled.div`
 font-size: 12px;
`
export const ColsDesc = styled.div`
  font-weight: 500;
`
export const Footer = styled.div``

