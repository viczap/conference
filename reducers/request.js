import {
    GET_ALL_SUCCESS,
    PUT_FAILURE,
    PUT_SUCCESS,
    UPDATE_STATUS,
    GET_ALL_FAILURE,
} from "../actions/request";

export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    ERROR: "error",
};

export const requestReducer = (state, action) => {
    switch (action.type) {
        case GET_ALL_SUCCESS:
            return {
                ...state,
                records: action.records,
                status: REQUEST_STATUS.SUCCESS,
            };
        case UPDATE_STATUS:
            return { ...state, status: action.status };
        case GET_ALL_FAILURE:
            return {
                ...state,
                status: REQUEST_STATUS.ERROR,
                error: action.error,
            };
        case PUT_SUCCESS:
            const { records } = state;
            const { record } = action;
            const recordIndex = records.map((r) => r.id).indexOf(record.id);
            return {
                ...state,
                records: [
                    ...records.slice(0, recordIndex),
                    record,
                    ...records.slice(recordIndex + 1),
                ],
            };
        case PUT_FAILURE:
            console.log(
                "PUT_FAILURE: Currently just logging to console without refreshing records..."
            );
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
};
