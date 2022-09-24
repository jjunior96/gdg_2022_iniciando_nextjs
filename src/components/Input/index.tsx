import { InputHTMLAttributes, useState, useCallback, forwardRef } from 'react';
import {
  AiOutlineEyeInvisible as NotVisibleIcon,
  AiOutlineEye as VisibleIcon
} from 'react-icons/ai';

import ErrorText from 'components/ErrorText';
import LabelInput, { LabelColorType } from 'components/LabelInput';

import * as S from './styles';

type Props = {
  label?: string;
  labelColor?: LabelColorType;
  isRequired?: boolean;
  error?: string;
  isDisabled?: boolean;
  positionIcon?: 'left' | 'right';
  hiddenInput?: boolean;
  icon?: React.ReactNode;
};

export type InputProps = InputHTMLAttributes<HTMLInputElement> & Props;

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    label,
    labelColor = 'black',
    name,
    isRequired = false,
    error,
    isDisabled = false,
    type = 'text',
    positionIcon = 'left',
    hiddenInput = false,
    icon: Icon,
    ...rest
  },
  ref
) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const typeVisible = isVisiblePassword ? 'text' : 'password';
  const typeChangePassword = type === 'password' ? typeVisible : type;

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleVisiblePassword = useCallback(() => {
    setIsVisiblePassword((oldState) => !oldState);
  }, []);

  return (
    <S.Container>
      <LabelInput
        htmlFor={label}
        isRequired={isRequired}
        isDisabled={isDisabled}
        labelColor={labelColor}
      >
        {label}
      </LabelInput>

      <S.IconContainer
        isFocused={isFocused}
        isErrored={!!error}
        isDisabled={isDisabled}
        positionIcon={positionIcon}
        hiddenInput={hiddenInput}
        data-testid="icon-container"
      >
        {Icon}
        <input
          {...rest}
          data-testid="input-element"
          name={name}
          type={typeChangePassword}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          disabled={isDisabled}
          ref={ref}
        />

        {type === 'password' && (
          <S.ButtonVisiblePassword
            type="button"
            onClick={handleVisiblePassword}
            aria-label="button-visible-password"
          >
            {isVisiblePassword ? (
              <VisibleIcon aria-label="is-visible" />
            ) : (
              <NotVisibleIcon aria-label="not-visible" />
            )}
          </S.ButtonVisiblePassword>
        )}
      </S.IconContainer>

      {error && <ErrorText>{error}</ErrorText>}
    </S.Container>
  );
};

export default forwardRef(Input);
