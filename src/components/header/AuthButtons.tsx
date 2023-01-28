import { authModalState } from '@/atoms/authModal.atom';
import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';


const AuthButtons: React.FC = () => {

    const [modalState, setModalState] = useRecoilState(authModalState)

    const handleOpenModal = (view: "login" | "signup" | "resetPassword") => {
        setModalState(prev => ({ ...prev, open: true, view: view }));
    }

    return (
        <Flex flexShrink={1} gap={3}>
            <Button variant='outline' height='36px' fontSize='13px' width={{ base: '70px', md: '120px' }} onClick={() => handleOpenModal("login")}>Log In</Button>
            <Button variant='primary' height='36px' fontSize='13px' width={{ base: '70px', md: '120px' }} onClick={() => handleOpenModal("signup")}>Sign Up</Button>
        </Flex>
    )
}
export default AuthButtons;