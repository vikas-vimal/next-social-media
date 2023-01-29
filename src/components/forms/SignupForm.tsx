import { authModalState } from '@/atoms/authModal.atom';
import { Input, Button, Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase/firebase.client';
import { FIREBASE_ERRORS } from '@/firebase/firebase.errors';
import ErrorText from '@/components/common/text/ErrorText';

type SingupFormProps = {
    onFinish?: Function
};

const SignupForm: React.FC<SingupFormProps> = ({ onFinish }) => {
    const setModalState = useSetRecoilState(authModalState)
    const [errorMsg, setErrorMsg] = useState('')
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    })

    const [createUserWithEmailAndPassword, user, loading, userError] = useCreateUserWithEmailAndPassword(auth)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = async (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault();
        setErrorMsg('');
        try {
            console.log({ formValues, errorMsg });
            if (!formValues.email) {
                setErrorMsg('Email cannot be empty!')
                return;
            }
            if (!formValues.password || !formValues.confirmPassword) {
                setErrorMsg('Please set a password!')
                return;
            }
            if (formValues.password !== formValues.confirmPassword) {
                setErrorMsg('Password do not match!')
                return;
            }
            await createUserWithEmailAndPassword(formValues.email, formValues.confirmPassword)
            // setModalState(prev => ({ ...prev, open: false }));
        } catch (error) {
            console.log(error);
        } finally {
            onFinish?.()
        }
    }

    useEffect(() => {
        console.log({ userError });
        setErrorMsg(FIREBASE_ERRORS[userError?.code as keyof typeof FIREBASE_ERRORS] || '')
    }, [userError])


    return (
        <form onSubmit={handleSubmit} style={{ display: 'block', width: '100%' }}>
            <Input name='email' type='email' placeholder='Email' value={formValues.email} mb={2} onChange={handleInputChange} _placeholder={{ color: "gray.400" }} bg="gray.50" fontSize="15px" borderRadius='10px' />

            <Input name='password' type='password' placeholder='Password' value={formValues.password} mb={2} onChange={handleInputChange} _placeholder={{ color: "gray.400" }} bg="gray.50" fontSize="15px" borderRadius='10px' />

            <Input name='confirmPassword' type='password' placeholder='Confirm Password' value={formValues.confirmPassword} mb={2} onChange={handleInputChange} _placeholder={{ color: "gray.400" }} bg="gray.50" fontSize="15px" borderRadius='10px' />

            {errorMsg && <ErrorText>{errorMsg}</ErrorText>}

            <Button type='submit' variant='primary' isLoading={loading} disabled={loading} width='100%' mb={2}>Sign Up</Button>

            <Flex fontSize='13px' justify='center'>
                <Text mr={1}>Already a user?</Text>
                <Text fontWeight={600} color="brand.300" cursor='pointer' onClick={() => setModalState(prev => ({ ...prev, view: 'login' }))}>Log In</Text>
            </Flex>
        </form>
    )
}
export default SignupForm;