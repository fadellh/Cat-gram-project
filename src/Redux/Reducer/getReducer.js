import { GET_START, GET_SUCCESS, GET_FAILED } from "../type"

const INITIAL_STATE= {
    dataImage:[],
    loading:false,
}

export const getReducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        case GET_START:
            return {
            ...state,
            loading: true
        }
        case GET_SUCCESS:
            return{
                ...state,
                dataImage: action.payload,
                loading: false
            }
        case GET_FAILED:
            return{
                ...state,
                ...action.payload,
                loading: false
            }

        default: 
            return state
    }
}