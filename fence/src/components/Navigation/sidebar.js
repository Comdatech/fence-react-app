//import local assets
import icon from "../../assets/icons/comdatech-icon-colour-dark.png";
import logo from "../../assets/icons/comdatech-logo-colour-dark.png";

//import local components
import Tooltips from "./tooltip";

//import external libraries and assets
import React from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip, faGears, faClockRotateLeft, faHouse } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { Box, Flex, IconButton, Image, List, ListItem} from '@chakra-ui/react';


const Sidebar = ({ isSidebar, setSidebar }) => {

  //fontawesome icons
  const devicesIcon = <FontAwesomeIcon className="icon" icon={faMicrochip} />;
  const homeIcon = <FontAwesomeIcon className="icon" icon={faHouse} />;
  const configsIcon = <FontAwesomeIcon className="icon" icon={faGears} />;
  const alertsIcon = <FontAwesomeIcon className="icon" icon={faBell} />;
  const activityIcon = (<FontAwesomeIcon className="icon" icon={faClockRotateLeft} />);


  const navigate = useNavigate();
  return (
    <>
      <Flex
        boxShadow="lg"
        className={isSidebar ? "sidebar open" : "sidebar close"}
        w={isSidebar ? "15%" : "5%"}
        direction="column"
        align="center"
      >
        <Box className="pb-5">
          <Box onClick={() => navigate("/home")}>
            {isSidebar ? (
              <Image
                w="90%"
                margin="auto"
                src={logo}
                alt="Comdatech Fence Monitoring"
              />
            ) : (
              <Image
                maxH="72px"
                justifyContent="center"
                src={icon}
                alt="Comdatech Fence Monitoring"
              />
            )}
          </Box>
        </Box>

        <Flex direction="column">
          <List spacing={3}>
            <ListItem>
              <Tooltips
                label="Home"
                element={
                  <IconButton
                    icon={homeIcon}
                    size="lg"
                    _active={{ color: "#259237" }}
                    _hover={{ color: "#259237" }}
                    className="nav-icon"
                    onClick={() => navigate("/home")}
                  />
                }
              />
            </ListItem>

            <ListItem>
              <Tooltips
                label="Devices"
                element={
                  <IconButton
                    icon={devicesIcon}
                    size="lg"
                    _active={{ color: "#259237" }}
                    _hover={{ color: "#259237" }}
                    className="nav-icon"
                    onClick={() => navigate("/devices")}
                  />
                }
              />
            </ListItem>

            <ListItem>
              <Tooltips
                label="Configurations"
                element={
                  <IconButton
                    icon={configsIcon}
                    size="lg"
                    _active={{ color: "#259237" }}
                    _hover={{ color: "#259237" }}
                    className="nav-icon"
                    onClick={() => navigate("/configurations")}
                  />
                }
              />
            </ListItem>

            <ListItem>
              <Tooltips
                label="Alerts"
                element={
                  <IconButton
                    icon={alertsIcon}
                    size="lg"
                    _active={{ color: "#259237" }}
                    _hover={{ color: "#259237" }}
                    className="nav-icon"
                    onClick={() => navigate("/alerts")}
                  />
                }
              />
            </ListItem>

            <ListItem>
              <Tooltips
                label="Activity Log"
                element={
                  <IconButton
                    icon={activityIcon}
                    size="lg"
                    _active={{ color: "#259237" }}
                    _hover={{ color: "#259237" }}
                    className="nav-icon"
                    onClick={() => navigate("/activity")}
                  />
                }
              />
            </ListItem>
          </List>
        </Flex>
      </Flex>
    </>
  );
};

export default Sidebar;