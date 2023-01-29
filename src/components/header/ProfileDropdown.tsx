import { authModalState } from '@/atoms/authModal.atom';
import ProfileItem from '@/components/common/profile/ProfileItem';
import { auth } from '@/firebase/firebase.client';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Flex, Icon, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { BsBoxArrowLeft, BsBoxArrowRight, BsPerson, BsPersonCircle } from 'react-icons/bs';
import { useSetRecoilState } from 'recoil';

type ProfileDropdownProps = {
    user: any | null
};

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ user }) => {

    const setModalState = useSetRecoilState(authModalState)

    const handleOpenModal = (view: "login" | "signup" | "resetPassword") => {
        setModalState(prev => ({ ...prev, open: true, view: view }));
    }

    const [logoutUser, loading, logoutError] = useSignOut(auth)

    return (
        <Menu>
            <MenuButton cursor='pointer' border='none' m={0} lineHeight='0'>
                <Flex alignItems='center' justify='center'>
                    {
                        user ?
                            <>
                                <ProfileItem user={user} />
                                <ChevronDownIcon ml={1} />
                            </>
                            : <Icon as={BsPersonCircle} color="gray.400" fontSize={26} ml={2} />
                    }
                </Flex>
            </MenuButton>
            <MenuList>
                {user ?
                    <>
                        <MenuItem><Icon as={BsPerson} color="black" fontSize={18} mr={3} /> Profile</MenuItem>
                        <MenuDivider />
                        <MenuItem isDisabled={loading} onClick={() => logoutUser()}><Icon as={BsBoxArrowRight} color="black" fontSize={18} mr={3} /> Logout</MenuItem>
                    </>
                    :
                    <MenuItem onClick={() => handleOpenModal("login")}><Icon as={BsBoxArrowLeft} color="black" fontSize={18} mr={3} /> Log In / Sign Up</MenuItem>
                }
            </MenuList>
        </Menu>
    )
}
export default ProfileDropdown;