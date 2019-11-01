// @flow
import React from 'react';
import { withTheme } from 'styled-components';
import { SubmitButton } from './Button.styled';

type Props = {
  onClick: (Object) => void,
  children: String,
};

const Button = ({ onClick, children }: Props) => (
  <>
    <SubmitButton onClick={onClick}>{children}</SubmitButton>
  </>
);

export default withTheme(Button);
