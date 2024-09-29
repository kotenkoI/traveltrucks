import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  justify-content: space-between;
  gap: 32px;

  @media (min-width: 1440px) {
    margin-top: 48px;
    flex-direction: row;
    gap: 64px;
  }
`;
