import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled.js';

export default function Layout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
