import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react/cjs/react.development'
import { AddReviewModal } from '../components/AddReviewModal'
import { Reviews } from '../components/Reviews'

import { gigService } from '../services/gig.service'
import { orderService } from '../services/order.service'
import { reviewService } from '../services/review.service'
import { addReview } from '../store/actions/review.action'

export const GigDetails = () => {

  const [gig, setGig] = useState(null)
  const [imgToShow, setImgToShow] = useState(null)
  const [imgToShowIdx, setImgToShowIdx] = useState(0)
  const [rating, setRating] = useState(null)
  const [reviews, setReviews] = useState(null)
  const [isAddReviewOpen, setIsAddReviewOpen] = useState(false)

  const { user } = useSelector(state => state.userModule)


  const id = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    loadGig(id)
  }, [])

  const loadGig = async ({ id }) => {
    const gig = await gigService.getById(id)
    setGig(gig)
    imgController(gig)
    loadReviews(gig.owner._id)
  }


  const loadReviews = async (aboutUserId) => {
    const reviews = await reviewService.query(aboutUserId)
    setReviews(reviews)
  }


  const imgController = (gig) => {
    setImgToShow(gig.imgUrl)
  }

  const changeImgPreview = (val) => {
    if (val === 1) {
      setImgToShowIdx(imgToShowIdx + val)
      if (imgToShowIdx === imgToShow.length - 1) setImgToShowIdx(0)
    }
    if (val === -1) {
      setImgToShowIdx(imgToShowIdx + val)
      if (imgToShowIdx === 0) setImgToShowIdx(imgToShow.length - 1)
    }
  }

  const getRaiting = (rating) => {
    const ratingToDisplay = gigService.getStars(rating)
    setRating(ratingToDisplay)
  }

  const onAddReview = (review) => {
    review.about = gig.owner
    dispatch(addReview(review))
  }

  const addOrder = () => {
    if (!user) {
      console.log('Loggin First');
    }
    const order = {
      buyer: user,
      seller: gig.owner,
      gigId: id.id,
      status: 'pending'
    }
    orderService.add(order)
  }


  const toggleAddReview = () => {
    setIsAddReviewOpen(!isAddReviewOpen)
  }


  if (!gig) return 'Loading...'
  console.log(gig);
  // if (!user) return 'Loading...'
  const { title, daysToMake, description, imgUrl, price, owner, tags } = gig

  return (
    <section className='gig-details main-container'>
      <div className="wrraper flex space-between">

        <div className="info">


          <h1>{title}</h1>
          <div className="img-name-container flex">
            <div className="img-container">
              <img src={owner.imgUrl} alt="" />
            </div>
            <div className="flex column">
              <p>{owner.fullname} | <span>{owner.level}</span></p>
              <p>Raiting: <span className='starRating'>{rating}</span></p>
            </div>
          </div>
          <hr />
          <div className="btn-img-container">
            <button className="btn-minus" onClick={() => changeImgPreview(-1)}><i className="fas fa-angle-left"></i></button>
            <div className="img-container">
              <img src={imgUrl[imgToShowIdx]} alt="" />
            </div>
            <button className="btn-plus" onClick={() => changeImgPreview(1)}><i className="fas fa-angle-right"></i></button>
          </div>
          <div className="tumbnails-container flex">
            {imgUrl.map((img, idx) => (
              <div className="img-holder" key={idx} onClick={() => setImgToShowIdx(idx)}>
                <img src={img} alt="" />
              </div>
            ))}
          </div>
          <hr />

          {reviews &&
            <div className="recomandeds">
              <Reviews reviews={reviews} getRaiting={getRaiting} />
              <button className="add-review-btn" onClick={toggleAddReview}>Add review</button>
              {isAddReviewOpen && <AddReviewModal toggleAddReview={toggleAddReview} owner={owner} onAddReview={onAddReview} />}
            </div>}



        </div>

        <aside className='flex column space-between'>

          <div className="wrraper flex space-between">
            <div className="container flex column">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
            <p>{price}₪</p>
          </div>
          <p> <i className="far fa-clock"></i> {daysToMake} Days Dellvery</p>
          {/* <div className="wrraper">
            {tags?.map((tag, idx) => (
              <p key={idx} className="tags"><span>&#10004;</span> {tag}</p>
            ))}
          </div> */}
          <button onClick={addOrder}>Continue (₪ {price})</button>
        </aside>

      </div>
    </section>
  )
}
