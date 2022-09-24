import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/__config__/helpers';

import theme from 'styles/theme';

import ErrorText from '.';

describe('<ErrorText />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<ErrorText>Error Text</ErrorText>);

    const textElement = screen.getByText(/error text/i);

    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveStyle({
      color: theme.colors.red,
      'font-size': theme.font.sizes.xsmall
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
