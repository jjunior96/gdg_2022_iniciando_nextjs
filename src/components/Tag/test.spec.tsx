import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/__config__/helpers';

import theme from 'styles/theme';

import Tag from '.';

describe('<Tag />', () => {
  it('should render component by default', () => {
    const { container } = renderWithTheme(<Tag>Tag example</Tag>);

    const tagElement = screen.getByRole('textbox');
    const labelText = screen.getByText(/tag example/i);

    expect(tagElement).toBeInTheDocument();
    expect(tagElement).toHaveStyle({
      'border-color': theme.colors.info,
      color: theme.colors.info
    });

    expect(labelText).toBeInTheDocument();
    expect(labelText).toHaveStyle({
      color: theme.colors.info
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render component with color red', () => {
    renderWithTheme(<Tag color="red">Tag example</Tag>);

    const tagElement = screen.getByRole('textbox');
    const labelText = screen.getByText(/tag example/i);

    expect(tagElement).toHaveStyle({
      'border-color': theme.colors.red,
      color: theme.colors.red
    });

    expect(labelText).toHaveStyle({
      color: theme.colors.red
    });
  });

  it('should render component with color green', () => {
    renderWithTheme(<Tag color="green">Tag example</Tag>);

    const tagElement = screen.getByRole('textbox');
    const labelText = screen.getByText(/tag example/i);

    expect(tagElement).toHaveStyle({
      'border-color': theme.colors.green,
      color: theme.colors.green
    });

    expect(labelText).toHaveStyle({
      color: theme.colors.green
    });
  });
});
