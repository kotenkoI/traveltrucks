import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  background-color: var(--inputs);
  gap: 50px;
  max-width: 631px;

  @media (min-width: 1440px) {
    padding: 44px 52px;
    gap: 100px;
  }
`;

export const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Option = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  gap: 4px;
  border-radius: 100px;
  background: #e5e7e9;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.05em;
  color: var(--main);

  @media (min-width: 1440px) {
    padding: 12px 18px;
    font-size: 16px;
    line-height: 24px;
    gap: 8px;
  }
`;

export const Details = styled.div`
  max-width: 527px;
`;

export const LabelEquipment = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: var(--main);
  margin-bottom: 32px;
  position: relative;

  &::after {
    content: '';
    width: 100%;
    height: 0;
    position: absolute;
    border: 1px solid #dadde1;
    bottom: -24px;
    left: 0;

    @media (min-width: 1440px) {
      width: 527px;
    }
  }

  @media (min-width: 1440px) {
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 48px;
  }
`;

export const DetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;

  @media (min-width: 1440px) {
    gap: 16px;
  }
`;

export const OptionRow = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const OptionName = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  color: var(--main);

  @media (min-width: 1440px) {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }
`;

export const Icon = styled.svg`
  width: 16px;
  height: 16px;
`;
