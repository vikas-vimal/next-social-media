import { authModalState } from '@/atoms/authModal.atom';
import { auth } from '@/firebase/firebase.client';
import { FIREBASE_ERRORS } from '@/firebase/firebase.errors';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSetRecoilState } from 'recoil';
import ErrorText from '@/components/common/text/ErrorText';

type LoginFormProps = {
    onFinish?: Function
};

const LoginForm: React.FC<LoginFormProps> = ({ onFinish }) => {
    const setModalState = useSetRecoilState(authModalState)
    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    })
    const [errorMsg, setErrorMsg] = useState('')

    const [signInWithEmailAndPassword, user, loading, userError] = useSignInWithEmailAndPassword(auth)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = async (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault();
        console.log({ formValues });
        try {
            await signInWithEmailAndPassword(formValues.email, formValues.password);
        } catch (error) {
            console.log(error);
            setErrorMsg('Something went wrong! Please try again.')
        }
        onFinish?.()
    }

    useEffect(() => {
        console.log({ userError });
        setErrorMsg(FIREBASE_ERRORS[userError?.code as keyof typeof userError]);
    }, [userError])


    return (
        <form onSubmit={handleSubmit} style={{ display: 'block', width: '100%' }}>
            <Input name='email' type='email' placeholder='Email' value={formValues.email} mb={2} onChange={handleInputChange} _placeholder={{ color: "gray.400" }} bg="gray.50" fontSize="15px" borderRadius='10px' />
            <Input name='password' type='password' placeholder='Password' value={formValues.password} mb={2} onChange={handleInputChange} _placeholder={{ color: "gray.400" }} bg="gray.50" fontSize="15px" borderRadius='10px' />
            <Button type='submit' variant='primary' width='100%' mb={2} isLoading={loading} disabled={loading}>Log In</Button>

            {errorMsg && <ErrorText>{errorMsg}</ErrorText>}

            <Flex fontSize='13px' justify='center'>
                <Text mr={1}>New here?</Text>
                <Text fontWeight={600} color="brand.300" cursor='pointer' onClick={() => setModalState(prev => ({ ...prev, view: 'signup' }))}>Sign Up</Text>
            </Flex>
        </form>
    )
}
export default LoginForm;