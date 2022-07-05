import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development';
import { gigService } from '../services/gig.service';

export const Reviews = ({ reviews }) => {

    const [reviewIdx, setReviewIdx] = useState(0)
    const [stars, setStars] = useState([])

    const changeReview = (val) => {
        if (val === 1) {
            setReviewIdx(reviewIdx + val)
            if (reviewIdx === reviews.length - 1) setReviewIdx(0)
        }
        if (val === -1) {
            setReviewIdx(reviewIdx + val)
            if (reviewIdx <= 0) setReviewIdx(reviews.length - 1)
        }
    }


    const getRaiting = (rating) => {
        const ratingToDisplay = gigService.getStars(rating)
        setStars(ratingToDisplay)
    }

    useEffect(() => {
        const review = reviews[reviewIdx]
        getRaiting(review?.rating)
    }, [reviewIdx])

    const onAddReview = (review) => {

    }
    
    if (!reviews) return 'Loading...'
    if (!reviews.length) return 'No reviews Yet'
    const review = reviews[reviewIdx]

    return (
        <section className='reviews'>
            <button className="minus" onClick={() => changeReview(-1)}><i className="fas fa-angle-left"></i></button>
            <div className="review-container flex">
                <div className="img-container">
                    <img src={review.byUser.imgUrl} alt={review.byUser.fullname} />
                </div>
                <div className="container flex column">
                    <p className="fullname">{review.byUser.fullname}</p>
                    <p className="text">{review.txt}</p>
                    <p className="text starRating">{stars}</p>
                </div>
            </div>
            <button className="plus" onClick={() => changeReview(1)}><i className="fas fa-angle-right"></i></button>
            {/* <button>Add Review</button> */}
        </section>
    )
}
