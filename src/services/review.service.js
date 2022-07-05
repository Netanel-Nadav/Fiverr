import { httpService } from "./http.service";

export const reviewService = {
    query,
    add,
    remove
}

async function query(filterBy) {
    try {
        const aboutUserId = {_id: filterBy}
        const reviews = await httpService.get('review', aboutUserId)
        return reviews
    } catch (err) {
        console.log(err);
    }
}

async function add(review) {
    try {
        const addedReview = await httpService.post('review', review)
        return addedReview
    } catch (err) {
        console.log(err);
    }
}

async function remove(reviewId) {
    try {

    } catch (err) {

    }
}