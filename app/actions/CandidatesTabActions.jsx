import {SET_TABLE_DATA, SET_SORT_ORDER, SET_SORT_INDEX} from 'constants/CandidatesTab.jsx'

export function setTableData(tableData) {
    return {
        type: SET_TABLE_DATA,
        payload: tableData
    }
}
export function updateSort(sortHeader) {
    return {
        type: SET_SORT_ORDER,
        payload: sortHeader
    }
}

