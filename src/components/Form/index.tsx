import { FormHTMLAttributes } from 'react';

import * as S from './styles';

export type FormProps = {
  children: React.ReactNode;
} & FormHTMLAttributes<HTMLFormElement>;

const Form = ({ children, onSubmit }: FormProps) => {
  return (
    <S.Container onSubmit={onSubmit}>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};

export default Form;
