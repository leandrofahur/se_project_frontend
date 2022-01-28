/* eslint-disable */
import React from 'react';
import { Story, Meta } from '@storybook/react';

import { MuiButton, MuiButtonProps } from './MuiButton';
import { MuiIconButton, MuiIconButtonProps } from './MuiIconButton';

import { FaApple } from 'react-icons/fa';
import { Stack } from '@mui/material';

export default {
    title: 'Components/Atoms/Button',
    component: MuiButton,
    argTypes: {},
} as Meta<MuiButtonProps>;

const Template: Story<MuiButtonProps> = (args) => <MuiButton {...args} />;

export const Variants = () => {
    return (
        <Stack direction="row" spacing={2}>
            <MuiButton variant="contained">Contained</MuiButton>
            <MuiButton variant="outlined">Outlined</MuiButton>
            <MuiButton variant="text">text</MuiButton>
        </Stack>
    );
};

export const Icon = () => {
    return (
        <>
            <h3>Only Icons</h3>
            <Stack direction="row" spacing={2}>
                <MuiIconButton>
                    <FaApple />
                </MuiIconButton>
            </Stack>
        </>
    );
};

export const States = () => {
    return (
        <>
            <h3>Disabled</h3>
            <Stack direction="row" spacing={2}>
                <MuiButton variant="contained" disabled>
                    Contained
                </MuiButton>
                <MuiButton variant="outlined" disabled>
                    Outlined
                </MuiButton>
                <MuiButton variant="text" disabled>
                    text
                </MuiButton>
            </Stack>
            <h3>Loading</h3>
            <Stack direction="row" spacing={2}></Stack>
        </>
    );
};
