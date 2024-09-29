import { NavContainer, StyledNavLink } from './Navigation.styled.js';
import clsx from 'clsx';

const getClasses = ({ isActive }) => {
  return clsx(isActive && 'active');
};

export default function MainNav() {
  return (
    <NavContainer>
      <StyledNavLink to='/' className={getClasses}>
        Home
      </StyledNavLink>
      <StyledNavLink to='/catalog' className={getClasses}>
        Catalog
      </StyledNavLink>
    </NavContainer>
  );
}
