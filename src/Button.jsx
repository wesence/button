// @flow
import React from 'react';
import { withTheme } from 'styled-components';
import { SubmitButton } from './Button.styled';

type Props = {
  onClick: (Object) => void,
  children: String,
  common?: Boolean,
  invert?: Boolean,
  fluid?: Boolean,
  unstyled?: Boolean,
};

const Button = ({
  onClick,
  children,
  invert,
  common,
  fluid,
  unstyled,
}: Props) => (
  <>
    <SubmitButton
      onClick={onClick}
      common={common}
      invert={invert}
      unstyled={unstyled}
      fluid={fluid}>
      {children}
    </SubmitButton>
  </>
);

export default withTheme(Button);
