import { SET_USER, SET_USER_LOADING } from './../actionTypes';

export const setUserLoading = () => {
    return {
        type: SET_USER_LOADING,
    }
}

export const setUser = (payload) => {
    return {
        type: SET_USER,
        payload,
    }
}