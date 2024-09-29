import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import heroImage from '../../images/hero.png';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.section`
  background-image: url(${heroImage});
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  color: var(--inputs);
  padding: 0 16px;
  animation: fadeInBackground 1.5s ease-in-out;

  @media (min-width: 1440px) {
    padding: 0 64px;
  }

  @keyframes fadeInBackground {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const MainHead = styled.h1`
  color: var(--inputs);
  font-family: var(--font-family);
  font-weight: var(--bolt-font);
  font-size: 48px;
  line-height: 32px;
  margin-bottom: 16px;
  animation: ${fadeIn} 1.5s ease-in-out;

  @media (min-width: 1440px) {
    font-size: 48px;
    font-weight: 600;
  }
`;

export const SecHead = styled.h2`
  color: var(--inputs);
  font-family: var(--font-family);
  font-weight: var(--bolt-font);
  font-size: 24px;
  line-height: 32px;
  animation: ${slideUp} 2s ease-in-out;

  @media (min-width: 1440px) {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 40px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 200px;
  outline: none;
  background-color: var(--button);
  cursor: pointer;
  transition: background-color var(--transition-delay) var(--transition);
  color: var(--inputs);
  width: 100px;
  height: 35px;
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  animation: ${fadeIn} 2.5s ease-in-out;

  &:hover {
    background-color: var(--button-hover);
  }

  @media (min-width: 1440px) {
    padding: 16px 48px;
    width: 173px;
    height: 56px;
    font-size: 16px;
    font-weight: 500;
  }
`;
