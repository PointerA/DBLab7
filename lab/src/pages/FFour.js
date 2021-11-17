import React from 'react';
import { Center, Button, Box,Stack,Text,Input,InputRightElement,InputGroup,HStack,useToast } from '@chakra-ui/react';

export function FFour() {
    const [value1, setValue1] = React.useState("")
    const [value2, setValue2] = React.useState("")
    const [value3, setValue3] = React.useState("")
    const handleChange1 = (event) => setValue1(event.target.value)
    const handleChange2 = (event) => setValue2(event.target.value)
    const handleChange3 = (event) => setValue3(event.target.value)
    const toast = useToast()
    const handleClick = ()=>{
      const fd={
        "query":"query4",
        "id":value1,
        "name":value2,
        "dept":value3
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
                    toast({
                        title: "Inserted Successfully.",
                        description: "We've insert this student",
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                        position:"top"
                    })
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
            <Text maxW="80vw" width="650px">Take a roll number, name and department name, and insert a new student record with tot_creds set to 0. 
            Make sure you catch exceptions and report them (and test it with an incorrect department name,
             to see what happens when a foreign key constraint is violated, and similarly with a duplicate roll number,
              to see what happens when a primary key constraint is violated). Make sure also to close connections, 
              even if there is an exception.
            </Text>
        </Box>
        <Stack spacing={8}>

        <Center><HStack maxW="600px" width="400px"><Text color="blue.300">Roll number</Text>
        <Input
          value={value1}
          onChange={handleChange1}
          placeholder="Please input the roll number."
        /></HStack></Center>

        <Center><HStack maxW="600px" width="400px"><Text color="blue.300">Name</Text>
        <Input 
          value={value2}
          onChange={handleChange2}
          placeholder="Please input the name."
        /></HStack></Center>

        <Center><HStack maxW="600px" width="400px"><Text color="blue.300">Department</Text>
        <Input 
          value={value3}
          onChange={handleChange3}
          placeholder="Please input the department."
        /></HStack></Center>

        <Center><Button maxW="100px" onClick={handleClick} colorScheme="blue">
          Summit
        </Button></Center>
        </Stack>
        </>
    )
}