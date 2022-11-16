//import local assets

//import local components
import PageLayout from "../../components/Navigation/pageLayout";

//import external libraries and assets
import React from "react";
import { Box, Flex, FormControl, FormHelperText, FormLabel, Input, Select, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";


const Configurations = () => {
  return (
    <>
      <PageLayout />
      <Flex marginLeft="12%" marginTop="24px">
        <Tabs isFitted colorScheme="green" w="90%">
          <TabList>
            <Tab>Device Configuration</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Box
                boxShadow="2xl"
                w="100%"
                borderRadius="lg"
                p="6"
                overflow="auto"
              >
                <form>
                  <Flex className="pb-4" justify="space-between" align="center">
                    <FormControl className="pl-2 pr-2">
                      <FormLabel htmlFor="device_id">Device ID:</FormLabel>
                      <Select
                        bg="green.100"
                        variant="filled"
                        placeholder="Select Device"
                      >
                        <option>Device 1</option>
                        <option>Device 2</option>
                        <option>Device 3</option>
                        <option>Device 4</option>
                        <option>Device 5</option>
                        <option>Device 6</option>
                      </Select>
                      <FormHelperText></FormHelperText>
                    </FormControl>

                    <FormControl className="pl-2 pr-2">
                      <FormLabel htmlFor="device_name">Device Name:</FormLabel>
                      <Input
                        variant="filled"
                        type="text"
                        placeholder="Enter Device Name"
                        bg="green.100"
                      />
                      <FormHelperText></FormHelperText>
                    </FormControl>
                  </Flex>

                  <Flex className="pb-4">
                    <FormControl className="pl-2 pr-2">
                      <FormLabel htmlFor="lat">Latitude:</FormLabel>
                      <Input
                        variant="filled"
                        type="text"
                        placeholder="Enter Device Latitude"
                        bg="green.100"
                      />
                      <FormHelperText></FormHelperText>
                    </FormControl>
                    <FormControl className="pl-2 pr-2">
                      <FormLabel htmlFor="long">Longitude:</FormLabel>
                      <Input
                        variant="filled"
                        type="text"
                        placeholder="Enter Device Longitude"
                        bg="green.100"
                      />
                      <FormHelperText></FormHelperText>
                    </FormControl>
                  </Flex>
                </form>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
}

export default Configurations