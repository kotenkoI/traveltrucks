import Logo from "../Logo/Logo.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import { HeaderContainer } from './Header.styled.js';

export default function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Navigation />
    </HeaderContainer>
  );
}
