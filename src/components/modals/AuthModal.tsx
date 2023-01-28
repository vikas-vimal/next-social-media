import { authModalState } from '@/atoms/authModal.atom';
import { Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import AuthInputs from '@/components/auth/AuthInputs';
import OAuthButtons from '@/components/auth/OAuthButtons';

type AuthModalProps = {

};

const AuthModal: React.FC<AuthModalProps> = () => {

    const [modalState, setModalState] = useRecoilState(authModalState)

    const handleClose = () => {
        setModalState(prev => ({ ...prev, open: false }));
    }

    return (
        <>
            <Modal isOpen={modalState.open} onClose={handleClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign='center'>
                        {modalState.view === 'login' && 'Log In'}
                        {modalState.view === 'signup' && 'Sign Up'}
                        {modalState.view === 'resetPassword' && 'Reset Password'}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody display='flex' justifyContent='center' alignItems='center'>
                        <Flex
                            direction='column'
                            align='center'
                            justify='center'
                            width='70%'
                            pb={8}
                        >
                            <OAuthButtons />
                            <Text my={6} fontWeight={700} color="gray.400">OR</Text>
                            <AuthInputs />
                        </Flex>
                    </ModalBody>

                </ModalContent>
            </Modal>
        </>
    )
}
export default AuthModal;