import React, { useState } from 'react'

export const AddReviewModal = ({ owner, onAddReview, toggleAddReview }) => {

    const [txt, setTxt] = useState('')
    const [rating, setRating] = useState(1)

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const review = {
            txt,
            rating
        }
        onAddReview(review)
        toggleAddReview()
    }


    return (
        <section className="add-review flex justify-center align-center">
            <div className="main-screen" onClick={toggleAddReview}></div>
            <div className="wrraper">
                <h2>Add your Review about {owner.fullname}</h2>
                <form className='flex column' onSubmit={handleSubmit}>
                    <textarea name="" placeholder='Enter your review here' cols="50" rows="10" value={txt} onChange={(ev) => setTxt(ev.target.value)}></textarea>
                    <div className="container flex">
                        <input type="number" placeholder='Enter Rating 1  - 5' min="1" max="5" onChange={(ev) => setRating(+ev.target.value)} />
                        <button>Add Review</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
