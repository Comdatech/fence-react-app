import {  Button, Container, Flex, FormControl, FormLabel, Input, InputGroup, InputLeftAddon, InputRightElement, Text } from '@chakra-ui/react';
import React from 'react';
import "../../assets/scss/pages/authentication.scss";
import ParticleBackground from "../../components/particleBackground";
import {
  faEnvelope,
  faUser,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router-dom';
const SignUp = () => {
    const emailIcon = <FontAwesomeIcon className="icon" icon={faEnvelope} />;
    const userIcon = <FontAwesomeIcon className="icon" icon={faUser} />;
    const lockIcon = <FontAwesomeIcon className="icon" icon={faLock} />;

    document.title = "Sign Up | Comdatech";
  return (
    <>
      <ParticleBackground>
        <Container className="auth-page-content">
          <form>
            <Flex className="auth-card">
              <Flex className="pt-4">
                <Text
                  bgGradient="linear(to-l, #138540, #259237)"
                  bgClip="text"
                  fontSize="xl"
                  className="heading-1 pb-1"
                >
                  Create New Account
                </Text>
              </Flex>

              <Flex className="pb-5">
                <Text fontSize="sm">Get your free Comdatech account now</Text>
              </Flex>
              <Flex className="pb-4">
                <FormControl isRequired>
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
                <FormControl isRequired>
                  <FormLabel fontSize="sm" htmlFor="name">
                    (Company) Name
                  </FormLabel>
                  <InputGroup>
                    <InputLeftAddon>{userIcon}</InputLeftAddon>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter(Company) Name"
                      variant="filled"
                      bg="green.100"
                    />
                    <InputRightElement className="dummy-icon">
                      {userIcon}
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </Flex>

              <Flex className="pb-4">
                <FormControl isRequired>
                  <FormLabel fontSize="sm" htmlFor="password">
                    Password
                  </FormLabel>
                  <InputGroup>
                    <InputLeftAddon>{lockIcon}</InputLeftAddon>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter Password"
                      variant="filled"
                      bg="green.100"
                    />
                    <InputRightElement className="dummy-icon">
                      {lockIcon}
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </Flex>
              <Flex>
                <FormControl isRequired>
                  <FormLabel fontSize="sm" htmlFor="confirm-password">
                    Confirm Password
                  </FormLabel>
                  <InputGroup>
                    <InputLeftAddon>{lockIcon}</InputLeftAddon>
                    <Input
                      id="confirm-password"
                      name="confirm-password"
                      type="password"
                      placeholder="Confirm Password"
                      variant="filled"
                      bg="green.100"
                    />
                    <InputRightElement className="dummy-icon">
                      {lockIcon}
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </Flex>
              <Flex className='pb-4 pt-2'>
                <Text fontSize="xs">
                  By registering you agree to the Comdatech{" "}
                  <NavLink
                    to="/terms-and-conditions"
                    className="fw-semibold text-primary text-decoration-underline"
                  >
                    Terms Of Use
                  </NavLink>
                </Text>
              </Flex>

              <Flex>
                <Button
                  colorScheme="green"
                  variant="solid"
                  onClick={() => this.onSubmit()}
                >
                  Sign Up
                </Button>
              </Flex>
            </Flex>
          </form>

          <Text className="pt-4">
            Already have an account ?{" "}
            <NavLink
              to="/"
              className="fw-semibold text-primary text-decoration-underline"
            >
              Sign In
            </NavLink>
          </Text>
        </Container>
      </ParticleBackground>
    </>
  );
}

export default SignUp