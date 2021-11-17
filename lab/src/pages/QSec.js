import React from 'react';
import { Center, Button, Box,Stack } from '@chakra-ui/react';
import { Radio, RadioGroup } from "@chakra-ui/react"
import { SOne } from './SOne';
import { STwo } from './STwo';
import { SThree } from './SThree';

export function QSec() {
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
                        </Stack>
                    </RadioGroup>
                </Center>
            </Box>
            {value=="1"? <SOne/>:""}
            {value=="2"? <STwo/>:""}
            {value=="3"? <SThree/>:""}
        </>
    )
}//