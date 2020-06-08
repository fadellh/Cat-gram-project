import React, { useEffect } from 'react'
import { View, Text,Image } from 'react-native'
import { KeepDisplay } from '../Redux/Action';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage'

function Setting() {

     const dispatch = useDispatch()

    // useEffect(() => {
    //     AsyncStorage.getItem('image')
    //     .then(res => {
    //       console.log(res,"INI IMage");
    //       dispatch(KeepDisplay(res));
    //     })
    //     .catch(err => {
    //       console.log(err, 'err');
    //     });
    // }, [])

    const display = useSelector(state=> state.auth.image)
    const username = useSelector(state=> state.auth.username)
    console.log(display,"INII DISPLAY")

    return (
        <View style={{justifyContent:'center',flex:1,alignItems:'center'}} >
            <Image  style={{backgroundColor:'grey',height:250,width:250}} 
                source={display?{uri:`${display}`}:require('./defaultpicture.jpg')}
            />
            <Text>{username}</Text>
        </View>
    )
}

export default Setting