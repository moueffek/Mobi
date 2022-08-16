import { Text, View } from 'native-base';
import React, { useState } from 'react';
import { useWindowDimensions,StyleSheet } from 'react-native';
import { SceneMap ,TabBar,TabView} from 'react-native-tab-view';
import Orders from './Orders';
import Profile from './Profile';

const renderScene= SceneMap({
    first:Profile,
    second:Orders
})


export default function Tabs() {
    const layout = useWindowDimensions();
    const [index,setIndex]=useState(0)
    const [routes] = useState([
        {
            key:"first",
            title:"PROFILE"
        },
        {
            key:"second",
            title:"ORDERS"
        }
    ]);

    const renderTabsBar = (props) =>(
        <TabBar {...props} 
        tabStyle={styles.tabStyle} 
        indicatorStyle={{backgroundColor:"black"}}
        activeColor="#DC3885" 
        inactiveColor='white'
        renderLabel={({route,color} )=><Text style={{color,...styles.text}}>{route.title}</Text>}       
        />
    );


    return (
        <TabView navigationState={{ index,routes }}
        renderScene={renderScene}
        onIndexChange={setIndex} 
        initialLayout={{ width:layout.width }}
        renderTabBar={renderTabsBar}
        />
    );
}

const styles = StyleSheet.create({
    tabStyle:{
        backgroundColor:"black"
    },
    text: {
        fontSize:13,
        fontWeight:"bold"
    }

    
});