import React from "react";


// import local assets
import "../../assets/scss/pages/authentication.scss";
import logo from "../../assets/icons/comdatech-icon-colour-dark.png";


//import local components
import ParticleBackground from "../../components/particleBackground";


//import external libraries and assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import {
  faEye,
  faEyeSlash,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  InputLeftAddon,
  Button,
  InputGroup,
  InputRightElement,
  Circle,
  Box,
} from "@chakra-ui/react";


const Login = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const eyeIcon = <FontAwesomeIcon className="icon" icon={faEye} />;
  const emailIcon = <FontAwesomeIcon className="icon" icon={faEnvelope} />;
  const lockIcon = <FontAwesomeIcon className="icon" icon={faLock} />;
  const eyeSlashIcon = <FontAwesomeIcon className="icon" icon={faEyeSlash} />;

  document.title = "Sign In | Comdatech";
  return (
    <>
      <ParticleBackground>
        <Container className="auth-page-content">
          <form>
            <Flex className="auth-card">
              <Flex>
                <Flex className="auth-logo">
                  <img src={logo} alt="Comdatech Logo" className="logo" />
                  <Text fontSize="2xl" className="heading-1">
                    Fence Monitoring App
                  </Text>
                </Flex>
              </Flex>
              <Flex className="pb-3">
                <Text fontSize="sm">Sign in to continue.</Text>
              </Flex>
              <Flex className="pb-4">
                <FormControl className="">
                  <FormLabel fontSize="sm" htmlFor="email">
                    Email
                  </FormLabel>
                  <InputGroup>
                    <InputLeftAddon>{emailIcon}</InputLeftAddon>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter Email Address"
                      variant="filled"
                      bg="green.100"
                    />
                    <InputRightElement className="dummy-icon">
                      {emailIcon}
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </Flex>

              <Flex className="pb-4">
                <FormControl>
                  <Flex flexDirection="row" justifyContent="space-between">
                    <FormLabel fontSize="sm" htmlFor="password">
                      Password
                    </FormLabel>
                    <Box>
                      <NavLink
                        className="fw-semibold text-primary text-decoration-underline"
                        fontSize="sm"
                        to="/forgot-password"
                      >
                        Forgot Password?
                      </NavLink>
                    </Box>
                  </Flex>
                  <InputGroup>
                    <InputLeftAddon>{lockIcon}</InputLeftAddon>
                    <Input
                      type={show ? "text" : "password"}
                      placeholder="Enter password"
                      bg="green.100"
                      variant="filled"
                    />
                    <InputRightElement>
                      <Circle onClick={handleClick}>
                        {show ? eyeSlashIcon : eyeIcon}
                      </Circle>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </Flex>
              <Flex>
                <Button
                  colorScheme="green"
                  variant="solid"
                  onClick={() => this.onSubmit()}
                >
                  Sign In
                </Button>
              </Flex>
            </Flex>
          </form>
          <Text className="pt-4">
            Don't have an account ?{" "}
            <NavLink
              to="/sign-up"
              className="fw-semibold text-primary text-decoration-underline"
            >
              Sign Up
            </NavLink>
          </Text>
        </Container>
      </ParticleBackground>
    </>
  );
};

export default Login;
