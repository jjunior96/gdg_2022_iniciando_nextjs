import { BiBookAlt as ComicIcon } from 'react-icons/bi';

import { Story, Meta } from '@storybook/react/types-6-0';

import CardInfo, { CardInfoProps } from './index';

export default {
  title: 'CardInfo',
  component: CardInfo
} as Meta;

export const Default: Story<CardInfoProps> = (args) => <CardInfo {...args} />;

Default.args = {
  href: '/',
  title: 'Comics',
  description: '269',
  icon: ComicIcon
};
