import * as actionTypes from '../actions/actionTypes';

const initialState = {
    list: [],
    listLoading: false,
};

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_DATA_TRIGGERED: {
            return {
                ...state,
                listLoading: true,
                list: initialState.list,
            };
        }
        case actionTypes.FETCH_DATA_FAILED: {
            return {
                ...state,
                listLoading: initialState.listLoading,
                list: initialState.list,
            };
        }
        case actionTypes.FETCH_DATA_SUCCESS: {
            return {
                ...state,
                listLoading: initialState.listLoading,
                list: action.response,
            };
        }

        default: {
            return state;
        }
    }
}
