const initialState = {
    username: 'Mike',
    id: '',
    user_img: 'https://www.nature.scot/sites/default/files/styles/teaser_feature_image_large/public/2017-07/Otter-01v2.jpg?itok=jkXOHvpu'
}

const USER_INFO = 'USER_INFO';

export function userInfo(user){
    return{
        type: USER_INFO,
        payload: user
    }
}

export default function reducer(state = initialState, action){
    
    switch( action.type ) {
        case USER_INFO:
        const { id, username, user_img } = action.payload;
        return { ...state, id, username, user_img};

        default:
        return state;
    }
}