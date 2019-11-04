// @flow
import React from 'react';
import { withTheme } from 'styled-components';
import { SubmitButton } from './Button.styled';

type Props = {
  onClick: (Object) => void,
  children: String,
  primary?: Boolean,
  secondary?: Boolean,
  fluid?: Boolean,
  link?: Boolean,
  marginBottom?: String,
  marginTop?: String,
};

const Button = ({
  onClick,
  children,
  primary,
  fluid,
  link,
  secondary,
  marginBottom,
  marginTop,
}: Props) => (
  <>
    <SubmitButton
      secondary={secondary}
      fluid={fluid}
      onClick={onClick}
      primary={primary}
      link={link}>
      {children}
    </SubmitButton>
  </>
);

export default withTheme(Button);
