import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const IconMap = styled.svg`
  width: 16px;
  height: 16px;

  @media (min-width: 1440px) {
    width: 20px;
    height: 20px;
  }
`;

export const LocationLabel = styled.label`
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  color: var(--gray);
  margin-bottom: 6px;

  @media (min-width: 1440px) {
    margin-bottom: 8px;
  }
`;

export const LocationInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  outline: transparent;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: 16px;
  font-weight: 400;
  line-height: 12px;
  position: relative;
  width: 100%;
  height: 40px;
  padding: 0;
  background-color: var(--inputs);
  border-radius: 8px;
  padding-left: 16px;
  margin-bottom: 24px;

  @media (min-width: 1440px) {
    gap: 8px;
    line-height: 24px;
    width: 360px;
    height: 56px;
    padding-left: 26px;
    margin-bottom: 40px;
  }
`;

export const SpanFilter = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: var(--text);
  margin-bottom: 24px;

  @media (min-width: 1440px) {
    line-height: 24px;
    margin-bottom: 32px;
  }
`;

export const LabelEquipment = styled.label`
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  color: var(--main);
  margin-bottom: 36px;
  position: relative;

  &::after {
    content: '';
    width: 100%;
    height: 0px;
    position: absolute;
    border: 1px solid #DADDE1;
    bottom: -24px;
    left: 0;

    @media (min-width: 1440px) {
      width: 360px;
    }
  }

  @media (min-width: 1440px) {
    line-height: 24px;
    margin-bottom: 48px;
  }
`;

export const CheckboxGroup = styled.div`
  margin-bottom: 36px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 8px;
  column-gap: 12px;

  @media (min-width: 1440px) {
    margin-bottom: 32px;
    width: 360px;
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
`;

export const Checkbox = styled.input`
  display: none;
`;

export const CustomCheckbox = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background-color: var(--white);
  border: 1px solid var(--gray-light);
  border-radius: 12px;
  cursor: pointer;
  transition: border-color var(--transition-delay) var(--transition);
  width: 96px;
  height: 72px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.005em;
  text-align: center;

  &:hover {
    border-color: var(--button);
  }

  ${Checkbox}:checked + & {
    border-color: var(--button);
  }

  @media (min-width: 1440px) {
    gap: 8px;
    width: 112px;
    height: 96px;
  }
`;

export const SubmitButton = styled.button`
  display: block;
  font-family: Inter;
  padding: 16px 56px;
  border: none;
  border-radius: 200px;
  outline: none;
  background-color: var(--button);
  cursor: pointer;
  transition: background-color var(--transition-delay) var(--transition);
  color: var(--inputs);
  width: 166px;
  height: 56px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.005em;

  &:hover {
    background-color: var(--button-hover);
  }

  @media (min-width: 1440px) {
    padding: 16px 56px;
    width: 166px;
    height: 56px;
    margin: 0;
  }
`;
