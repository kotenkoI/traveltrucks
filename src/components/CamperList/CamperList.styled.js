// CampList.styled.js
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;

  @media (min-width: 1440px) {
    gap: 32px;
  }
`;

export const Item = styled.li`
  padding: 16px;
  border: 1px solid var(--gray-light);
  border-radius: 20px;
  transition: border-color var(--transition-delay) var(--transition);

  &:hover {
    border-color: var(--gray);
    cursor: pointer;
  }

  @media (min-width: 1440px) {
    padding: 24px;
  }
`;

export const LoadMoreBtn = styled.button`
  display: block;
  margin: 32px auto;
  padding: 12px 28px;
  background-color: var(--white);
  border: 1px solid var(--gray-light);
  color: var(--main);
  border-radius: 200px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.005em;
  transition: border-color var(--transition-delay) var(--transition);

  &:hover {
    border-color: var(--button-hover);
  }

  @media (min-width: 1440px) {
    margin: 40px auto;
    padding: 16px 32px;
    font-size: 16px;
    line-height: 24px;
  }
`;
