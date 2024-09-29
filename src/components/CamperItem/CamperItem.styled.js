import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  height: 100%;
  width: 100%;
  text-decoration: none;
  cursor: default; 
  overflow: hidden;

  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 24px;
  }
`;

export const ContentSide = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1; 
  justify-content: space-between;
  overflow: hidden; 
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  flex-shrink: 0;

  @media (min-width: 1440px) {
    width: 292px;
  }
`;

export const MainInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const MainInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media (min-width: 1440px) {
    gap: 12px;
  }
`;

export const Price = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: var(--main);

  @media (min-width: 1440px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const Name = styled.h2`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: var(--main);

  @media (min-width: 1440px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const SecInfo = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`;

export const SecInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const Text = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: var(--main);

  @media (min-width: 1440px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Description = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: var(--text);
  margin-top: 4px;

  @media (min-width: 1440px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 8px;
  overflow: hidden; 
`;

export const Option = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 10px;
  gap: 4px;
  border-radius: 100px;
  background-color: var(--badges);
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.05em;
  color: var(--main);

  @media (min-width: 1440px) {
    padding: 8px 16px;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const LinkButton = styled.a`
  text-decoration: none;
`;

export const Btn = styled.span`
  width: 140px;
  height: 48px;
  padding: 12px 28px;
  border-radius: 200px;
  background-color: var(--button);
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer; 
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.005em;
  color: var(--white);
  margin-top: 8px;
  transition: background-color var(--transition-delay) var(--transition);

  &:hover {
    background-color: var(--button-hover);
  }

  @media (min-width: 1440px) {
    width: 166px;
    height: 56px;
    padding: 16px 40px;
    font-size: 16px;
    line-height: 24px;
    margin-top: 12px;
  }
`;

export const IconFav = styled.svg`
  width: 16px;
  height: 16px;
  cursor: pointer;

  @media (min-width: 1440px) {
    width: 26px;
    height: 24px;
  }
`;

export const Icon = styled.svg`
  width: 16px;
  height: 16px;
`;
