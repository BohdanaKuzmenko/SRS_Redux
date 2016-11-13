import {SET_ACTIVE} from 'constants/MainView.jsx'
export function setActiveTab(activeTab) {
    return {
        type: SET_ACTIVE,
        payload: activeTab
    }
}