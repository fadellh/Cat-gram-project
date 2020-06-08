import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

function ImageView({image,navigation}) {
    console.log(image,"INI dari image")
    return (
        // <TouchableOpacity style={{backgroundColor:'pink',flex:1}} 
        //     onPress={()=>navigation.navigate('detail',{image:{image}})}
        
        // >
            <View>
            <Image  style={{backgroundColor:'grey',height:250}} 
            source={{uri:`${image}`}} 
            />
            </View>
        // </TouchableOpacity>
    )
}

export default ImageView
