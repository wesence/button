import styled from 'styled-components';
import theme from './styles/theme';

const common = `
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

const inverted = `
  color: ${theme.colors.blue};
  background-color: #ffffff;
  border-color: #ffffff;

  &:hover,
  &:focus {
    color: ${theme.colors.blue};
    background-color: ${theme.colors.lightgrey};
    border-color: #ffffff;
  }
`;

export const SubmitButton = styled.button`
  ${common}
  ${({ invert }) => invert && inverted}
  ${({ unstyled }) => unstyled && UnstyledButton}
  ${({ fluid }) =>
    fluid &&
    `
    width: 100%;
  `}
`;

const UnstyledButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  line-height: 1;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
