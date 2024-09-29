import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.nav`
  @media (min-width: 1440px) {
    margin: 0 auto;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-flex;
  padding: 8px;
  text-decoration: none;
  color: var(--main);
  transition: color var(--transition-delay) var(--transition);

  &:hover {
    color: var(--button-hover);
  }

  &.active {
    color: var(--button-hover);
  }
`;
