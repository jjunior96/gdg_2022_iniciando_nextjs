/**
 * ...::: Line :::...
 *
 * Componente simples de estilização, apenas para exibir componentes em linha.
 *
 * @props
 * children: Qualquer tipo de elemento, seja um elemento HTML ou um componente React. (obrigatório)
 */

import * as S from './styles';

type LineProps = {
  children: React.ReactNode;
};

const Line = ({ children }: LineProps) => {
  return <S.Container>{children}</S.Container>;
};

export default Line;
