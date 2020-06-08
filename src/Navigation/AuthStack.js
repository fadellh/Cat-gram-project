import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Login from '../Screens/Login'

const AuthStack = () => {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator  initialRouteName="login" headerMode="none">
            <Stack.Screen name='login' component={Login} />
        </Stack.Navigator>
    )
}

export default AuthStack
