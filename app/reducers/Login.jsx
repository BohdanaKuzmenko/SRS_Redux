import {SET_LOGIN, SET_PASSWORD, SET_AUTHORIZED} from 'constants/Login.jsx'

const initialState = {
    login: null, password: null, authorized: false
};

export default function Login(state = initialState, action) {
    switch (action.type) {
        case SET_LOGIN:
            return {...state, login: action.payload};
        case SET_PASSWORD:
            return {...state, password: action.payload};
        case SET_AUTHORIZED:{
            return {...state, authorized: action.payload}
        }
        default:
            return state;
    }
}