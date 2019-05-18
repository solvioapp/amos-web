import * as actionTypes from '../actions/actionTypes';

const initialState = {
    bgClassName: 'bgBlue',
};

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_BG_CLASSNAME: {
            return {
                ...state,
                bgClassName: action.bgClassName,
            };
        }

        default: {
            return state;
        }
    }
}
