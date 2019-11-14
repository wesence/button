// @flow
import React from 'react';
import { SubmitButton } from './Button.styled';

type Props = {
  onClick: (Object) => void,
  children: String,
  primary?: Boolean,
  secondary?: Boolean,
  fluid?: Boolean,
  link?: Boolean,
  theme?: Object,
};

const Button = ({
  onClick,
  children,
  primary,
  fluid,
  link,
  secondary,
  theme,
}: Props) => (
  <>
    <SubmitButton
      secondary={secondary}
      theme={theme}
      onClick={onClick}
      fluid={fluid}
      primary={primary}
      link={link}>
      {children}
    </SubmitButton>
  </>
);

export default Button;
