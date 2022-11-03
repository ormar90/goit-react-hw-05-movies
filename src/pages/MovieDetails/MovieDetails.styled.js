import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  background-color: gray;
  padding: 8px 16px;

  &.active {
    color: red;
    background-color: brown;
  }
`;

export const AboutLinkWrapper = styled.div`
  height: 60px;
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const GoBackLinkWrapper = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
`;

export const GoBackLink = styled(NavLink)`   
  text-decoration: none;
  color: black;
  background-color: gray;
  padding: 8px 16px;
`;
