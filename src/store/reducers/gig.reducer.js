

const initialState = {
    gigs: null,
}


export function gigReducer(state = initialState, action) {
    
    let newState = state;

    switch (action.type) {
        case "SET_GIGS":
            newState = { ...state, gigs: action.gigs}
            break;
        case "REMOVE_GIG":
            newState = { ...state, gigs: state.gigs.filter(gig => gig._id !== action.gigId)}
            break;
        case "ADD_GIG":
            newState = { ...state, gigs: [...state.gigs, action.addedGig]}
            break;


            default:
                break;
    }
    return newState
}