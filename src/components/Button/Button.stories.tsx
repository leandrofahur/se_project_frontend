/* eslint-disable */
import React from 'react';
import { Story, Meta } from '@storybook/react';

import { MuiButton, MuiButtonProps } from './MuiButton';
import { MuiIconButton, MuiIconButtonProps } from './MuiIconButton';

import { FaApple } from 'react-icons/fa';
import { Box, Stack } from '@mui/material';

export default {
    title: 'Components/Atoms/Button',
    component: MuiButton,
    argTypes: {},
} as Meta<MuiButtonProps>;

const Template: Story<MuiButtonProps> = (args) => <MuiButton {...args} />;

export const Variants = () => {
    return (
        <>
            <h3>Variants</h3>
            <Stack direction="row" spacing={2}>
                <MuiButton variant="contained">Contained</MuiButton>
                <MuiButton variant="outlined">Outlined</MuiButton>
                <MuiButton variant="text">text</MuiButton>
            </Stack>
        </>
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

export const Sizes = () => {
    return (
        <>
            <h3>Sizes</h3>
            <Box sx={{ '& button': { m: 1 } }}>
                <div>
                    <MuiButton size="small">Small</MuiButton>
                    <MuiButton size="medium">Medium</MuiButton>
                    <MuiButton size="large">Large</MuiButton>
                </div>
                <div>
                    <MuiButton variant="outlined" size="small">
                        Small
                    </MuiButton>
                    <MuiButton variant="outlined" size="medium">
                        Medium
                    </MuiButton>
                    <MuiButton variant="outlined" size="large">
                        Large
                    </MuiButton>
                </div>
                <div>
                    <MuiButton variant="contained" size="small">
                        Small
                    </MuiButton>
                    <MuiButton variant="contained" size="medium">
                        Medium
                    </MuiButton>
                    <MuiButton variant="contained" size="large">
                        Large
                    </MuiButton>
                </div>
            </Box>
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
            {/* <h3>Loading</h3>
            <Stack direction="row" spacing={2}></Stack> */}
        </>
    );
};
