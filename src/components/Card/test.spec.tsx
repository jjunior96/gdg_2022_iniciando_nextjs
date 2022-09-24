import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/__config__/helpers';

import Card from '.';

const props = {
  id: 1,
  image: '',
  name: 'Card',
  status: 'Alive'
};

describe('<Card />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Card {...props} />);

    expect(screen.getByText(/Card/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
