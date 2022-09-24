import { useEffect, useState } from 'react';
import {
  FiAlertCircle as WarningIcon,
  FiCheckCircle as SuccessIcon
} from 'react-icons/fi';
import { RiCloseFill as CloseButton } from 'react-icons/ri';

import { useToast } from 'hooks/useToast';
import { ToastMessageProps } from 'hooks/useToast/types';

import * as S from './styles';

const ToastContent = ({ id, type, title }: ToastMessageProps) => {
  const [seconds, setSeconds] = useState(3000);
  const [pause, setPause] = useState(false);

  const { removeToast } = useToast();

  const icons = {
    success: <SuccessIcon size={20} />,
    warning: <WarningIcon size={20} />,
    error: <WarningIcon size={20} />
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!pause && seconds > 0) {
        setSeconds(seconds - 1000);
        removeToast(id);
      }
    }, seconds);

    return () => {
      clearTimeout(timer);
    };
  }, [id, pause, removeToast, seconds]);

  return (
    <S.Container
      key={id}
      type={type}
      layout
      initial={{ opacity: 0, y: -50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.5 }}
      onMouseOver={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
    >
      {icons[type!]}

      <p>{title}</p>

      <S.ButtonClose type="button" onClick={() => removeToast(id)}>
        <CloseButton size={17} />
      </S.ButtonClose>
    </S.Container>
  );
};

export default ToastContent;
