import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CommonActions, TabActions} from '@react-navigation/native';
import Logout from '../Screens/Logout';
import { View, Text } from 'react-native';
import Setting from '../Screens/Profile'


const Drawer = createDrawerNavigator();

const ProfileDrawer = () => {
    
    // const Setting = () => {
    //         <View>
    //             <Text>Setting</Text>
    //         </View>
    // }
    return (
        // <Drawer.Navigator>
        //     <Drawer.Screen name='profile' component={Logout} />
        //     {/* <Drawer.Screen/> */}
        // </Drawer.Navigator>

      <Drawer.Navigator
        initialRouteName="Setting"
        drawerType="slide"
        drawerPosition="right">
        <Drawer.Screen
          name="Profile"
          component={Logout}
        //   options={{title: 'Profile'}}
        />
        <Drawer.Screen name="Setting" component={Setting} />
      </Drawer.Navigator>
    );
  };
  
  export default ProfileDrawer;
  