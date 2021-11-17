import React from 'react';
import { Center, Button, Box,Stack } from '@chakra-ui/react';
import { Radio, RadioGroup } from "@chakra-ui/react"
import { FOne } from './FOne';
import { FTwo } from './FTwo';
import { FThree } from './FThree';
import { FFour } from './FFour';

export function QFirst() {
    const [value, setValue] = React.useState("1")
    return (
    <>
        <Box>
            <Center>
                <RadioGroup onChange={setValue} value={value}>
                    <Stack direction="row"spacing="5vw">
                        <Radio value="1">第一小问</Radio>
                        <Radio value="2">第二小问</Radio>
                        <Radio value="3">第三小问</Radio>
                        <Radio value="4">第四小问</Radio>
                    </Stack>
                </RadioGroup>
            </Center>
        </Box>
        
        {value=="1"? <FOne/>:""}
        {value=="2"? <FTwo/>:""}
        {value=="3"? <FThree/>:""}
        {value=="4"? <FFour/>:""}
        </>
    )
}