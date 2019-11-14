import styled from 'styled-components';

const main = (props) => `
  background-color: ${props.theme.colors.btnPrimary};
  padding: 7px 15px;
  color: #ffffff;
  font-size: 16px;
  text-decoration: none;
  border-radius: 5px;
  border: 2px solid ${props.theme.colors.btnPrimary};
  cursor: pointer;
  transition:  ${props.theme.transition};

  &:hover,
  &:focus {
    color: #ffffff;
    background-color: ${props.theme.colors.btnPrimaryHover};
    outline: unset;
    border-color: ${props.theme.colors.btnPrimaryHover};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  svg {
    vertical-align: middle;
  }
`;

const secondaries = (props) => `
    background-color: ${props.theme.colors.btnSecondary};
    padding: 0.4375rem 0.9375rem;
    color: #ffffff;
    font-size: 1rem;
    text-decoration: none;
    border-radius: 0.3125rem;
    border: 0.125rem solid ${props.theme.colors.btnSecondary};
    cursor: pointer;
    transition:  ${props.theme.transition};

    &:hover,
    &:focus {
      color: #ffffff;
      background-color: ${props.theme.colors.btnSecondaryLight};
      outline: unset;
      border-color: ${props.theme.colors.btnSecondaryLight};
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    svg {
      vertical-align: middle;
    }
`;

const common = (props) => `
  color: ${props.theme.colors.btnPrimary};
  background-color: #ffffff;
  padding: 0.4375rem 0.9375rem;
  text-decoration: none;
  font-size: 1rem;
  border-radius: 0.3125rem;
  border: 0.125rem solid #ffffff;
  cursor: pointer;
  transition:  ${props.theme.transition};

  &:hover,
  &:focus {
    color:${props.theme.colors.btnPrimary};
    background-color:${props.theme.colors.textSecondaryLight};
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
  background-color: #ffffff;
  border: none;
  padding: 0.4375rem 0.9375rem;
  color:#000000;
  margin: 0;
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;

  &:hover,
  &:focus {
    color: black;
    background-color: #ffffff;
    border:none;
    outline:none;
  }
`;

export const SubmitButton = styled.button`
  ${common}
  ${({ primary, ...props }) => primary && main(props)}
  ${({ secondary, ...props }) => secondary && secondaries(props)}
  ${({ link }) => link && UnstyledButton}
  display:inline-block;
  ${({ fluid }) =>
    fluid &&
    `
    width: 100%;
  `}
`;
