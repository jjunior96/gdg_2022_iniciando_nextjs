import { Story, Meta } from '@storybook/react/types-6-0';

import Tag, { TagProps } from '.';

export default {
  title: 'Tag',
  component: Tag
} as Meta;

export const Default: Story<TagProps> = (args) => <Tag {...args} />;

Default.args = {
  children: 'Tag example'
};
