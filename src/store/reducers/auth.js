import { LOGIN, LOGOUT } from '../actions/actionTypes';

const initialState = {
    user            : {},
    authenticated   : false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                user            : action.user,
                authenticated   : true,
            }
        case LOGOUT:
            return {
                ...state,
                user            : action.user,
                authenticated   : false,
            }
        default:
            return state;
    }
};

export default reducer;