import {createStore} from 'redux';

export default createStore(function(state, action) {
    if(state === undefined)
        return {number: 0}

    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'INCREMENT':
            return {...state, number:state.number + action.size};
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());