import { fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithTheme } from 'utils/tests/__config__/helpers';

import theme from 'styles/theme';

import Input from '.';

describe('<Input />', () => {
  it('should render the Input component', () => {
    const { container } = renderWithTheme(
      <Input name="Name" aria-label="name-input" />
    );

    expect(
      screen.getByRole('textbox', { name: /name-input/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the Input component with label', () => {
    renderWithTheme(<Input label="Name" />);

    expect(screen.getByText(/name/i)).toHaveStyle({
      'font-size': theme.font.sizes.xxsmall,
      color: theme.colors.black
    });
  });

  it('should render the Input component with labelColor', () => {
    renderWithTheme(<Input label="Name" labelColor="white" />);

    expect(screen.getByText(/name/i)).toHaveStyle({
      color: theme.colors.white
    });
  });

  it('should render the Input component when is required', () => {
    renderWithTheme(<Input label="Name" isRequired />);

    // Quando `isRequired` é passado, é exibido um span com "*" para
    // simbolizar que o campo é obrigatório
    expect(screen.getByText(/\*/)).toHaveStyle({
      display: 'inline',
      color: theme.colors.error
    });
  });

  it('should render the Input component when error is passed', () => {
    renderWithTheme(<Input label="Name" error="Insert a name valid" />);

    expect(screen.getByText(/Insert a name valid/i)).toBeInTheDocument();
  });

  it('should to show icon (visible or notVisible) when input type password', () => {
    renderWithTheme(
      <Input label="Password" name="password-user" type="password" />
    );

    const inputElement = screen.getByTestId('input-element');

    // Botao de alterar visibilidade da senha
    const buttonSetVisiblePassword = screen.getByLabelText(
      /button-visible-password/
    );

    // Deve exibir o icon "NotIsVisible"
    expect(buttonSetVisiblePassword).toBeInTheDocument();

    const iconNotVisible = screen.getByLabelText(/not-visible/);

    expect(iconNotVisible).toBeInTheDocument();

    // O type do input deve ser 'password' por default
    expect(inputElement).toHaveAttribute('type', 'password');

    // Clique no botao para visualizar a senha
    userEvent.click(buttonSetVisiblePassword);

    const iconVisible = screen.getByLabelText(/is-visible/);

    // Deve exibir o icon "IsVisible"
    expect(iconVisible).toBeInTheDocument();
    expect(iconNotVisible).not.toBeInTheDocument();

    // O type do input deve ser 'text'
    expect(inputElement).toHaveAttribute('type', 'text');
  });

  it('should is not accessible by tab when disabled', () => {
    renderWithTheme(<Input label="Name" isDisabled />);

    const input = screen.getByRole('textbox');
    expect(document.body).toHaveFocus();

    userEvent.tab();

    expect(input).not.toHaveFocus();
  });

  it('should change border color input when hover', async () => {
    renderWithTheme(<Input label="Name" isDisabled />);

    const input = screen.getByTestId('icon-container');

    userEvent.hover(input);

    waitFor(() => {
      expect(input).toHaveStyle({
        border: `2px solid ${theme.colors.black}`
      });
    });

    userEvent.unhover(input);

    expect(input).toHaveStyle({
      border: `2px solid ${theme.colors.gray_300}`
    });
  });

  it('should change focus and blur input', async () => {
    renderWithTheme(<Input label="Name" isDisabled />);

    const input = screen.getByRole('textbox');

    fireEvent.focus(input);

    const iconContainer = screen.getByTestId('icon-container');

    waitFor(() => {
      expect(iconContainer).toHaveStyle({
        border: `2px solid ${theme.colors.green}`
      });
      expect(iconContainer).toHaveFocus();
    });

    fireEvent.blur(input);

    expect(iconContainer).toHaveStyle({
      border: `2px solid ${theme.colors.gray_300}`
    });
    expect(iconContainer).not.toHaveFocus();
  });
});
