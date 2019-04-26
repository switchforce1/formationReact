/* eslint-disable no-unreachable */
/* eslint-disable no-use-before-define */

const initState = {count: 12};

export function reducerCount(state = initState, action){
    console.log(action)
    let s;
    //state can't be modify here
    // eslint-disable-next-line default-case
    switch(action.type){
        case 'INCREMENT':
            s = {count: state.count +1 }
            return s;
            break;
        case 'DECREMENT':
            s = {count: state.count -1 }
            return s;
            break;
    }
    return state;
}