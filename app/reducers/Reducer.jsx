import {combineReducers} from 'redux'
import mainView from 'reducers/MainView.jsx'
import user from 'reducers/Login.jsx'
import candidates from 'reducers/CandidatesTab.jsx'

export default combineReducers({
    user,
    mainView,
    candidates
})