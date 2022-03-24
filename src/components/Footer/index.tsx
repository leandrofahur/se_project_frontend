import React from 'react';
import { Box, HStack, Icon, Link, Text } from '@chakra-ui/react';

import { FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

function Footer() {
    return (
        <Box backgroundColor="#1A1A1A" w="100%" p={4} height="100%">
            <HStack justifyContent="center" padding="20px 40px" color="#F9FBE7" spacing="20px">
                <Link href="http://facebook.com">Women</Link>
                <Link href="http://facebook.com">Men</Link>
                <Link href="http://google.com">Sales</Link>
                <Link href="http://instagram.com">Contact</Link>
            </HStack>
            <HStack justifyContent="center" padding="20px 40px" color="#F9FBE7" spacing="20px">
                <Link href="http://facebook.com" fontSize="xl">
                    <Icon as={FaLinkedinIn} />
                </Link>

                <Link href="http://facebook.com" fontSize="xl">
                    <Icon as={BsInstagram} />
                </Link>

                <Link href="http://google.com" fontSize="xl">
                    <Icon as={FaFacebookF} />
                </Link>

                <Link href="http://instagram.com" fontSize="xl">
                    <Icon as={FaTwitter} />
                </Link>
            </HStack>
            <HStack
                justifyContent="center"
                padding="100px 40px 10px"
                color="#F9FBE7"
                spacing="20px"
            >
                <Text>No.2 _ Scared to Compile Copyright 2022 - All Right Reserved</Text>
            </HStack>
        </Box>
    );
}

export default Footer;
