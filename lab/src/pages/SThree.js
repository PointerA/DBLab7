import React, {useEffect} from 'react';
import { Center, Button, Box,Stack,Text,RadioGroup,Radio } from '@chakra-ui/react';
import { SStudent } from './SStudent';
import { SInstructor } from './SInstructor';

export function SThree() {
    const [op, setOp] = React.useState("")
    const [value, setValue] = React.useState("1")

    const createDropDown1 = (ResultSet)=>{
        const item = ResultSet.map((i)=>
            <option value={i}>{i}</option>
        )
        setOp(item)
    }
    const createDropDown2 = (sql)=>{
        const fd={
            "query":"query5",
            "data":sql
          }
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(fd),
        };
        fetch('http://127.0.0.1:5123/db', requestOptions)
            .then(response => response.json())
            .then(data => {
                createDropDown1(data.data)
            })
    }
    useEffect(()=>{
        createDropDown2("select dept_name from department")
    },[])

    return (
        <>
        <Box >
            <Text maxW="80vw" width="650px">
                Create form interfaces to insert records for the student and instructor tables, 
                with a drop-down menu for the department name, showing all valid department names.
                 As before, exceptions should be caught and reported.
            </Text>
        </Box>
        <Box>
            <Center>
                <RadioGroup onChange={setValue} value={value}>
                    <Stack direction="row"spacing="5vw">
                        <Radio value="1">Insert into student</Radio>
                        <Radio value="2">Insert into instructor</Radio>
                    </Stack>
                </RadioGroup>
            </Center>
        </Box>
        {value=="1"? <SStudent op={op}/>:<SInstructor op={op}/>}
        </>
    )
}