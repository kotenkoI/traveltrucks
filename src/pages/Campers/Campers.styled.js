import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin-top: 32px;

  @media (min-width: 1440px) {
    margin-top: 48px;
  }
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 28px;
`;

export const Name = styled.h2`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: var(--main);
  margin-bottom: 8px;

  @media (min-width: 1440px) {
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
  }
`;

export const Price = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: var(--main);

  @media (min-width: 1440px) {
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
  }
`;

export const SecInfo = styled.div`
  display: flex;
  margin-bottom: 12px;
  gap: 12px;

  @media (min-width: 1440px) {
    margin-bottom: 16px;
    gap: 16px;
  }
`;

export const SecInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const PriceText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  text-decoration: underline;
  color: var(--main);

  @media (min-width: 1440px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const LocationText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: var(--main);

  @media (min-width: 1440px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Gallery = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  margin-bottom: 16px;

  @media (min-width: 1440px) {
    gap: 48px;
    margin-bottom: 28px;
    flex-direction: row;
  }
`;

export const GalleryItem = styled.li`
  img {
    border-radius: 10px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: var(--text);
  margin-bottom: 30px;

  @media (min-width: 1440px) {
    line-height: 24px;
    margin-bottom: 60px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
  border-bottom: 1px solid var(--gray-light);
  padding-bottom: 16px;

  @media (min-width: 1440px) {
    gap: 40px;
    padding-bottom: 24px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;
  color: var(--main);
  position: relative;

  &::after {
    content: '';
    left: 0;
    position: absolute;
    bottom: -20px;
    width: 65px;
    height: 0;
    border: 1px solid #E44848;
    opacity: 0;
    transition: opacity var(--transition-delay) var(--transition);

    @media (min-width: 1440px) {
      border: 2px solid #E44848;
      bottom: -28px;
      width: 85px;
    }
  }

  &:hover::after,
  &:focus::after,
  &:active::after {
    opacity: 1;
  }

  @media (min-width: 1440px) {
    font-size: 20px;
    line-height: 24px;
  }
`;
