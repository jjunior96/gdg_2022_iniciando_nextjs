import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/__config__/helpers';

import theme from 'styles/theme';

import Spinner from '.';

describe('<Spinner />', () => {
  it('should render the Spinner component', () => {
    const { container } = renderWithTheme(<Spinner data-testid="spinner" />);

    expect(screen.getByTestId('spinner')).toHaveStyle({
      width: theme.font.sizes.xlarge
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the Spinner with size small', () => {
    renderWithTheme(<Spinner size="small" />);

    expect(screen.getByTestId('spinner')).toHaveStyle({
      width: theme.font.sizes.small
    });
  });

  it('should render the Spinner with size large', () => {
    renderWithTheme(<Spinner size="large" />);

    expect(screen.getByTestId('spinner')).toHaveStyle({
      width: theme.font.sizes.huge
    });
  });
});
