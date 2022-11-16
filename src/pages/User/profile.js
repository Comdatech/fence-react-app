//import local assets

//import local components

//import external libraries
import { Box, Divider, Flex, FormControl, FormHelperText, FormLabel, Input, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import PageLayout from '../../components/Navigation/pageLayout';

const Profile = () => {
    
  return (
    <>
      <PageLayout />
      <Flex marginLeft="12%" marginTop="24px">
        <Box boxShadow="2xl" w="90%" borderRadius="lg" p="6" overflow="auto">
          <form>
            <Flex className="pb-4" justify="space-between" align="center">
              <FormControl className="pl-2 pr-2">
                <FormLabel htmlFor="name">Name:</FormLabel>
                <Input
                  variant="filled"
                  type="text"
                  placeholder="Name"
                  bg="green.100"
                />
                <FormHelperText></FormHelperText>
              </FormControl>

              <FormControl className="pl-2 pr-2">
                <FormLabel htmlFor="email">Email:</FormLabel>
                <Input
                  variant="filled"
                  type="text"
                  placeholder="Email"
                  bg="green.100"
                />
                <FormHelperText></FormHelperText>
              </FormControl>
            </Flex>

            <Stack direction="column" className='pb-3 pt-2'>
              <Divider orientation="horizontal" />
              <Text>Address:</Text>
            </Stack>
            <Flex>
              <FormControl className="pl-2 pr-2">
                <FormLabel htmlFor="street_address">Street Address:</FormLabel>
                <Input
                  variant="filled"
                  type="text"
                  placeholder="1 Osborne Road"
                  bg="green.100"
                />
                <FormHelperText></FormHelperText>
              </FormControl>

              <FormControl className="pl-2 pr-2">
                <FormLabel htmlFor="town">Town/Suburb:</FormLabel>
                <Input
                  variant="filled"
                  type="text"
                  placeholder="Rosebank"
                  bg="green.100"
                />
                <FormHelperText></FormHelperText>
              </FormControl>
            </Flex>

            <Flex>
              <FormControl className="pl-2 pr-2">
                <FormLabel htmlFor="City">City:</FormLabel>
                <Input
                  variant="filled"
                  type="text"
                  placeholder="Cape Town"
                  bg="green.100"
                />
                <FormHelperText></FormHelperText>
              </FormControl>

              <FormControl className="pl-2 pr-2">
                <FormLabel htmlFor="province">Province:</FormLabel>
                <Input
                  variant="filled"
                  type="text"
                  placeholder="Western Cape"
                  bg="green.100"
                />
                <FormHelperText></FormHelperText>
              </FormControl>
            </Flex>

            <Flex>
              <FormControl className="pl-2 pr-2">
                <FormLabel htmlFor="Country">Country:</FormLabel>
                <Input
                  variant="filled"
                  type="text"
                  placeholder="South Africa"
                  bg="green.100"
                />
                <FormHelperText></FormHelperText>
              </FormControl>

              <FormControl className="pl-2 pr-2">
                <FormLabel htmlFor="zip_code">Zip code:</FormLabel>
                <Input
                  variant="filled"
                  type="number"
                  placeholder="7700"
                  bg="green.100"
                />
                <FormHelperText></FormHelperText>
              </FormControl>
            </Flex>
          </form>
        </Box>
      </Flex>
    </>
  );
}

export default Profile;