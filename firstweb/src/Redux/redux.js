const INITIAL_STATE = {
    count: 1
};
 
export function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'getData':
            return {...state,oke: 'oke'}
        case 'plus':
            return {count: state.count + 1}
        default:
            return state
    }
}