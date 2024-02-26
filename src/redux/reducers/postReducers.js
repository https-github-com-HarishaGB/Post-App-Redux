
import { POST_API_STARTED, POST_DATA_SUCESSES, POST_DATA_FAILURE } from "../actions/actionType";

const initalState = {
    loading: false,
    data: [],
    error: ""
}

const postReducer = (state = initalState, action) => {

    switch(action.type){
        case POST_API_STARTED: return {...state, loading: true};

        case POST_DATA_SUCESSES: return(
            {...state, data: action.payload, loading: false, error:""});

        case POST_DATA_FAILURE: return(
            {...state, data: [], loading: false, error: action.payload});

        default: return state;    
    }
}

export default postReducer; 