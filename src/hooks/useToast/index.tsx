import { createContext, useCallback, useContext, useState } from 'react';

import { v4 } from 'uuid';

import Toast from 'components/Toast';

import {
  Props,
  ToastDataContext,
  ToastMessageProps,
  ToastProviderProps
} from './types';

const ToastContext = createContext<ToastDataContext>({} as ToastDataContext);

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [messages, setMessages] = useState<ToastMessageProps[]>([]);

  const addToast = useCallback((message: Props) => {
    const id = v4();

    const toast = {
      id,
      ...message
    };

    setMessages((oldMessages) => [...oldMessages, toast]);
  }, []);

  const removeToast = useCallback(
    (id: string) => {
      const newMessages = messages.filter((item) => item.id !== id);

      setMessages(newMessages);
    },
    [messages]
  );

  return (
    <ToastContext.Provider
      value={{
        addToast,
        removeToast
      }}
    >
      {children}
      <Toast messages={messages} />
    </ToastContext.Provider>
  );
};

export default ToastContext;

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
};
