import Toast from 'components/Toast';

import { renderWithTheme } from 'utils/tests/__config__/helpers';

import ToastContext from '.';
import { ToastDataContext } from './types';

const message = [
  {
    id: '1',
    title: 'Test',
    type: undefined
  }
];

const valuesMock = {
  addToast: jest.fn(),
  removeToast: jest.fn()
};

describe('Toast context', () => {
  it('should show error message', () => {
    expect(() =>
      renderWithTheme(
        <ToastContext.Provider value={null as unknown as ToastDataContext}>
          <Toast messages={message} />
        </ToastContext.Provider>
      )
    ).toThrow('useToast must be used within a ToastProvider');
  });

  it('should render context correctly', () => {
    expect(() =>
      renderWithTheme(
        <ToastContext.Provider value={valuesMock}>
          <Toast messages={message} />
        </ToastContext.Provider>
      )
    ).not.toThrow('useToast must be used within a ToastProvider');
  });
});
