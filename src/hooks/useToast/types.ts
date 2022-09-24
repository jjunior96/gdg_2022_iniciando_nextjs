export type Props = {
  type?: 'success' | 'warning' | 'error';
  title: string;
};

export type ToastMessageProps = {
  id: string;
} & Props;

export type ToastDataContext = {
  addToast(message: Props): void;
  removeToast(id: string): void;
};

export type ToastProviderProps = {
  children: React.ReactNode;
};
