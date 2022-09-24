import { AiOutlineHeart as HeartIcon } from 'react-icons/ai';

import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/__config__/helpers';

import theme from 'styles/theme';

import Button from '.';

describe('<Button />', () => {
  it('should render a button default', () => {
    const { container } = renderWithTheme(<Button>Enter</Button>);

    expect(screen.getByText(/Enter/i)).toHaveStyle({
      height: '5.6rem',
      'background-color': theme.colors.green,
      color: theme.colors.white
    });

    expect(container).toMatchSnapshot();
  });

  it('should render a button with size small', () => {
    renderWithTheme(<Button size="small">Enter</Button>);

    expect(screen.getByText(/Enter/i)).toHaveStyle({
      height: '2.4rem'
    });
  });

  it('should render a button with size medium', () => {
    renderWithTheme(<Button size="medium">Enter</Button>);

    expect(screen.getByText(/Enter/i)).toHaveStyle({
      height: '3.2rem'
    });
  });

  it('should render a button with size large', () => {
    renderWithTheme(<Button size="large">Enter</Button>);

    expect(screen.getByText(/Enter/i)).toHaveStyle({
      height: '5.6rem'
    });
  });

  it('should render a button with color green', () => {
    renderWithTheme(<Button color="green">Enter</Button>);

    expect(screen.getByText(/Enter/i)).toHaveStyle({
      'background-color': theme.colors.green
    });
  });

  it('should render a button with color red', () => {
    renderWithTheme(<Button color="red">Enter</Button>);

    expect(screen.getByText(/Enter/i)).toHaveStyle({
      'background-color': theme.colors.red
    });
  });

  it('should render a minimal version', () => {
    renderWithTheme(<Button minimal>Enter</Button>);

    expect(screen.getByRole('button', { name: /Enter/i })).toHaveStyle({
      background: 'none',
      color: theme.colors.green
    });
  });

  it('should render a button as a link (<a/>)', () => {
    renderWithTheme(
      <Button color="red" as="a" href="/">
        Enter
      </Button>
    );

    expect(screen.getByRole('link', { name: /Enter/i })).toHaveAttribute(
      'href',
      '/'
    );
  });

  it('should render a spinner loading when isLoading passed', () => {
    renderWithTheme(<Button isLoading>Enter</Button>);

    expect(screen.getByRole('button')).toHaveStyle({
      background: theme.colors.gray_300,
      cursor: 'not-allowed'
    });

    // Verifica se o Spinner está aparecendo
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('should render without icon when not passed', () => {
    renderWithTheme(<Button>Enter</Button>);

    const iconComponent = screen.queryByTestId(/empty-icon/);

    expect(iconComponent).not.toBeInTheDocument();
  });

  it('should render with icon when passed', () => {
    renderWithTheme(
      <Button icon={<HeartIcon data-testid="button-icon" />}>Enter</Button>
    );

    const iconComponent = screen.queryByTestId(/button-icon/i);

    expect(iconComponent).toBeInTheDocument();
  });

  it('should render with outline variant when passed', () => {
    renderWithTheme(<Button variant="outline">Enter</Button>);

    const buttonComponent = screen.getByText(/Enter/i);

    expect(buttonComponent).toHaveStyle({
      'background-color': 'transparent',
      color: theme.colors.primary,
      border: `2px solid ${theme.colors.primary}`
    });
  });
});
