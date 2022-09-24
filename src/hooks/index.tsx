import { ToastProvider } from './useToast';

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  return <ToastProvider>{children}</ToastProvider>;
};

export default AppProvider;
