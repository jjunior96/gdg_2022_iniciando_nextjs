import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/__config__/helpers';

import Empty from '.';

describe('<Empty />', () => {
  it('should render default', () => {
    const { container } = renderWithTheme(<Empty />);

    const titleComponent = screen.getByText(/no data/i);

    expect(titleComponent).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly', () => {
    renderWithTheme(<Empty title="title" />);

    const titleComponent = screen.getByText(/title/);
    const iconComponent = screen.getByTestId(/empty-icon/);

    expect(titleComponent).toBeInTheDocument();
    expect(iconComponent).toBeInTheDocument();
  });

  it('should render with description', () => {
    renderWithTheme(<Empty title="title" description="description" />);

    const titleComponent = screen.getByText(/title/i);
    const descriptionComponent = screen.getByText(/description/i);

    expect(titleComponent).toBeInTheDocument();
    expect(descriptionComponent).toBeInTheDocument();
  });

  it('should render with link for home', () => {
    renderWithTheme(<Empty title="title" hasLink />);

    expect(screen.getByText(/title/)).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /go to home/i })
    ).toBeInTheDocument();
  });

  it('should render without icon when false passed', () => {
    renderWithTheme(<Empty title="title" icon={false} />);

    const iconComponent = screen.queryByTestId(/empty-icon/);

    expect(iconComponent).not.toBeInTheDocument();
  });
});
