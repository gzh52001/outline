let plusready = false;
document.addEventListener( "plusready", ()=>{
    plusready = true
})


// 初始状态
const initState = {
    plusready
}


function reducer(state=initState,action){
    state.plusready = plusready;
    
    switch(action.type){
        
        default:
            return state;

    }
}

export default reducer;