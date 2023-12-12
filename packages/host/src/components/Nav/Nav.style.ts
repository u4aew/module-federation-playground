import styled from 'styled-components';

export const List = styled.ul`
  padding: 0;
  max-width: 165px;
  list-style: none;
`;
export const ListItem = styled.li``;

export const ListIcon = styled.div`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
`;

export const ListIconHover = styled.div`
  position: absolute;
  left: 15px;
  top: 50%;
  opacity: 0;
  transform: translateY(-50%);
`;

export const ListLink = styled.a`
  display: block;
  position: relative;
  padding: 10px 10px 10px 55px;
  border-radius: 4px;
  font-weight: bold;
  text-decoration: none;
  color: #c7c7c7;
  font-size: 14px;
  &:hover {
    color: #197bbd;
    background-color: #f0f7ff;
    ${ListIconHover} {
      opacity: 1;
    }
  }
`;
