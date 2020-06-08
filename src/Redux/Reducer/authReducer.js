import { AUTH_START, AUTH_SUCCESS, AUTH_FAILED, AUTH_LOG_OUT, DISPLAY_PIC } from "../type"

const INTIAL_STATE={
    username:'',
    loading: false,
    image:'',
    error:''
}

export const authReducer = (state=INTIAL_STATE,action) => {
    switch(action.type){
        case AUTH_START:
            return {
            ...state,
            loading: true
        }
        case AUTH_SUCCESS:
            return{
                ...state,
                username: action.payload,
                loading: false
            }
        case DISPLAY_PIC:
            return{
                ...state,
                username: action.payload,
                loading: false
            }
        case AUTH_LOG_OUT:
            return{
                ...state,
                username: "",
                loading: false
            }

        case AUTH_FAILED:
            return{
                ...state,
                ...action.payload,
                loading: false
            }
        default: 
            return state
    }
}

