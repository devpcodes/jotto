import { actionTypes } from "../actions";

export default (state = false, action) => {
    switch (action.type) {
        case actionTypes.CORRECT_GRESS:
            return true;
        default:
            return state;
    }
};
