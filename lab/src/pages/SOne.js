import React from 'react';
import { Image,Text,Box } from '@chakra-ui/react';
import img from './a.png'

export function SOne() {
    
    return (
        <>
            <Box >
                <Text maxW="80vw" width="650px">
                Write a function createDropDown(ResultSet) that takes a ResultSet,
                 and creates a drop-down menu from the ResultSet; 
                 the first attribute is used as the result value, 
                 and all attributes are displayed in the drop-down menu, concatenated together.
                </Text>
            </Box>
            <Image
              src={img}
            />
        </>
    )
}