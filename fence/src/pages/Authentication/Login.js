import React from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  FormControl,
  Flex,
  FormLabel,
  Input,
  Text,
  Button,
} from "@chakra-ui/react";
import logo from "../../assets/icons/comdatech-logo-colour-dark.png";
import "../../assets/scss/pages/_authentication.scss";

const Login = () => {
  return (
    <>
      <main className="login">
        <Tabs
          variant="enclosed-colored"
          size="lg"
          align="center"
          justifyItems="center"
          isLazy
          colorScheme="red"
          padding="150px"
        >
          <TabList>
            <Tab>Login</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box bg="whiteAlpha.900" className="tab1">
                <form>
                  <Flex className="ai-center jc-center fd-col">
                    <Flex>
                      <img src={logo} alt="Sawro Logo" className="logo" />
                    </Flex>
                    <FormControl>
                      <Text
                        bgGradient="linear(to-l, #5c2331, #b11225)"
                        bgClip="text"
                        className="heading-1 w80"
                      >
                        Welcome Back !
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
                        bg="red.100"
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
                        bg="red.100"
                      />
                    </FormControl>
                  </Flex>
                  <Flex className="ai-center jc-center">
                    <Button
                      colorScheme="red"
                      variant="solid"
                      onClick={() => this.onSubmit()}
                    >
                      Login
                    </Button>
                  </Flex>
                </form>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </main>
    </>
  );
}

export default Login