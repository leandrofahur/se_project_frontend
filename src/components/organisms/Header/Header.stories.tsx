import React from 'react';
import { Story, Meta } from '@storybook/react';
import Header, { HeaderProps } from './index';

export default {
    title: 'Components/Organisms/Header',
    component: Header,
    argTypes: {},
} as Meta<HeaderProps>;

// eslint-disable-next-line react/react-in-jsx-scope
// eslint-disable-next-line react/function-component-definition
const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
