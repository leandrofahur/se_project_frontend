import React from 'react';
import { IconButton, IconButtonProps } from '@mui/material';

export type MuiIconButtonProps = IconButtonProps;

export function MuiIconButton({ children, ...rest }: MuiIconButtonProps) {
    return <IconButton {...rest}>{children}</IconButton>;
}
