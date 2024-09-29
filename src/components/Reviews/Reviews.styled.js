import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 24px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1440px) {
    margin-top: 44px;
    margin-bottom: 80px;
    flex-direction: row;
    gap: 40px;
  }
`;
