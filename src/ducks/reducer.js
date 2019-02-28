const initialState = {
    id: 0,
    username: '',
    profile_pic: ''
};

const UPDATE_USER = 'UPDATE_USER';

export function updateUser(lokuaObj){
    return {
        type: UPDATE_USER,
        payload: lokuaObj
    }
}

export default function reducer(state = initialState, action) {
    const {type, payload} = action
    switch(type){
        case UPDATE_USER:
            const {id, username, profile_pic} = payload
            return{...state, id, username, profile_pic}
        default: return state
    }
}