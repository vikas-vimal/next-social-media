import { authModalState } from '@/atoms/authModal.atom';
import AuthInputs from '@/components/auth/AuthInputs';
import OAuthButtons from '@/components/auth/OAuthButtons';
import { Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

type AuthModalProps = {
    user: any | null
};

const AuthModal: React.FC<AuthModalProps> = ({ user }) => {
    // const [user, loading, userError] = useAuthState(auth);
    const [modalState, setModalState] = useRecoilState(authModalState)

    const handleClose = () => {
        setModalState(prev => ({ ...prev, open: false }));
    }

    useEffect(() => {
        if (user) handleClose();
    }, [user])


    return (
        <>
            <Modal isOpen={modalState.open} onClose={handleClose} isCentered>
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