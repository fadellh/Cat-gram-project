import React from 'react'
import { View, Text } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
import Home from '../Screens/Home'
import Profile from '../Screens/Profile'
import HomeNavigation from './HomeNavigation'
import ProfileDrawer from './ProfileDrawer'

const Tab = createBottomTabNavigator()

function TabNav() {
    return(
        <Tab.Navigator
        initialRouteName='home'
        tabBarOptions={{showLabel:true,activeTintColor:'#3DDC84',
        inactiveTintColor:'gray'}}
        screenOptions={({route})=>({
            tabBarIcon: ({color}) => {
                let iconName;
                if(route.name === 'home'){
                    iconName ='home'
                }else if(route.name === 'profiledrawer'){
                    iconName = 'account-circle'
                }
                return (
                    <Icon name={iconName} type='material' size={28} color={color}/>
                    )
                }
            })}>
        <Tab.Screen name='home' component={HomeNavigation} />
        <Tab.Screen name='profiledrawer' component={ProfileDrawer} />
    </Tab.Navigator>
)
}

export default TabNav