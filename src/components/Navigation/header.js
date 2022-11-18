import React from 'react';

//import local assets
import "../../assets/scss/components/Navigation/navigation.scss";
import logo from "../../assets/icons/comdatech-logo-colour-dark.png";

//import local components

//import external libraries and assets
import { useLocation, useNavigate } from 'react-router-dom';
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
  faAnglesLeft,
  faChevronLeft,
  faXmark, 
  faBars,
  faAnglesRight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faBell } from '@fortawesome/free-regular-svg-icons';


//display currrent path 


const Header = ({isSidebar, setSidebar}) => {
  //fontawesome icons 
    const userIcon = <FontAwesomeIcon className="icon" icon={faUser} />;
    const settingsIcon = <FontAwesomeIcon className="icon" icon={faGear} />;
    const logoutIcon = <FontAwesomeIcon className="icon" icon={faArrowRightFromBracket} />;
    const helpIcon = <FontAwesomeIcon className="icon" icon={faLifeRing} />;
    const downIcon =  <FontAwesomeIcon className="icon" icon={faChevronDown} />;
    const notificationIcon = <FontAwesomeIcon className='icon' icon={faBell}/>;
    const back2 = <FontAwesomeIcon className="icon" icon={faAnglesLeft} />;
    const back1 = <FontAwesomeIcon className="icon" icon={faChevronLeft} />;
    const forward2 = <FontAwesomeIcon className="icon" icon={faAnglesRight} />;
    const forward1 = <FontAwesomeIcon className="icon" icon={faChevronRight} />;

  //display current path and file location
    let location = useLocation();
    let navigate = useNavigate();

    function displayPath(props) {
      let newPath;
      let temp;

      if (props.charAt(0)==="/"){
        temp=props.substring(1);
      }else{
          temp= props;
      };

      newPath = temp.replace("/", " ~ ");
      return (
        <>
          {newPath}
        </>
      );
    };


    //toggle the menu sidebar 
      const toggleSidebar = () => {
        setSidebar(!isSidebar);
      };

      let menuIcon;

      if (isSidebar) {
        menuIcon = <FontAwesomeIcon className="icon" icon={faXmark} />;
      } else {
        menuIcon = <FontAwesomeIcon className="icon" icon={faBars} />;
      }

   
    //dynamic variables will be decalred here at a later stage
    const username = "Dummy Name";

  return (
    <>
      <Flex
        direction="row"
        justify="space-between"
        align="center"
        className="header pl-4 pr-4"
        boxShadow="lg"
      >
        {/* Sidebar Icon Menu and Current Page Display  */}
        <Flex align="center" justify="center">
          <Flex w="">
            <IconButton
              icon={menuIcon}
              onClick={toggleSidebar}
              _active={{ color: "#259237" }}
              _hover={{ color: "#259237" }}
              className="menu-icon  mr-5 mr-sm-3"
            />
          </Flex>

          <Flex align="center" justify="center" className="company-logo">
            <img src={logo} alt="Comdatech logo" />
          </Flex>
        </Flex>
        <Flex className="display-path" align="center">
          
          <Button
            colorScheme="green"
            variant="ghost"
            onClick={() => navigate(-2)}
          >
            {back2}
          </Button>
          <Button
            colorScheme="green"
            variant="ghost"
            onClick={() => navigate(-1)}
          >
            {back1}
          </Button>
          <Text
            bgGradient="linear(to-l, #259237, #259237)"
            bgClip="text"
            fontSize="medium"
            fontWeight="semibold"
            className="pathname"
          >
            {displayPath(location.pathname)}
          </Text>
          <Button
            colorScheme="green"
            variant="ghost"
            onClick={() => navigate(1)}
          >
            {forward1}
          </Button>
          <Button
            colorScheme="green"
            variant="ghost"
            onClick={() => navigate(2)}
          >
            {forward2}
          </Button>
        </Flex>

        {/* Notifications and User Profile Dropdown Menus */}
        <Flex>
          <Menu isLazy className="notifications-dropdown">
            <MenuButton
              as={IconButton}
              icon={notificationIcon}
              className="notifications-icon  mr-5 mr-sm-3"
              _active={{ color: "#259237" }}
              _hover={{ color: "#259237" }}
            />
            <MenuList></MenuList>
          </Menu>
          <Menu isLazy className="profile-dropdown">
            <MenuButton
              className="profile-btn"
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
                <p className="username">
                  {username}
                </p>
              </Center>
            </MenuButton>
            <MenuList>
              <MenuItem
                icon={userIcon}
                onClick={() => navigate("/user/profile")}
              >
                Profile
              </MenuItem>
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