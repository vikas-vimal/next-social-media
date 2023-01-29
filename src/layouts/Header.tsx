import HeaderRightContent from '@/components/header/HeaderRightContent';
import HeaderSearchBox from '@/components/header/HeaderSearchBox';
import { Flex, Image } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
    return (
        <>
            <Flex height='48px'>
                <Flex bg="white" paddingY={2} paddingX={6} alignItems="center" height='inherit' shadow='sm' position="fixed" top="0" left="0" right="0">
                    <Link href="/" style={{ fontSize: 24 }}><Image src='/images/dog.svg' alt="Brand Logo" height='44px' minW='44px' /></Link>
                    <HeaderSearchBox />
                    <HeaderRightContent />
                </Flex>
            </Flex>
        </>
    )
}
export default Header;