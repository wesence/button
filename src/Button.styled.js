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

export const SubmitButton = styled.button`
  display:inline-block;
  ${common}
  ${({ primary }) => primary && main}
  ${({ secondary }) => secondary && secondaries}
  ${({ link }) => link && UnstyledButton}
  ${({ fluid }) =>
    fluid &&
    `
    width: 100%;
  `}
`;

const UnstyledButton = `
  background: none;
  border: none;
  padding: 0.5rem;
  margin: 0;
  line-height: 1;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
