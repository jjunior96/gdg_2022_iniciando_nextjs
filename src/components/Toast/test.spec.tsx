import { screen } from '@testing-library/react';
import ToastContext from 'hooks/useToast';
import { ToastMessageProps } from 'hooks/useToast/types';

import { renderWithTheme } from 'utils/tests/__config__/helpers';

import theme from 'styles/theme';

import Toast from '.';

const valuesMock = {
  addToast: jest.fn(),
  removeToast: jest.fn()
};

describe('<Toast />', () => {
  it('should render the Toast component', () => {
    const messages: ToastMessageProps[] = [
      {
        id: '1',
        type: 'success',
        title: 'Toast'
      }
    ];

    const { container } = renderWithTheme(
      <ToastContext.Provider value={valuesMock}>
        <Toast messages={messages} />;
      </ToastContext.Provider>
    );

    expect(screen.getByText(/toast/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the when warning passed', () => {
    const messages: ToastMessageProps[] = [
      {
        id: '1',
        type: 'warning',
        title: 'Toast'
      }
    ];

    renderWithTheme(<Toast messages={messages} />);

    expect(screen.getByText(/toast/i).parentElement).toHaveStyle({
      'background-color': theme.colors.yellow_300
    });
  });

  it('should render the when error passed', () => {
    const messages: ToastMessageProps[] = [
      {
        id: '1',
        type: 'error',
        title: 'Toast'
      }
    ];

    renderWithTheme(<Toast messages={messages} />);

    expect(screen.getByText(/toast/i).parentElement).toHaveStyle({
      'background-color': theme.colors.red
    });
  });

  // it('should remove when user click on close button', async () => {
  //   const removeToast = jest.fn();

  //   const messages: ToastMessageProps[] = [
  //     {
  //       id: '1',
  //       type: 'error',
  //       title: 'Toast'
  //     }
  //   ];

  //   renderWithTheme(<Toast messages={messages} />);

  //   // Não deve chamar a funcao removeToast
  //   expect(removeToast).not.toHaveBeenCalled();

  //   const closeButton = screen.getByRole('button');

  //   fireEvent.click(closeButton);

  //   await waitFor(() => {
  //     expect(removeToast).toHaveBeenCalledTimes(1);
  //   });
  // });
});
