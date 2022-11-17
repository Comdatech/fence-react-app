//import local assets

//import local components
import Tooltips from "./tooltip";

//import external libraries and assets
import React, {useEffect} from 'react';
import {  NavLink, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip, faGears, faClockRotateLeft, faHouse } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import {  Flex, IconButton,  List, ListItem} from '@chakra-ui/react';


const Sidebar = ({ isSidebar, ref, width, setWidth }) => {
  // This function calculates width of the sidebar
  const getListSize = () => {
    const newWidth = ref.current.clientWidth;
    setWidth(newWidth);
  };

  // Update 'width' when the window resizes
  useEffect(() => {
    window.addEventListener("resize", getListSize);
  })


  //fontawesome icons
  const devicesIcon = <FontAwesomeIcon className="icon" icon={faMicrochip} />;
  const homeIcon = <FontAwesomeIcon className="icon" icon={faHouse} />;
  const configsIcon = <FontAwesomeIcon className="icon" icon={faGears} />;
  const alertsIcon = <FontAwesomeIcon className="icon" icon={faBell} />;
  const activityIcon = (
    <FontAwesomeIcon className="icon" icon={faClockRotateLeft} />
  );

  //navigate is used to redirect to other pages
  const navigate = useNavigate();

  //location is used to show the current page
  const location = useLocation();

  const currPath = (props) => {
    console.log(props);
    if (props === location.pathname) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <Flex
        boxShadow="lg"
        className={isSidebar ? "sidebar open pt-4" : "sidebar close pt-4"}
        w={isSidebar ? "12%" : "5%"}
        minWidth="fit-content"
        direction="column"
        align="center"
        ref={ref}
      >
        <Flex direction="column">
          <List spacing={3}>
            <ListItem>
              <Tooltips
                label="Home"
                element={
                  <Flex
                    direction={isSidebar ? "row" : "column"}
                    justify={isSidebar ? "flex-start" : "space-between"}
                    align="center"
                    className="mb-4 link-item"
                  >
                    <IconButton
                      icon={homeIcon}
                      size="lg"
                      _hover={{ color: "#259237" }}
                      className={
                        currPath("/home") ? "nav-icon active" : "nav-icon"
                      }
                      onClick={() => navigate("/home")}
                    />
                    <NavLink
                      to="/home"
                      className={({ isActive }) =>
                        isActive ? "link active" : "link"
                      }
                      data-tip="Home"
                    >
                      Home
                    </NavLink>
                  </Flex>
                }
              />
            </ListItem>

            <ListItem>
              <Tooltips
                label="Devices"
                element={
                  <Flex
                    direction={isSidebar ? "row" : "column"}
                    justify={isSidebar ? "flex-start" : "space-between"}
                    align="center"
                    className="mb-4 link-item"
                  >
                    <IconButton
                      icon={devicesIcon}
                      size="lg"
                      _active={{ color: "#91e000" }}
                      _hover={{ color: "#91e000" }}
                      className={
                        currPath("/devices") ? "nav-icon active" : "nav-icon"
                      }
                      onClick={() => navigate("/devices")}
                    />
                    <NavLink
                      to="/devices"
                      className={({ isActive }) =>
                        isActive ? "link active" : "link"
                      }
                    >
                      Devices
                    </NavLink>
                  </Flex>
                }
              />
            </ListItem>

            <ListItem>
              <Tooltips
                label="Configurations"
                element={
                  <Flex
                    direction={isSidebar ? "row" : "column"}
                    justify={isSidebar ? "flex-start" : "space-between"}
                    align="center"
                    className="mb-4 link-item"
                  >
                    <IconButton
                      icon={configsIcon}
                      size="lg"
                      _active={{ color: "#91e000" }}
                      _hover={{ color: "#91e000" }}
                      className={
                        currPath("/configurations")
                          ? "nav-icon active"
                          : "nav-icon"
                      }
                      onClick={() => navigate("/configurations")}
                    />
                    <NavLink
                      to="/configurations"
                      className={({ isActive }) =>
                        isActive ? "link active" : "link"
                      }
                    >
                      Configurations
                    </NavLink>
                  </Flex>
                }
              />
            </ListItem>

            <ListItem>
              <Tooltips
                label="Alerts"
                element={
                  <Flex
                    direction={isSidebar ? "row" : "column"}
                    justify={isSidebar ? "flex-start" : "space-between"}
                    align="center"
                    className="mb-4 link-item"
                  >
                    <IconButton
                      icon={alertsIcon}
                      size="lg"
                      _active={{ color: "#91e000" }}
                      _hover={{ color: "#91e000" }}
                      className={
                        currPath("/alerts") ? "nav-icon active" : "nav-icon"
                      }
                      onClick={() => navigate("/alerts")}
                    />
                    <NavLink
                      to="/alerts"
                      className={({ isActive }) =>
                        isActive ? "link active" : "link"
                      }
                    >
                      Alerts
                    </NavLink>
                  </Flex>
                }
              />
            </ListItem>

            <ListItem>
              <Tooltips
                label="Activity Log"
                element={
                  <Flex
                    direction={isSidebar ? "row" : "column"}
                    justify={isSidebar ? "flex-start" : "space-between"}
                    align="center"
                    className="link-item"
                  >
                    <IconButton
                      icon={activityIcon}
                      size="lg"
                      _active={{ color: "#91e000" }}
                      _hover={{ color: "#91e000" }}
                      className={
                        currPath("/activity") ? "nav-icon active" : "nav-icon"
                      }
                      onClick={() => navigate("/activity")}
                    />
                    <NavLink
                      to="/activity"
                      className={({ isActive }) =>
                        isActive ? "link active" : "link"
                      }
                    >
                      Activity
                    </NavLink>
                  </Flex>
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