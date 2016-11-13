import {SET_TABLE_DATA, SET_SORT_ORDER, SET_SORT_INDEX} from 'constants/CandidatesTab.jsx'

const initialState = {
    tableData: null,
    tableHeader: {
        first_name: {field: "firstName", label: "First Name", sortIndex: null, order: null},
        last_name: {field: "lastName", label: "Last Name", sortIndex: null, order: null},
        middle_name: {field: "middleName", label: "Middle Name", sortIndex: null, order: null},
        matches_found: {field: "candidates", label: "Found Matches", sortIndex: null, order: null},
        load_date: {field: "loadDate", label: "Load Date", sortIndex: null, order: null},
        last_check_date: {field: "lastCheckDate", label: "Last Check Update", sortIndex: null, order: null},
        firm_name: {field: "firmName", label: "Company", sortIndex: null, order: null},
        agency_name: {field: "agencyName", label: "Client", sortIndex: null, order: null},
        backdoor: {field: "backdoor", label: "Backdoor status", sortIndex: null, order: null}
    },
};

export default function candidatesTab(state = initialState, action) {
    switch (action.type) {
        case SET_TABLE_DATA:
            return {...state, tableData: action.payload};
        case SET_SORT_ORDER:
            return {...state, tableHeader: action.payload}
        case SET_SORT_INDEX:
            return {...state, tableHeader: action.payload}
        default:
            return state;
    }
}