import * as actionTypes from './actionTypes';

export function setBgClassName(bgClassName) {
    return { type: actionTypes.SET_BG_CLASSNAME, bgClassName };
}
