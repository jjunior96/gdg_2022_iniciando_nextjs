import { Story, Meta } from '@storybook/react/types-6-0';

import ErrorText, { ErrorTextProps } from '.';

export default {
  title: 'ErrorText',
  component: ErrorText
} as Meta;

export const Default: Story<ErrorTextProps> = (args) => (
  <div
    style={{
      width: '40rem',
      margin: '0 auto',
      paddingTop: '1rem'
    }}
  >
    <ErrorText {...args} />
  </div>
);

Default.args = {
  children: 'Text Example'
};
