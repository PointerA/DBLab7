import React from 'react';
import { Center, Button, Box,Stack,Text,Input,InputRightElement,InputGroup,useToast } from '@chakra-ui/react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
  } from "@chakra-ui/react"

export function FThree() {
    const [value, setValue] = React.useState("")
    const [table, setTable] = React.useState("")
    const toast = useToast()
    const handleChange = (event) => setValue(event.target.value)
    const handleClick = ()=>{
      const fd={
        "query":"query3"
      }
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fd),
        };
        fetch('http://127.0.0.1:5123/db', requestOptions)
            .then(response => response.json())
            .then(data => {
              console.log(data)
              if(data.status == 0){
                if(data.name.length != 0){
                  const item = data.name.map((i)=>
                  <Tr>
                    <Td></Td>
                    <Td >{i}</Td>
                  </Tr>)
                  setTable(item)
                }else{
                  setTable(<Text color="blue.200">No course record!</Text>)
                }
              }else{
                toast({
                    title: "Error!",
                    description: data.message,
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                    position:"top"
                })
              }
            })
            //.catch()
    }
    return (
        <>
        <Box >
            <Text  maxW="80vw" width="650px">
            Show all students with two or more fail grades; no need to show the courses they have failed, and I don't care if they passed the course subsequently.
            </Text>
        </Box>
        <Center>
            <Button maxW="100px" onClick={handleClick} colorScheme="blue">
              Start query
            </Button>
        </Center>
        <Center>
        <Table variant="simple" maxW="50vw" width="300px">
            <Thead>
              <Tr>
                <Th></Th>
                <Th>name</Th>
              </Tr>
            </Thead>
            <Tbody>
              {table}
            </Tbody>
        </Table></Center>
        </>
    )
}