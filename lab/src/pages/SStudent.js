import React, {useEffect} from 'react';
import { Center, Button, Box,Stack,Text,Input,HStack,useToast,Select } from '@chakra-ui/react';

export function SStudent(props) {
    const [value1, setValue1] = React.useState("")
    const [value2, setValue2] = React.useState("")
    const [value3, setValue3] = React.useState("")
    const handleChange1 = (event) => setValue1(event.target.value)
    const handleChange2 = (event) => setValue2(event.target.value)
    const handleChange3 = (event) => {
        setValue3(event.target.selectedOptions[0].value)
    }
    const toast = useToast()
    const handleClick = ()=>{
      const fd={
        "query":"query4",
        "id":value1,
        "name":value2,
        "dept":value3,
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
        <Select placeholder="Select the department" value={value3} onChange={handleChange3}>
            {props.op}
        </Select>
        </HStack></Center>

        <Center><Button maxW="100px" onClick={handleClick} colorScheme="blue">
          Summit
        </Button></Center>
        </Stack>
        </>
    )
}