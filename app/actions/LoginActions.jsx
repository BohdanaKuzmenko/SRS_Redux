import {SET_LOGIN, SET_PASSWORD, SET_AUTHORIZED} from 'constants/Login.jsx'

export function setLogin(login) {
    return {
        type: SET_LOGIN,
        payload: login
    }
}
export function setPassword(password) {
    return {
        type: SET_PASSWORD,
        payload: password
    }
}

export function setAuthorized(authorized) {
    return {
        type: SET_AUTHORIZED,
        payload: authorized
    }
}