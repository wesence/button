// @flow
import React from 'react';
import { withTheme } from 'styled-components';
import { SubmitButton } from './Button.styled';

type Props = {
  onClick: (Object) => void,
  children: String,
  primary?: Boolean,
  unstyled?: Boolean,
};

const Button = ({ onClick, children, primary, unstyled }: Props) => (
  <>
    <SubmitButton onClick={onClick} primary={primary} unstyled={unstyled}>
      {children}
    </SubmitButton>
  </>
);

export default withTheme(Button);
