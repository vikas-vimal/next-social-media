import React from 'react';
import { Text } from '@chakra-ui/react';

type ErrorTextProps = {
    errorMsg?: string
    children?: any,
};

const ErrorText: React.FC<ErrorTextProps> = ({ errorMsg, children }) => {

    return <Text color='red.500' textAlign='center' fontSize='13px' mb={2}>{children || errorMsg}</Text>
}
export default ErrorText;