import styled from 'styled-components';
import ReactDatePicker from 'react-datepicker';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--gray-light);
  padding: 24px 28px;
  max-width: 631px;
  justify-content: space-between;
  border-radius: 10px;

  @media (min-width: 1440px) {
    padding: 44px 57px;
    width: 641px;
  }
`;

export const HeadInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 16px;

  @media (min-width: 1440px) {
    margin-bottom: 24px;
  }
`;

export const MainText = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: var(--main);

  @media (min-width: 1440px) {
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
  }
`;

export const SecondaryText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: var(--gray);

  @media (min-width: 1440px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Input = styled.input`
  padding: 14px;
  border-radius: 12px;
  background-color: var(--inputs);
  outline: transparent;
  border: none;
  width: 100%;
  margin-bottom: 10px;

  &::placeholder {
    font-size: 16px;
    color: var(--gray);
  }

  @media (min-width: 1440px) {
    padding: 18px;
    margin-bottom: 14px;
  }
`;


export const StyledDatePicker = styled(ReactDatePicker)`
  padding: 14px;
  border-radius: 12px;
  background-color: var(--inputs);
  outline: transparent;
  border: none;
  width: 100%;
  margin-bottom: 10px;

  &::placeholder {
    font-size: 16px;
    color: var(--gray);
  }

  @media (min-width: 1440px) {
    padding: 18px;
    margin-bottom: 14px;
  }
`;

export const Textarea = styled.textarea`
  padding: 14px;
  border-radius: 12px;
  background-color: var(--inputs);
  outline: transparent;
  border: none;
  resize: none;
  width: 100%;
  margin-bottom: 10px;

  &::placeholder {
    font-size: 16px;
    color: var(--gray);
  }

  @media (min-width: 1440px) {
    padding: 18px;
    margin-bottom: 14px;
  }
`;

export const DatePickerWrapper = styled.div`
  cursor: pointer;
  width: 100%;

  > div {
    width: 100%;
  }
`;

export const SubmitButton = styled.button`
  width: 140px;
  height: 48px;
  padding: 12px 28px;
  border: none;
  border-radius: 200px;
  background-color: var(--button);
  text-align: center;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: var(--white);
  transition: background-color var(--transition-delay) var(--transition);

  &:hover {
    background-color: var(--button-hover);
  }

  @media (min-width: 1440px) {
    width: 166px;
    height: 56px;
    padding: 16px 63px;
    font-size: 16px;
    line-height: 16px;
  }
`;

export const ErrorText = styled.div`
  color: var(--button);
`;
