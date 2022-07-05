import { gigService } from "../../services/gig.service";


export function loadGigs(filterBy = null) {
    return async (dispatch) => {
        try {
            const gigs = await gigService.query(filterBy)
            const action = ({type: 'SET_GIGS', gigs})
            dispatch(action)
        } catch (err) {
            console.log(err);
        }
    }
}

export function removeGig(gigId) {
    return async (dispatch) => {
        try {
            await gigService.remove(gigId)
            const action = {type: 'REMOVE_GIG', gigId}
            dispatch(action)
        } catch (err) {
            console.log('Couldnt remove the Gig', err);
        }
    }
}

export function addGig(newGig) {
    return async (dispatch) => {
        try {
            const addedGig = await gigService.add(newGig)
            const action = {type: 'ADD_GIG', addedGig}
            dispatch(action)
        } catch (err) {
            console.log('Couldnt add new gig', err);
        }
    }
}