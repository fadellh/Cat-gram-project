import React, { useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getDataImage } from '../Redux/Action/getAction'
import { FlatList } from 'react-native-gesture-handler'
import ImageView from '../Component/ImageView'

function Home({navigation}) {
const dispatch = useDispatch()

const {dataImage} = useSelector(state=>state.getData)

console.log(dataImage,"Ini dari home")
// console.log(dataImage[0].url,"Ini dari home")

useEffect(() => {
    dispatch(getDataImage())
}, [dispatch])


    return (
        <View style={{backgroundColor:'skyblue'}} >
           
            <FlatList
                data={dataImage}
                numColumns={2}
                // keyExtractor={({item}) => item.id}
                renderItem={({item})=>
                // <View style={{backgroundColor:'pink',flex:1}} >
                <TouchableOpacity style={{backgroundColor:'grey',flex:1}} 
                    onPress={()=>navigation.navigate('detail',{image:item.url})}
                >
                    <ImageView
                        image={item.url}
                        />
                </TouchableOpacity> 
                // </View>
            }
            />
        </View>
    )
}

export default Home
