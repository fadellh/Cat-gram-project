import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Screens/Home'
import { Text, View, StyleSheet, Image,Button, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { displayAction } from '../Redux/Action'

const Stack = createStackNavigator()


const detail = ({route,navigation}) => {
    console.log(route.params.image,"dari Detail")
    const image= route.params.image

    const dispatch = useDispatch()

    const handleImage = (navigation,image) => {
        navigation.navigate('homestack')
        dispatch(displayAction(image))
    }

    return(
        <View style={style.container}>
            <View>
            <Image  style={{backgroundColor:'grey',height:250,marginBottom:15}} 
            source={{uri:`${image}`}} 
            />
            </View>
            <TouchableOpacity style={{backgroundColor:'#3DDC84',height:30,width:150,alignSelf:'center'}}
                onPress={()=>handleImage(navigation,image)}

            >
                <Text style={{color:'white',fontWeight:'500',textAlign:'center',justifyContent:'center',alignItems:'center'}} >Set As Display Picture</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        // alignItems:'center'
    },
    text:{
        marginVertical:10
    }
})

function HomeNavigation() {
    return (
        <Stack.Navigator  initialRouteName="homestack"  >
            <Stack.Screen name='homestack' component={Home} options={{headerShown:false}} />
            <Stack.Screen name='detail' component={detail}/>
        </Stack.Navigator>
    )
}

export default HomeNavigation