// @flow
import React from 'react';
import { withTheme } from 'styled-components';
// import ButtonIcon from './ButtonIcon';
import { SubmitButton, UnstyledButton } from './Button.styled';

type Props = {
  type: String,
  text: String,
  children?: React.node,
  to?: String,
  fluid?: Boolean,
  styled?: Boolean,
  invert?: Boolean,
  theme: Object,
  icon: String,
};

const Button = ({
  type,
  text,
  children,
  to,
  fluid,
  icon,
  styled,
  invert,
  theme,
  ...rest
}: Props) => (
  <>
    {type === 'submit' && (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <SubmitButton type="submit" fluid={fluid} invert={invert} {...rest}>
        {text}
      </SubmitButton>
    )}
    {type === 'button' &&
      (styled ? (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <SubmitButton type="button" fluid={fluid} invert={invert} {...rest}>
          {children}
        </SubmitButton>
      ) : (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <UnstyledButton type="button" fluid={fluid} {...rest}>
          {children}
        </UnstyledButton>
      ))}
  </>
);

export default withTheme(Button);
