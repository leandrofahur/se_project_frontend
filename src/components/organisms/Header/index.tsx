import React from 'react';

import { AppBar, Button, IconButton, Tab, Tabs, Toolbar, Typography } from '@mui/material';

import { FaRegUserCircle, FaSearch, FaShoppingCart } from 'react-icons/fa';

export type HeaderProps = {};

// eslint-disable-next-line no-empty-pattern
export default function Header({}: HeaderProps) {
    return (
        <AppBar color="transparent" elevation={0}>
            <Toolbar>
                <Button>
                    <Typography variant="h1">LOGO</Typography>
                </Button>
                <Tabs value={0} TabIndicatorProps={{ style: { backgroundColor: 'red' } }}>
                    <Tab label="Shop" />
                    <Tab label="Contact us" />
                </Tabs>
                <IconButton>
                    <FaSearch />
                </IconButton>
                <IconButton>
                    <FaShoppingCart />
                </IconButton>
                <IconButton>
                    <FaRegUserCircle />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
