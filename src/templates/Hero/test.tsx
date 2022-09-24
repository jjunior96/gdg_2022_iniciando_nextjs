import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/__config__/helpers';

import Character from '.';
import CharacterMock from './mock';

describe('<Character />', () => {
  it('should render correctly page', () => {
    renderWithTheme(<Character {...CharacterMock} />);

    // Verifica se o name foi renderizado
    expect(
      screen.getByRole('heading', { name: CharacterMock.name })
    ).toBeInTheDocument();

    // Verifica se a image do Character foi renderizada
    expect(
      screen.getByAltText(`${CharacterMock.name} thumbnail`)
    ).toBeInTheDocument();
  });
});
