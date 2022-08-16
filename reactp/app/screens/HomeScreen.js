import React from 'react';
import {Box,} from 'native-base'
import HomeSearch from './HomeSearch';
import HomeProducts from './HomeProducts';

function HomeScreen(props) {
    return (
        <Box flex={1} bg="white">
            <HomeSearch/>
            <HomeProducts/>
        </Box>
    );
}

export default HomeScreen;