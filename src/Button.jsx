// @flow
import React from 'react';
import { withTheme } from 'styled-components';
import { SubmitButton } from './Button.styled';

type Props = {
  onClick: (Object) => void,
  children: String,
  primary?: Boolean,
  common?: Boolean,
  secondary?: Boolean,
  fluid?: Boolean,
};

const Button = ({
  onClick,
  children,
  primary,
  common,
  fluid,
  secondary,
}: Props) => (
  <>
    <SubmitButton
      onClick={onClick}
      primary={primary}
      common={common}
      secondary={secondary}
      fluid={fluid}>
      {children}
    </SubmitButton>
  </>
);

export default withTheme(Button);
