import { BiBookAlt as SeriesIcon } from 'react-icons/bi';

import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/__config__/helpers';

import CardMenu from '.';

const cardProps = {
  href: '/',
  title: 'Iron Man',
  description: `I'm Iron Man`,
  icon: SeriesIcon
};

describe('<CardMenu />', () => {
  it('should render the component', () => {
    const { container } = renderWithTheme(<CardMenu {...cardProps} />);

    // Verifica se a descricao foi renderizada
    expect(screen.getByText(/i'm iron Man/i)).toBeInTheDocument();

    // Verifica se o link (<a>) foi renderizado
    expect(screen.getByRole('link')).toHaveAttribute('href', '/');

    // Verifica se o icone passado foi renderizado
    expect(screen.getByLabelText(/iron man icon/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
