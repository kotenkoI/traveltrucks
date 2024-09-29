import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 8px 16px;
  background-color: var(--badges);
  display: flex;
  width: 100%;
  position: relative;
  justify-content: space-between;
  align-items: center;
  z-index: 999;

  @media (min-width: 1440px) {
    padding: 28px 64px;
  }
`;
