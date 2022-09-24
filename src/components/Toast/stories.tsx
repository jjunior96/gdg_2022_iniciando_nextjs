import { Story, Meta } from '@storybook/react/types-6-0';

import Toast, { ToastProps } from '.';

export default {
  title: 'Toast',
  component: Toast,
  decorators: [
    (Story) => (
      <div style={{ width: '90%', margin: '0 auto', position: 'relative' }}>
        <Story />
      </div>
    )
  ],
  argTypes: {
    messages: {
      type: ''
    }
  }
} as Meta;

export const Default: Story<ToastProps> = (args) => <Toast {...args} />;

Default.args = {
  messages: [
    {
      id: '1',
      type: 'success',
      title: 'Toast'
    }
  ]
};

export const withWarning: Story<ToastProps> = (args) => <Toast {...args} />;

withWarning.args = {
  messages: [
    {
      id: '1',
      type: 'warning',
      title: 'Toast'
    }
  ]
};

export const withError: Story<ToastProps> = (args) => <Toast {...args} />;

withError.args = {
  messages: [
    {
      id: '1',
      type: 'error',
      title: 'Toast'
    }
  ]
};
