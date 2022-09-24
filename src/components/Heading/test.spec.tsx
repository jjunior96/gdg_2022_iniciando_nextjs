import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/__config__/helpers';

import Heading from '.';

describe('<Heading />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Heading>Text Example</Heading>);

    expect(
      screen.getByRole('heading', { name: /Text Example/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Text Example/i })).toHaveStyle({
      'font-size': '3.2rem'
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the heading with small size', () => {
    renderWithTheme(<Heading size="small">Text Example</Heading>);

    expect(screen.getByRole('heading', { name: /Text Example/i })).toHaveStyle({
      'font-size': '1.6rem'
    });
  });

  it('should render the heading with medium size', () => {
    renderWithTheme(<Heading size="medium">Text Example</Heading>);

    expect(screen.getByRole('heading', { name: /Text Example/i })).toHaveStyle({
      'font-size': '2rem'
    });
  });

  it('should render the heading with large size', () => {
    renderWithTheme(<Heading size="large">Text Example</Heading>);

    expect(screen.getByRole('heading', { name: /Text Example/i })).toHaveStyle({
      'font-size': '3.2rem'
    });
  });

  it('should render the heading with lineBottom prop', () => {
    renderWithTheme(
      <Heading size="large" lineBottom>
        Text Example
      </Heading>
    );

    expect(screen.getByRole('heading', { name: /Text Example/i })).toHaveStyle({
      position: 'relative',
      'margin-bottom': '3.2rem'
    });
  });
});
