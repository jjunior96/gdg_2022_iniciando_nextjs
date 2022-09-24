import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';

import Button from 'components/Button';
import Heading from 'components/Heading';
import Input from 'components/Input';

import Form, { FormProps } from '.';

export default {
  title: 'Form/Form',
  component: Form
} as Meta;

export const Default: Story<FormProps> = (args) => (
  <div
    style={{
      width: '40rem',
      height: '25rem',
      margin: '0 auto'
    }}
  >
    <Form
      {...args}
      onSubmit={(e) => {
        e.preventDefault();
        action('form submitted')(e);
      }}
    >
      <Heading>User info</Heading>
      <Input name="name" placeholder="Insert user name" label="Name" />{' '}
      <Input
        name="email"
        type="email"
        placeholder="Insert user email"
        label="E-mail"
      />
      <Button type="submit">Enter</Button>
    </Form>
  </div>
);
