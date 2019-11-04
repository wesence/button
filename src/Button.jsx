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
      fluid={fluid}
      onClick={onClick}
      primary={primary}
      secondary={secondary}
      link={link}>
      {children}
    </SubmitButton>
  </>
);

export default withTheme(Button);
