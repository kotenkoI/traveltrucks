
import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 631px;

  @media (min-width: 1400px) {
    gap: 44px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 1440px) {
    gap: 16px;
  }
`;

export const MainInfo = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  @media (min-width: 1440px) {
    gap: 16px;
  }
`;

export const Avatar = styled.span`
  width: 32px;
  height: 32px;
  border-radius: 60px;
  background-color: var(--badges);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: var(--button);

  @media (min-width: 1440px) {
    width: 60px;
    height: 60px;
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
  }
`;

export const NameRating = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  color: var(--main);

  @media (min-width: 1440px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Stars = styled.span`
  display: flex;
  margin-top: 2px;
  gap: 2px;

  @media (min-width: 1440px) {
    margin-top: 4px;
    gap: 4px;
  }
`;

export const Icon = styled.svg`
  width: 12px;
  height: 12px;
`;

export const Comment = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: var(--text);

  @media (min-width: 1440px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
