import { BiSearch as SearchIcon } from 'react-icons/bi';
import { BsPerson as PersonIcon } from 'react-icons/bs';

import { Story, Meta } from '@storybook/react/types-6-0';

import Input, { InputProps } from '.';

export default {
  title: 'Form/Input',
  component: Input,
  argTypes: {
    icon: {
      type: ''
    }
  }
} as unknown as Meta;

export const Default: Story<InputProps> = (args) => (
  <div
    style={{
      width: '40rem',
      margin: '0 auto',
      paddingTop: '1rem'
    }}
  >
    <Input {...args} />
  </div>
);

export const withLabel: Story<InputProps> = (args) => (
  <div
    style={{
      width: '40rem',
      margin: '0 auto'
    }}
  >
    <Input {...args} />
  </div>
);

withLabel.args = {
  label: 'Name',
  placeholder: 'Insert user name'
};

export const withError: Story<InputProps> = (args) => (
  <div
    style={{
      width: '40rem',
      margin: '0 auto'
    }}
  >
    <Input error="Field is required" isRequired {...args} />
  </div>
);

withError.args = {
  label: 'Name',
  placeholder: 'Insert user name',
  icon: <PersonIcon />
};

export const withIcon: Story<InputProps> = (args) => (
  <div
    style={{
      width: '40rem',
      margin: '0 auto'
    }}
  >
    <Input {...args} />
  </div>
);

withIcon.args = {
  icon: <SearchIcon />,
  label: 'Name',
  placeholder: 'Search here'
};

export const disable: Story<InputProps> = (args) => (
  <div
    style={{
      width: '40rem',
      margin: '0 auto'
    }}
  >
    <Input label="Search" isDisabled {...args} />
  </div>
);

disable.args = {
  icon: <SearchIcon />,
  placeholder: 'Search here'
};
