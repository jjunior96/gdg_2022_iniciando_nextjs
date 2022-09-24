import { Story, Meta } from '@storybook/react/types-6-0';

import Spinner, { SpinnerProps } from '.';

export default {
  title: 'Spinner',
  component: Spinner,
  decorators: [
    (Story) => (
      <div style={{ width: '40rem', margin: '0 auto', padding: '1rem 0 1rem' }}>
        <Story />
      </div>
    )
  ]
} as Meta;

export const Default: Story<SpinnerProps> = (args) => <Spinner {...args} />;
