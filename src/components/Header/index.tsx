import React from 'react';

import { HStack, Icon, Link, Text } from '@chakra-ui/react';

import { BiUserCircle } from 'react-icons/bi';
import { FaRegHeart } from 'react-icons/fa';
import { BsCart3 } from 'react-icons/bs';

function Header() {
    return (
        <HStack
            justifyContent="space-between"
            padding="20px 40px"
            backgroundColor="#AD1457"
            color="#F9FBE7"
        >
            <HStack>
                <Text fontSize="xl" fontWeight="bold">
                    LOGO
                </Text>
            </HStack>
            <HStack spacing="20px">
                <Link href="http://facebook.com">Women</Link>
                <Link href="http://facebook.com">Men</Link>
                <Link href="http://google.com">Sales</Link>
                <Link href="http://instagram.com">Contact</Link>
            </HStack>
            <HStack spacing="20px">
                <Link href="http://google.com" fontSize="xl">
                    <Icon as={BiUserCircle} />
                </Link>
                <Link href="http://facebook.com" fontSize="xl">
                    <Icon as={FaRegHeart} />
                </Link>
                <Link href="http://instagram.com" fontSize="xl" fill="#F9FBE7">
                    <Icon as={BsCart3} />
                </Link>
            </HStack>
        </HStack>
    );
}

export default Header;
