import { Story, Meta } from '@storybook/react';
import Header, { HeaderProps } from './index';

export default {
    title: 'Components/Organisms/Header',
    component: Header,
    argTypes: {},
} as Meta<HeaderProps>;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
