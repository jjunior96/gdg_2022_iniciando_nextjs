/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from 'next/router';

import { fireEvent, screen, waitFor } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/__config__/helpers';

import ErrorFallback from '.';

jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: jest.fn()
}));

const handlePushToHome = jest.fn();

const errorMock = {
  message: 'something wrong'
};

describe('<ErrorFallback />', () => {
  it('should render component by default', () => {
    const { container } = renderWithTheme(<ErrorFallback error={errorMock} />);

    expect(
      screen.getByRole('heading', { name: /something went wrong/i })
    ).toBeInTheDocument();

    expect(screen.getByText(errorMock.message)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should to run function when passed', async () => {
    renderWithTheme(
      <ErrorFallback error={errorMock} resetErrorBoundary={handlePushToHome} />
    );

    fireEvent.click(screen.getByRole('button', { name: /try again/i }));

    await waitFor(() => {
      expect(handlePushToHome).toHaveBeenCalledTimes(1);
    });
  });

  it('should to run function internal when not passed other function', async () => {
    const mockRouter = {
      push: jest.fn()
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    renderWithTheme(<ErrorFallback error={errorMock} />);

    fireEvent.click(screen.getByRole('button', { name: /try again/i }));

    await waitFor(() => {
      expect(handlePushToHome).toHaveBeenCalledTimes(1);
    });
  });
});
