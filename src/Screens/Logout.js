import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { LogoutAction } from '../Redux/Action'

function Logout() {

    const dispatch = useDispatch()

    return (
        <View style={style.container} >
            <Button
                title='LOGOUT'
                onPress={()=>dispatch(LogoutAction())}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    }
})

export default Logout