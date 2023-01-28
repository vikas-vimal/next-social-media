import { authModalState } from '@/atoms/authModal.atom';
import { Input, Button, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';

type SingupFormProps = {
    onFinish?: Function
};

const SignupForm: React.FC<SingupFormProps> = ({ onFinish }) => {
    const setModalState = useSetRecoilState(authModalState)

    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault();
        console.log({ formValues });
        onFinish?.()
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: 'block', width: '100%' }}>
            <Input name='email' type='email' placeholder='Email' value={formValues.email} mb={2} onChange={handleInputChange} _placeholder={{ color: "gray.400" }} bg="gray.50" fontSize="15px" borderRadius='10px' />

            <Input name='password' type='password' placeholder='Password' value={formValues.password} mb={2} onChange={handleInputChange} _placeholder={{ color: "gray.400" }} bg="gray.50" fontSize="15px" borderRadius='10px' />

            <Input name='confirmPassword' type='password' placeholder='Confirm Password' value={formValues.confirmPassword} mb={2} onChange={handleInputChange} _placeholder={{ color: "gray.400" }} bg="gray.50" fontSize="15px" borderRadius='10px' />

            <Button type='submit' variant='primary' width='100%' mb={2}>Sign Up</Button>

            <Flex fontSize='13px' justify='center'>
                <Text mr={1}>Already a user?</Text>
                <Text fontWeight={600} color="brand.300" cursor='pointer' onClick={() => setModalState(prev => ({ ...prev, view: 'login' }))}>Log In</Text>
            </Flex>
        </form>
    )
}
export default SignupForm;