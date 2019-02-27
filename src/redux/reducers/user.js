import { SET_USER, SET_USER_LOADING } from './../actionTypes';

const data = localStorage.getItem('user');


let initialState = {
    isLoaded: false,
    isLoading: false,
}

if (data) {
    initialState = {
        ...initialState,
        ...JSON.parse(data),
        isLoaded: true,
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_USER_LOADING: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case SET_USER: {
            return {
                ...state,
                ...action.payload,
                isLoaded: true,
                isLoading: false,
            }
        }
        default:
            return state;
    }
}