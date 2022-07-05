

const initialState = {
    orders: null,
}

export function orderReducer(state = initialState, action) {

    let newState = state

    switch (action.type) {
        case 'SET_ORDERS':
            newState = { ...state, orders: action.orders }
            break;

        default:
            break;
    }
    return newState
}