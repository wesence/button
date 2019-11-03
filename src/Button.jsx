// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { withTheme } from 'styled-components';
import { SubmitButton } from './Button.styled';

type Props = {
  onClick: (Object) => void,
  children: String,
  to: String,
};

const Button = ({ onClick, children, to }: Props) => (
  <>
    <Link to={to}>
      <SubmitButton onClick={onClick}>{children}</SubmitButton>
    </Link>
  </>
);

export default withTheme(Button);
