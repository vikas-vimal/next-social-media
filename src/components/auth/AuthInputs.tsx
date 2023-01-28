import { authModalState } from '@/atoms/authModal.atom';
import React from 'react';
import { useRecoilValue } from 'recoil';
import LoginForm from '@/components/forms/LoginForm';
import SignupForm from '@/components/forms/SignupForm';

type AuthInputsProps = {

};

const AuthInputs: React.FC<AuthInputsProps> = () => {
    const modalState = useRecoilValue(authModalState)

    return (
        <>
            {modalState.view === 'login' && <LoginForm />}
            {modalState.view === 'signup' && <SignupForm />}
        </>
    )
}
export default AuthInputs;