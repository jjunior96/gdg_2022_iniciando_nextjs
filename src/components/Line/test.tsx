import { renderWithTheme } from 'utils/tests/__config__/helpers';

import Line from '.';

describe('<Line />', () => {
  it('should render the component correctly', () => {
    const { container } = renderWithTheme(
      <Line>
        <div>children</div>
      </Line>
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        gap: 1.6rem;
        margin: 0 auto;
      }

      .c0 label {
        font-size: 1.4rem;
        color: #343a40;
        margin: 0;
        padding: 0;
      }

      <div
        class="c0"
      >
        <div>
          children
        </div>
      </div>
    `);
  });
});
