import { StyledNavLink, MainText, SecondaryText } from './Logo.styled.js';

export default function Logo() {
  return (
    <StyledNavLink to='/'>
      <MainText>Travel</MainText>
      <SecondaryText>Trucks</SecondaryText>
    </StyledNavLink>
  );
}
