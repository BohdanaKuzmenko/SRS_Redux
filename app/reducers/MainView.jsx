import {SET_ACTIVE} from 'constants/MainView.jsx'
import Candidates from 'containers/CandidatesTab.jsx'
const initialState = {
    tabs: {
        "candidates": <Candidates/>,
        "possible matches": "-----------------------------------------------------------Possible Matches",
        "settings": "-----------------------------------------------------------Settings"
    },
    activeTab: "candidates"
};

export default function page(state = initialState, action) {
    switch (action.type) {
        case SET_ACTIVE:
            return {...state, activeTab: action.payload};
        default:
            return state;
    }
}