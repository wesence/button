import styled from 'styled-components';
import theme from './styles/theme';

const main = `
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

const secondaries = `
    background-color: ${theme.colors.turquoise};
    padding: 0.4375rem 0.9375rem;
    color: #ffffff;
    font-size: 1rem;
    text-decoration: none;
    border-radius: 0.3125rem;
    border: 0.125rem solid ${theme.colors.turquoise};
    cursor: pointer;
    transition: ${theme.transition};

    &:hover,
    &:focus {
      color: #ffffff;
      background-color: ${theme.colors.mediumTurquoise};
      outline: unset;
      border-color: ${theme.colors.mediumTurquoise};
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    svg {
      vertical-align: middle;
    }
`;

const common = `
  color: ${theme.colors.blue};
  background-color: #ffffff;
  padding: 0.4375rem 0.9375rem;
  text-decoration: none;
  font-size: 1rem;
  border-radius: 0.3125rem;
  border: 0.125rem solid #ffffff;
  cursor: pointer;
  transition: ${theme.transition};

  &:hover,
  &:focus {
    color: ${theme.colors.blue};
    background-color: ${theme.colors.lightgrey};
    border-color: #ffffff;
    outline:unset
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  svg {
    vertical-align: middle;
  }
`;

const UnstyledButton = `
  background: none;
  border: none;
  padding: 0.4375rem 0.9375rem;
  margin: 0;
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  ${common}
  ${({ primary }) => primary && main}
  ${({ secondary }) => secondary && secondaries}
  ${({ link }) => link && UnstyledButton}
  display:inline-block;
  ${({ fluid }) =>
    fluid &&
    `
    width: 100%;
  `}
`;
