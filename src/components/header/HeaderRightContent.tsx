import { Flex } from '@chakra-ui/react';
import React from 'react';
import AuthButtons from '@/components/header/AuthButtons';
import AuthModal from '@/components/modals/AuthModal';


const HeaderRightContent: React.FC = () => {

    return (
        <>
            <Flex flexShrink={1} gap={3}>
                <AuthButtons />
            </Flex>
            <AuthModal />
        </>
    )
}
export default HeaderRightContent;