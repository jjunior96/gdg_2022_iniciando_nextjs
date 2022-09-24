import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

import Spinner from 'components/Spinner';

import * as S from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonVariantsProps = 'outline';

type Props = {
  size?: 'small' | 'medium' | 'large';
  color?: 'green' | 'red';
  children: React.ReactNode;
  minimal?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  as?: React.ElementType;
  variant?: ButtonVariantsProps;
};

export type ButtonProps = ButtonTypes & Props;

const Button = ({
  children,
  size = 'large',
  color = 'green',
  minimal = false,
  isLoading = false,
  disabled = false,
  variant,
  icon,
  ...rest
}: ButtonProps) => {
  return (
    <S.Container
      size={size}
      color={color}
      minimal={minimal}
      variant={variant}
      disabled={disabled || isLoading}
      {...rest}
    >
      {!!icon && icon}
      {isLoading ? <Spinner size="large" /> : children}
    </S.Container>
  );
};

export default Button;
