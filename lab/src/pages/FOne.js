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

export function FOne() {
    const [value, setValue] = React.useState("")
    const [name, setName] = React.useState("")
    const [dept, setDept] = React.useState("")
    const [table, setTable] = React.useState("")
    const toast = useToast()
    const handleChange = (event) => setValue(event.target.value)
    const handleClick = ()=>{
      const fd={
        "query":"query1",
        "data":value
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
                  setName(data['student'])
                  setDept(data['dept'])
                  if(data.course.length != 0){
                    const item = data.course.map((i)=>
                    <Tr>
                      <Td >{i[0]}</Td>
                      <Td >{i[1]}</Td>
                      <Td >{i[2]}</Td>
                      <Td >{i[3]}</Td>
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
            <Text maxW="80vw" width="650px">Accept a roll number, and display the following data about the 
            student:
             name, department, and all courses taken, in tabular form: 
             list the course id, title, credits and grade (show a blank if the grade is null)
            </Text>
        </Box>
        <Center>
        <InputGroup maxW="80vw" width="450px">
        <Input
          value={value}
          onChange={handleChange}
          placeholder="Please input the roll number."
        />
        <InputRightElement width="4.5rem">
        <Button h="1.75rem"  onClick={handleClick} colorScheme="blue">
          Summit
        </Button>
        </InputRightElement>
        </InputGroup>
        </Center>
        <Text mb="8px" color="blue.300">Roll number: {value}</Text>
        <Text color="blue.300">Name: {name}</Text>
        <Text color="blue.300">Department: {dept}</Text>
        <Center>
        <Table variant="simple" maxW="50vw">
            <Thead>
              <Tr>
                <Th>course id</Th>
                <Th>course title</Th>
                <Th>credits</Th>
                <Th>grade</Th>
              </Tr>
            </Thead>
            <Tbody>
              {table}
            </Tbody>
        </Table></Center>
        </>
    )
}