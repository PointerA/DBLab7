import React from 'react';
import { Image,Text,Box } from '@chakra-ui/react';
import img from './b.png'

export function STwo() {
    
    return (
        <>
            <Box >
                <Text maxW="80vw" width="650px">
                Also write a function createDropDown(String) which does the same thing, 
                but instead of a ResultSet it takes an SQL query as a string; 
                the second version can be used safely as long as the query does not involve any value that the user inputs, 
                otherwise it would be vulnerable to SQL injection attacks.
                </Text>
            </Box>
            <Image
              src={img}
            />
        </>
    )
}