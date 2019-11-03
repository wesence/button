import styled from 'styled-components';
import theme from './styles/theme';

export const SubmitButton = styled.button`
  background-color: ${theme.colors.white};
  padding: 7px 15px;
  color: #000;
  font-size: 16px;
  text-decoration: none;
  border-radius: 5px;
  border: 2px solid ${theme.colors.white};
  cursor: pointer;
  transition: ${theme.transition};

  &:hover,
  &:focus {
    color: #1976d2;
    background-color: ${theme.colors.lightgrey};
    outline: unset;
    border-color: ${theme.colors.white};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  svg {
    vertical-align: middle;
  }
`;
