import styled from 'styled-components';
import theme from './styles/theme';

export const SubmitButton = styled.button`
  background-color: ${theme.colors.blue};
  padding: 7px 15px;
  color: #ffffff;
  font-size: 16px;
  text-decoration: none;
  border-radius: 5px;
  border: 2px solid ${theme.colors.blue};
  cursor: pointer;
  transition: ${theme.transition};

  &:hover,
  &:focus {
    color: #ffffff;
    background-color: ${theme.colors.blueHover};
    outline: unset;
    border-color: ${theme.colors.blueHover};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  svg {
    vertical-align: middle;
  }
`;
