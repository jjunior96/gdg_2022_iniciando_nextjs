import { Story, Meta } from '@storybook/react/types-6-0';

import PageHeader, { PageHeaderProps } from '.';

export default {
  title: 'PageHeader',
  component: PageHeader
} as Meta;

export const Default: Story<PageHeaderProps> = (args) => (
  <PageHeader {...args} />
);

Default.args = {
  title: 'Home',
  subTitle: 'Sub Title'
};
