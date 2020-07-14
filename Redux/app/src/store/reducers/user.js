const initState = {
    userInfo:{},
    logined:false,
}

function reducer(state=initState,action){
    switch(action.type){
        case 'login':
            return {
                ...state,
                logined:true,
                userInfo:action.userInfo
            }
        case 'logout':
            return {
                ...state,
                logined:false,
                userInfo:{}
            }
        default:
            return state;

    }
}

export default reducer;