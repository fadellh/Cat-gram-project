import Axios from 'axios'
import {GET_SUCCESS,GET_FAILED,GET_START} from '../type'
import AsyncStorage from '@react-native-community/async-storage'

export const getDataImage = () => {
    return async dispatch => {
        dispatch({
            type: GET_START
        })
        try{

            let res = await Axios.get(`https://api.thecatapi.com/v1/images/search?limit=10`,{
                headers:{
                    'x-api-key':'37570547-f28a-45df-98e8-aa05d9229470'
                }
            })
            // console.log(res.data)
            dispatch({
                type: GET_SUCCESS,
                payload: res.data
            })
        }catch(err){
            dispatch({
                type:GET_FAILED,
                payload: err
            })
        }
    }
}