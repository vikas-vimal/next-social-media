import { authModalState } from '@/atoms/authModal.atom';
import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { useSetRecoilState } from 'recoil';


const AuthButtons: React.FC = () => {

    const setModalState = useSetRecoilState(authModalState)

    const handleOpenModal = (view: "login" | "signup" | "resetPassword") => {
        setModalState(prev => ({ ...prev, open: true, view: view }));
    }

    return (
        <Flex display={{ base: 'none', lg: 'unset' }} flexShrink={1} gap={3}>
            <Button variant='outline' height='36px' fontSize='13px' width={{ base: '70px', md: '120px' }} onClick={() => handleOpenModal("login")}>Log In</Button>
            <Button variant='primary' height='36px' fontSize='13px' width={{ base: '70px', md: '120px' }} onClick={() => handleOpenModal("signup")}>Sign Up</Button>
        </Flex>
    )
}
export default AuthButtons;