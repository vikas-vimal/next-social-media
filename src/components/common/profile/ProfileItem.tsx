import { Avatar, Button, Flex, Text } from '@chakra-ui/react';
import React, { useMemo } from 'react';

type ProfileItemProps = {
    user?: any | null
};
// uid={user?.uid}
// name={user?.displayName}
// email={user?.email}
// profileImage={user?.photoURL}

const ProfileItem: React.FC<ProfileItemProps> = ({ user }) => {

    const userName = useMemo(() => user?.displayName || user?.email?.split('@')?.[0] || '',
        [user?.displayName, user?.email])

    return (
        <Button variant='ghost' padding={0} display='flex' alignItems='center' justifyContent='center'>
            <Avatar key={user?.uid} width={34} height={34} borderRadius={10} src={user?.photoURL || ''} name={userName} />
            <Flex display={{ base: 'none', lg: 'unset' }} direction='column' alignItems='start' ml={2} mr={1}>
                <Text fontSize='12px' fontWeight='semibold'>{userName}</Text>
                <Text fontSize='12px' fontWeight='light' color='gray.400'>1 karma</Text>
            </Flex>
        </Button >
    )
}
export default ProfileItem;