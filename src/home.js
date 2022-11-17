

//import local assets 

//import local components
import PageLayout from './components/Navigation/pageLayout';

//import external libraries and assets 
import React, {useEffect, useState} from 'react';
import { Flex } from "@chakra-ui/react";

const Home = () => {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])
  
  return (
    <>
      <PageLayout/>
      <Flex marginTop="100px" marginLeft="100px">
        {(typeof backendData.users === 'undefined')? (
          <p>Loading...</p>
        ):(
          backendData.users.map((user, i) => (
            <p key={i}>{user}</p>
          ))
        )}
      </Flex>
    </>
  )
}

export default Home;