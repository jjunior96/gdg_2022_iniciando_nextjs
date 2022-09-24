import { ToastMessageProps } from 'hooks/useToast/types';

import * as S from './styles';
import ToastContent from './ToastContent';

export type ToastProps = {
  messages: ToastMessageProps[];
};

const Toast = ({ messages }: ToastProps) => {
  return (
    <S.Container>
      {messages.map((item) => (
        <ToastContent
          key={item.id}
          id={item.id}
          title={item.title}
          type={item.type}
        />
      ))}
    </S.Container>
  );
};

export default Toast;
