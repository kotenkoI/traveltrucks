import { Container, MainHead, SecHead, StyledNavLink } from './Home.styled.js';

export default function Home() {
  return (
    <Container>
      <MainHead>Campers of your dreams</MainHead>
      <SecHead>You can find everything you want in our catalog</SecHead>
      <StyledNavLink to='/catalog'>View Now</StyledNavLink>
    </Container>
  );
}
