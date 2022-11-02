import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Avatar,
  Flex,
  Box,
  Button,
  Center,
  Text,
} from "@chakra-ui/react";
import {
  faUser,
  faGear,
  faArrowRightFromBracket,
  faLifeRing,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {

  //define fontawesome icons 
    const userIcon = <FontAwesomeIcon className="icon" icon={faUser} />;
    const settingsIcon = <FontAwesomeIcon className="icon" icon={faGear} />;
    const logoutIcon = <FontAwesomeIcon className="icon" icon={faArrowRightFromBracket} />;
    const helpIcon = <FontAwesomeIcon className="icon" icon={faLifeRing} />;
    const downIcon =  <FontAwesomeIcon className="icon" icon={faChevronDown} />;

    //dynamic variables will be decalred here 
    const username = "Dummy Name";
  return (
    <>
      <Flex>
        <Flex></Flex>
        <Flex>
          <Box></Box>
          <Menu isLazy className="user-menu">
            <MenuButton className="menu-btn" as={Button} rightIcon={downIcon}>
              <Center className='container'>
                <Avatar
                  bg="green.500"
                  size="sm"
                  name={username}
                  src="dummy pic here"
                  className="avatar"
                />
                <Text className="username">{username}</Text>
              </Center>
            </MenuButton>
            <MenuList>
              <MenuItem icon={userIcon}>Profile</MenuItem>
              <MenuDivider />
              <MenuItem icon={settingsIcon}>Settings</MenuItem>
              <MenuDivider />
              <MenuItem icon={helpIcon}>Help</MenuItem>
              <MenuDivider />
              <MenuItem icon={logoutIcon}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </>
  );
}

export default Header;