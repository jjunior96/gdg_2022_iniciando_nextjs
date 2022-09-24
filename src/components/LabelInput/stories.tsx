import { Story, Meta } from '@storybook/react/types-6-0';

import Input from 'components/Input';

import LabelInput, { LabelInputProps } from '.';

export default {
  title: 'LabelInput',
  component: LabelInput
} as Meta;

export const Default: Story<LabelInputProps> = (args) => (
  <div
    style={{
      width: '40rem',
      margin: '0 auto',
      paddingTop: '1rem'
    }}
  >
    <form action="">
      <LabelInput {...args} />
    </form>
  </div>
);

Default.args = {
  children: 'Label'
};

export const withIput: Story<LabelInputProps> = (args) => (
  <div
    style={{
      width: '40rem',
      margin: '0 auto',
      paddingTop: '1rem'
    }}
  >
    <form action="">
      <LabelInput {...args} />
      <Input placeholder="Example" />
    </form>
  </div>
);

withIput.args = {
  label: 'input',
  children: 'Example'
};
