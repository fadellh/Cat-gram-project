import React, { useState } from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import {Icon,Button} from 'react-native-elements'
import {loginAction} from '../Redux/Action'
import { useDispatch } from 'react-redux'


function Login() {
    
    const [username, setUsername] = useState('')
    const dispatch = useDispatch()


    return (
        <View style={{backgroundColor:'white',flex:1,justifyContent:'center',padding:9}} >
            <Icon name='android' color="#3DDC84" size={150}/>
            <View style={{borderBottomWidth:1,borderBottomColor:'grey',marginBottom:3}} >
            <TextInput placeholder='username' onChangeText={(e)=>setUsername(e)}  />
            </View>
            <View style={{alignItems:'center'}} >
            <Button 
            title="Login" 
            buttonStyle={{backgroundColor:'#3DDC84',width:90}}
            onPress={()=> dispatch(loginAction(username))}
            />
            </View>
    
        </View>
    )
}

export default Login
