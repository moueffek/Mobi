import { Center ,Text} from 'native-base';
import React from 'react';

function Message() {
    return (
        <Center bg='white' p={4} rounded={5}>
            <Text color="black" fontSize={12}>
                i am just testing the text area in the review 
                i still dont know if it fits the whole message or not  
            </Text>
        </Center>
    );
}

export default Message;