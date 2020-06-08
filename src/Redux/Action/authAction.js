import Axios from 'axios'
import {AUTH_FAILED,AUTH_START,AUTH_LOG_OUT, AUTH_SUCCESS,DISPLAY_PIC} from '../type'
import AsyncStorage from '@react-native-community/async-storage'



export const loginAction = (username) => {
    return  dispatch => {
        dispatch({
            type: AUTH_START
        })
        try{
            console.log(username)
            dispatch({
                type: AUTH_SUCCESS,
                payload: username
            })
        AsyncStorage.setItem('token',username)
        }catch(err){
            dispatch({
                type:AUTH_FAILED,
                payload: err
            })
        }
    }
}
export const displayAction = (image) => {
    return  dispatch => {
        dispatch({
            type: AUTH_START
        })
        try{
            console.log(image,'dari action displya')
            dispatch({
                type: DISPLAY_PIC,
                payload: image
            })
        AsyncStorage.setItem('image',image)
        }catch(err){
            dispatch({
                type:AUTH_FAILED,
                payload: err
            })
        }
    }
}

export const KeepLogin = (token) => {
    return dispatch => {
        console.log('MASUK KEEP LOGIN')
        dispatch({
            type: AUTH_START
        })
        try{
            console.log(token, "INI TOKEN")
            if(!token) return dispatch({type:AUTH_FAILED})
            dispatch({
                type: AUTH_SUCCESS,
                payload: token
            })
            console.log('success')
        }catch(err){
            dispatch({
                type: AUTH_FAILED,
            })
        }
    }
}
export const KeepDisplay = (image) => {
    return dispatch => {
        console.log('MASUK KEEP DP')
        dispatch({
            type: AUTH_START
        })
        try{
            console.log(image, "INI Keep DP")
            // if(!token) return dispatch({type:AUTH_FAILED})
            dispatch({
                type: DISPLAY_PIC,
                payload: image
            })
            console.log('success')
        }catch(err){
            dispatch({
                type: AUTH_FAILED,
            })
        }
    }
}

export const LogoutAction = () => {
    return dispatch => {
        try{

            AsyncStorage.removeItem('token')

            dispatch({
                type: AUTH_LOG_OUT
            })
        }catch(err){
            dispatch({
                type: AUTH_FAILED
            })
        }

    }
}