import { Button, Flex, Icon } from '@chakra-ui/react';
import React from 'react';
import { BsArrowUpRightCircle, BsBell, BsCameraVideo, BsChatDots, BsPlusCircle } from "react-icons/bs";

type HeaderNavButtonsProps = {
    user?: any | null
};

const HeaderNavButtons: React.FC<HeaderNavButtonsProps> = ({ user }) => {

    return (
        <>
            <Flex flexGrow={1} gap={2}>
                <Button display={{ base: 'none', lg: 'flex' }} variant='ghost' padding={0} alignItems='center' justifyContent='center'><Icon as={BsArrowUpRightCircle} fontSize={22} /></Button>

                <Button display={{ base: 'none', lg: 'flex' }} variant='ghost' padding={0} alignItems='center' justifyContent='center'><Icon as={BsCameraVideo} fontSize={22} /></Button>

                <Button variant='ghost' padding={0} display='flex' alignItems='center' justifyContent='center'><Icon as={BsChatDots} fontSize={22} /></Button>

                <Button variant='ghost' padding={0} display='flex' alignItems='center' justifyContent='center'><Icon as={BsBell} fontSize={22} /></Button>

                <Button display={{ base: 'none', lg: 'flex' }} variant='ghost' padding={0} alignItems='center' justifyContent='center' mr={2}><Icon as={BsPlusCircle} fontSize={24} /></Button>

            </Flex>
        </>
    )
}
export default HeaderNavButtons;