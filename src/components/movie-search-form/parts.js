import styled from 'styled-components';
import { Breakpoints } from '../../constants/constants';

export const FormWrapper = styled.form`
  padding: 16px;
  margin: 0 auto;
  text-align: center;
  @media (min-width: ${Breakpoints.sm}) {
    width: 80%;
  }
  @media (min-width: ${Breakpoints.md}) {
    width: 50%;
  }
  @media (min-width: ${Breakpoints.lg}) {
    width: 30%;
  }
`;

export const SearchInput = styled.input`
  border: 1px solid #666;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  padding: 4px 8px;
  margin-bottom: 8px;
  width: 100%;
`;

export const RadioLabelWrapper = styled.div`
  display: block;
  padding-bottom: 4px;
`;

export const RadioLabel = styled.label`
  padding-right: 16px;
`;

export const SubmitButton = styled.button`
  background-color: aquamarine;
  height: 40px;
  width: 100%;
  border: 1px solid green;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`;