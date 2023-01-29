import { auth } from '@/firebase/firebase.client';
import { FIREBASE_ERRORS } from '@/firebase/firebase.errors';
import { Button, Flex, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import ErrorText from '../common/text/ErrorText';

type OAuthButtonsProps = {

};

const OAuthButtons: React.FC<OAuthButtonsProps> = () => {
    const [errorMsg, setErrorMsg] = useState('');
    const [user, setUser] = useState(undefined)

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth)
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth)

    useEffect(() => {
        setErrorMsg(FIREBASE_ERRORS[googleError?.code as keyof typeof googleError] || '');
        setErrorMsg(FIREBASE_ERRORS[facebookError?.code as keyof typeof facebookError] || '');
        setErrorMsg(FIREBASE_ERRORS[githubError?.code as keyof typeof githubError] || '');
    }, [googleError, facebookError, githubError])

    useEffect(() => {
        // console.log({ googleUser, facebookUser, githubUser });
        const userCredentials: any = googleUser || facebookUser || githubUser;
        setUser(userCredentials)
    }, [googleUser, facebookUser, githubUser])

    const handleOAuthSignIn = async (method: "google" | "facebook" | "github") => {
        console.log('---- start sign in ----');
        try {
            setErrorMsg('')
            setUser(undefined)
            switch (method) {
                case "google":
                    await signInWithGoogle();
                    break;
                case "facebook":
                    await signInWithFacebook();
                    break;
                case "github":
                    await signInWithGithub();
                    break;
                default:
                    break;
            }
        } catch (error) {
            console.log(error);
            setErrorMsg('Something went wrong! Please try again.')
        }
    }


    return (
        <Flex direction="column" gap='3' width="100%">
            {!!errorMsg && <ErrorText>{errorMsg}</ErrorText>}

            <Button variant='special' width="100%" onClick={() => handleOAuthSignIn('google')} isLoading={googleLoading} disabled={googleLoading}>
                <Image src="/images/google-color.svg" alt="oath-logo" width="20px" mr={3} /> Continue with Google
            </Button>

            <Button variant='special' width="100%" onClick={() => handleOAuthSignIn('facebook')} isLoading={facebookLoading} disabled={facebookLoading}>
                <Image src="/images/facebook.svg" alt="oath-logo" width="20px" mr={3} /> Continue with Facebook
            </Button>

            <Button variant='special' width="100%" onClick={() => handleOAuthSignIn('github')} isLoading={githubLoading} disabled={githubLoading}>
                <Image src="/images/github.svg" alt="oath-logo" width="24px" mr={3} /> Continue with GitHub
            </Button>
        </Flex>
    )
}
export default OAuthButtons;