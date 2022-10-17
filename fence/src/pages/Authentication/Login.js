import { Container, Flex, Text, FormControl, FormLabel, Input, Button, Box  } from '@chakra-ui/react';
import React from 'react';
import "../../assets/scss/pages/authentication.scss";
import ParticleBackground from '../../components/particleBackground';
import logo from "../../assets/icons/comdatech-icon-colour-dark.png"

const Login = () => {
  return (
    <>
      <ParticleBackground>
        <Container className="auth-page-content">
          <Flex className="auth-card">
            <Flex className="ai-center jc-center fd-col">
              <Flex className='auth-logo'>
                <img src={logo} alt="Comdatech Logo" className="logo" />
              </Flex>
              <FormControl>
                <Text
                  //bgGradient="linear(to-l, #5c2331, #b11225)"
                  bgClip="text"
                  className="heading-1 w80"
                >
                  Welcome back!
                </Text>
              </FormControl>
            </Flex>
            <Flex className="mt6">
              <FormControl className="p4 w100">
                <FormLabel htmlFor="username" className="fw600">
                  Username or email address
                </FormLabel>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Username"
                  variant="filled"
                  bg="green.100"
                />
              </FormControl>
            </Flex>
            <Flex>
              <FormControl className="p4 w100">
                <FormLabel htmlFor="password" className="fw600">
                  Password
                </FormLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  variant="filled"
                  bg="green.100"
                />
              </FormControl>
            </Flex>
            <Flex className="ai-center jc-center">
              <Button
                colorScheme="green"
                variant="solid"
                onClick={() => this.onSubmit()}
              >
                Login
              </Button>
              <Box className="btn1">

              </Box>
            </Flex>
          </Flex>
        </Container>
      </ParticleBackground>
    </>
  );
}

export default Login