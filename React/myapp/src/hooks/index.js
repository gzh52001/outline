import {useState} from 'react';

export function useStorage(key){
    // 在自定义hook中使用内置hook
    let value  = localStorage.getItem(key)
    if(value){
        value = JSON.parse(value)
    }

    const [state,changeState] = useState(value);

    const change = function(newValue){

        changeState(newValue);

        if(typeof newValue === 'object'){
            newValue = JSON.stringify(newValue)
        }
        localStorage.setItem(key,newValue);

        
    }

    return [state,change]
}


export function useCookie(){
    
}

// let [currentUser,changeUser] =  useStorage('currentUser');
// changeUser(newUser);

// // 读取
// let currentUser  = localStorage.getItem('currentUser')
// if(currentUser){
//     currentUser = JSON.parse(currentUser)
// }

// // 写入
// currentUser.password = 'abc'
// currentUser = JSON.stringify(currentUser)
// localStorage.setItem('currentUser',currentUser)