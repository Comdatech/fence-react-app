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
              <Flex className="auth-logo pb-3">
                <img src={logo} alt="Comdatech Logo" className="logo" />
                <Text
                  bgGradient="linear(to-l, #138540, #91e000)"
                  bgClip="text"
                  fontSize="2xl"
                  className="heading-1"
                >
                  Fence Monitoring App
                </Text>
              </Flex>
            </Flex>
            <Flex className=" p-3 pb-4 ">
              <FormControl >
                <FormLabel htmlFor="username">
                  Email
                </FormLabel>
                <Input
                  id="username"
                  name="username"
                  type="email"
                  placeholder="Email Address"
                  variant="filled"
                  bg="green.100"
                />
              </FormControl>
            </Flex>
            <Flex className='pb-4'>
              <FormControl className="p4 w100">
                <FormLabel htmlFor="password">
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
              <Box className="btn1"></Box>
            </Flex>
          </Flex>
        </Container>
      </ParticleBackground>
    </>
  );
}

export default Login