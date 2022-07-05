import { reviewService } from "../../services/review.service";

export function addReview(review) {
    return async (dispatch) => {
        try {
            const addedReview = await reviewService.add(review)
            return addedReview
        } catch (err) {
            console.log('Couldn\'t add review', err);
        }
    }
}