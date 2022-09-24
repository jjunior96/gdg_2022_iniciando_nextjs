import { fireEvent, screen, waitFor } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/__config__/helpers';

import Form from '.';

const onSubmit = jest.fn((e) => e.preventDefault());

describe('<Form />', () => {
  it('should render the Form', () => {
    const { container } = renderWithTheme(
      <Form aria-label="User info" name="userinfo">
        <input aria-label="username" placeholder="Username" />
      </Form>
    );

    expect(
      screen.getByRole('textbox', { name: /username/i }).parentElement
    ).toHaveStyle({
      display: 'flex',
      'flex-direction': 'column',

      width: '100%'
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should submit when onSubmit method is called', async () => {
    renderWithTheme(
      <Form aria-label="User info" name="userinfo" onSubmit={onSubmit}>
        <input aria-label="username" placeholder="Username" />

        <button type="submit">Salve</button>
      </Form>
    );

    const buttonSubmit = screen.getByRole('button', { name: /salve/i });

    fireEvent.click(buttonSubmit);

    await waitFor(async () => {
      expect(onSubmit).toHaveBeenCalled();
    });
  });
});
