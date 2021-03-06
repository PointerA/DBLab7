import React from 'react';
import { Center, Box,Stack,Text } from '@chakra-ui/react';
import { Radio, RadioGroup } from "@chakra-ui/react"
import { QFirst } from './QFirst';
import { QSec } from './QSec';

export function MainPage() {
    const [value, setValue] = React.useState("1")
    return (
        
        <Box height="100vh" width="100vw" >
          <Text>19334019 代码已传GitHub，敬请批评指正</Text>
            <Center>
            <Box position="absolute" top="5%">
            <Stack direction="column"spacing={8}>
            <Box >
                <Center>
                  <RadioGroup onChange={setValue} value={value}>
                    <Stack direction="row"spacing="5vw">
                      <Radio value="1">第一题</Radio>
                      <Radio value="2">第二题</Radio>
                    </Stack>
                  </RadioGroup>
              </Center>
            </Box>
            {value=="1"?<QFirst/>:<QSec/>}
            </Stack></Box></Center>
        </Box>
    )
}