import { Button, Flex, Image } from '@chakra-ui/react';
import React from 'react';

type OAuthButtonsProps = {

};

const OAuthButtons: React.FC<OAuthButtonsProps> = () => {

    return (
        <Flex direction="column" gap='3' width="100%">
            <Button variant='special' width="100%"><Image src="/images/google-color.svg" alt="oath-logo" width="20px" mr={3} /> Continue with Google</Button>
            <Button variant='special' width="100%"><Image src="/images/facebook.svg" alt="oath-logo" width="20px" mr={3} /> Continue with Facebook</Button>
            <Button variant='special' width="100%"><Image src="/images/github.svg" alt="oath-logo" width="24px" mr={3} /> Continue with GitHub</Button>
        </Flex>
    )
}
export default OAuthButtons;