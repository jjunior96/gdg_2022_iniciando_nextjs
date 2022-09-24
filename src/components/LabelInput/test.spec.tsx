import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/__config__/helpers';

import theme from 'styles/theme';

import LabelInput from '.';

describe('<LabelInput />', () => {
  it('should render the label default', () => {
    const { container } = renderWithTheme(
      <form>
        <LabelInput htmlFor="label-test">label</LabelInput>
        <input type="text" id="label-test" />
      </form>
    );

    const labelElement = screen.getByText(/label/i);

    expect(labelElement).toBeInTheDocument();

    expect(labelElement).toHaveStyle({
      color: theme.colors.black
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the label with isRequired props passed', () => {
    renderWithTheme(
      <form>
        <LabelInput htmlFor="label-test" isRequired>
          label
        </LabelInput>
        <input type="text" id="label-test" />
      </form>
    );

    const spanElement = screen.getByText('*');

    expect(spanElement).toHaveStyle({
      display: 'inline',
      color: theme.colors.red
    });
  });

  it('should render the label with isDisable props passed', () => {
    renderWithTheme(
      <form>
        <LabelInput htmlFor="label-test" isDisabled>
          label
        </LabelInput>
        <input type="text" id="label-test" />
      </form>
    );

    const labelElement = screen.getByText(/label/i);

    expect(labelElement).toHaveStyle({
      cursor: 'not-allowed',
      color: theme.colors.gray_200
    });
  });

  it('should render the label with labelColor white props passed', () => {
    renderWithTheme(
      <form>
        <LabelInput htmlFor="label-test" labelColor="white">
          label
        </LabelInput>
        <input type="text" id="label-test" />
      </form>
    );

    const labelElement = screen.getByText(/label/i);

    expect(labelElement).toHaveStyle({
      color: theme.colors.white
    });
  });
});
