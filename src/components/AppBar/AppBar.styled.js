import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const Navigation = styled.nav`
  display: flex;
  gap: 16px;
  padding: 16px;
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;

  &.active {
    color:red;
  }
`;
