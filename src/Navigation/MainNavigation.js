import React, { useEffect } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import AuthStack from './AuthStack'
import { useSelector, useDispatch } from 'react-redux'
import { View, Text } from 'react-native'
import TabNav from './TabNav'
import AsyncStorage from '@react-native-community/async-storage'
import {KeepLogin} from '../Redux/Action'

function MainNavigation() {

    const username = useSelector(state => state.auth.username)

    const dispatch= useDispatch()

    useEffect(() => {
        AsyncStorage.getItem('token')
        .then(res => {
          console.log(res,"INI RES");
          dispatch(KeepLogin(res));
        //   dispatch(KeepDisplay(res));
        })
        .catch(err => {
          console.log(err, 'err');
        });
    }, [])


    return (
        <NavigationContainer>
            {username
            ?
            <TabNav/>
            :
            <AuthStack/>
            }
        </NavigationContainer>        
    )
}

export default MainNavigation
