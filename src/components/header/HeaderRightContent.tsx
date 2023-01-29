import AuthButtons from '@/components/header/AuthButtons';
import HeaderNavButtons from '@/components/header/HeaderNavButtons';
import AuthModal from '@/components/modals/AuthModal';
import { auth } from '@/firebase/firebase.client';
import { Flex, Spinner } from '@chakra-ui/react';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import ProfileDropdown from './ProfileDropdown';


const HeaderRightContent: React.FC = () => {
    const [user, loading, userError] = useAuthState(auth);

    return (
        <>
            <Flex flexShrink={1} gap={3}>
                {loading ? <Spinner /> : !user ? <AuthButtons /> : <HeaderNavButtons user={user} />}

                <ProfileDropdown user={user} />

            </Flex>
            {!user && <AuthModal user={user} />}
        </>
    )
}
export default HeaderRightContent;