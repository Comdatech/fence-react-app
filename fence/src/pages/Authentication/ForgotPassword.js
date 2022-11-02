import React from 'react';
//import local assets 


//import local components
import ParticleBackground from "../../components/particleBackground";


//import external libraries and assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router-dom';
import {
  Container,
  Flex,
  Text,
  Alert,
  AlertIcon,
  FormControl,
  FormLabel,
  Button,
  InputGroup,
  InputLeftAddon,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


const ForgotPassword = () => {
    const emailIcon = <FontAwesomeIcon className="icon" icon={faEnvelope} />;

    document.title =
      "Reset Password | Comdatech";
  return (
    <>
      <ParticleBackground>
        <Container className="auth-page-content">
          <form>
            <Flex className="auth-card">
              <Flex className='pt-4'>
                <Text
                  bgGradient="linear(to-l, #138540, #259237)"
                  bgClip="text"
                  fontSize="xl"
                  className="heading-1 pb-2"
                >
                  Forgot Password?
                </Text>
              </Flex>
              <Flex>
                <Text fontSize="sm">Reset Password with Comdatech</Text>
              </Flex>
              <Flex>
                <lord-icon
                  src="https://cdn.lordicon.com/rhvddzym.json"
                  trigger="hover"
                  colors="primary:#259237,secondary:#08a88a"
                  style={{ width: "150px", height: "150px" }}
                ></lord-icon>
              </Flex>
              <Flex>
                <Alert className="mb-4" fontSize="sm" status="info">
                  <AlertIcon />
                  Enter your email and instructions will be sent to you!
                </Alert>
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
              <Flex>
                <Button
                  colorScheme="green"
                  variant="solid"
                  onClick={() => this.onSubmit()}
                >
                  Send Resend Link
                </Button>
              </Flex>
            </Flex>
          </form>
          <Text className="pt-4">
            Wait, I remember my password...{" "}
            <NavLink
              to="/"
              className="fw-semibold text-primary text-decoration-underline"
            >
              Click here
            </NavLink>
          </Text>
        </Container>
      </ParticleBackground>
    </>
  );
};

export default ForgotPassword;