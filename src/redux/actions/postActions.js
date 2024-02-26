import {POST_API_STARTED, POST_DATA_SUCESSES, POST_DATA_FAILURE} from './actionType';
import axios from 'axios';
// import { useDispatch } from 'react-redux';

// const dispatch = useDispatch();

export const postApiStarted = () =>{

    return {
        type: POST_API_STARTED
    }
}

export const postDataSuccess = (data) =>{
    return {
        type: POST_DATA_SUCESSES,
        payload: data
    }
}

export const postDataFailure = (error) => {
    return{
        type: POST_DATA_FAILURE,
        payload: error
    }
}

//action creator
export function postRequest(){
    return (dispatch)=>{ //dispatch is given by thunk
        dispatch(postApiStarted());
        axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
        .then(Response => dispatch (postDataSuccess(Response.data)))
        .catch(err => dispatch(postDataFailure(err.message)))
    }
}