import { SearchIcon } from '@chakra-ui/icons';
import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';

const HeaderSearchBox: React.FC = () => {


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.name, event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault();
        console.log('searching...');
    }

    return (
        <Flex flexGrow={1} mx={6}>
            {/* <form onSubmit={handleSubmit} style={{ display: 'block' }}> */}
            <InputGroup maxWidth={{ base: 'unset', md: '300px' }}>
                <InputLeftElement
                    pointerEvents='none'
                ><SearchIcon color='gray.300' mb={1} /></InputLeftElement>
                <Input name="search" type='search' autoComplete="none" placeholder='Search here' fontSize={14}
                    bg="gray.50"
                    borderRadius='10px'
                    height='36px'
                    _hover={{
                        bg: "gray.100"
                    }}
                    _focus={{
                        bg: "white",
                        outline: "none",
                        borderColor: "brand.10"
                    }} onChange={handleInputChange} />
            </InputGroup>
            {/* </form> */}

        </Flex>
    )
}
export default HeaderSearchBox;