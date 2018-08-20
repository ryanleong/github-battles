import { FETCH_PROFILE } from './types';

export const fetchProfile = (username, fieldId) => (dispatch) => {
    fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(profile => {
            dispatch({
                type: FETCH_PROFILE,
                fieldId: fieldId,
                username: username,
                payload: profile
            });
        })

};