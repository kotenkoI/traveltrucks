import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  display: flex;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: -0.01em;
  text-decoration: none;

  @media (min-width: 1440px) {
    font-size: 20px;
    position: absolute;
    line-height: 120%;
  }
`;

export const MainText = styled.p`
  color: var(--main);
`;

export const SecondaryText = styled.span`
  color: var(--text);
`;
