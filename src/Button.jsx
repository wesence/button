// @flow
import React from 'react';
import { SubmitButton } from './Button.styled';
import theme from './styles/theme';

type Props = {
  onClick: (Object) => void,
  children: String,
  primary?: Boolean,
  secondary?: Boolean,
  fluid?: Boolean,
  link?: Boolean,
};

const Button = ({
  onClick,
  children,
  primary,
  fluid,
  link,
  secondary,
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
