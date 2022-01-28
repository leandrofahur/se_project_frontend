import React from 'react';
import { Button, ButtonProps } from '@mui/material';

export type MuiButtonProps = ButtonProps;

export function MuiButton({ children, ...rest }: MuiButtonProps) {
    return <Button {...rest}>{children}</Button>;
}
