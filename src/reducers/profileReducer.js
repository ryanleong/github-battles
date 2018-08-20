
import { FETCH_PROFILE } from '../actions/types'
const initialState = {};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PROFILE:

            return {
                ...state,
                [action.fieldId]: {
                    username: action.username,
                    profile: action.payload
                }
            }

        default:
            return state
    }
}
