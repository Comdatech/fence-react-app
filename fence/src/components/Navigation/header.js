import React from 'react';

//import local assets
import "../../assets/scss/components/Navigation/navigation.scss";

//import local components

//import external libraries and assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Avatar,
  Flex,
  Button,
  Center,
  Text,
  IconButton,
} from "@chakra-ui/react";
import {
  faUser,
  faGear,
  faArrowRightFromBracket,
  faLifeRing,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { faBell } from '@fortawesome/free-regular-svg-icons';

const Header = () => {

  //fontawesome icons 
    const userIcon = <FontAwesomeIcon className="icon" icon={faUser} />;
    const settingsIcon = <FontAwesomeIcon className="icon" icon={faGear} />;
    const logoutIcon = <FontAwesomeIcon className="icon" icon={faArrowRightFromBracket} />;
    const helpIcon = <FontAwesomeIcon className="icon" icon={faLifeRing} />;
    const downIcon =  <FontAwesomeIcon className="icon" icon={faChevronDown} />;
    const notificationIcon = <FontAwesomeIcon className='icon' icon={faBell}/>;

    //dynamic variables will be decalred here at a later stage
    const username = "Dummy Name";

  return (
    <>
      <Flex direction="row" justify="space-between" className='pt-3'>
        <Flex></Flex>
        <Flex>
          <Menu isLazy className="notifications-dropdown">
            <MenuButton
              as={IconButton}
              icon={notificationIcon}
              className="notifications-icon  mr-4"
              _active={{ color: "#259237" }}
              _hover={{ color: "#259237" }}
            />
            <MenuList></MenuList>
          </Menu>
          <Menu isLazy className="profile-dropdown">
            <MenuButton
              className="profile-btn mr-4"
              as={Button}
              rightIcon={downIcon}
              _active={{ color: "#259237" }}
              _hover={{ color: "#259237" }}
            >
              <Center className="container">
                <Avatar
                  bg="green.500"
                  size="sm"
                  name={username}
                  src="dummy pic here"
                  className="avatar"
                />
                <Text paddingLeft="1" className="username">
                  {username}
                </Text>
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