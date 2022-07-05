import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react/cjs/react.development'

import { gigService } from '../services/gig.service'

export const GigPreview = ({ gig }) => {


  const [imgArray, setImgArray] = useState(null)
  const [imgIdx, setImgIdx] = useState(0)
  const [rating, setRating] = useState(null)

  useEffect(() => {
    setImgArray(gig.imgUrl)
    getRaiting(gig.owner.rate)
  }, [])


  const imgController = (val) => {
    if (val === 1) {
      setImgIdx(imgIdx + val)
      if (imgIdx === imgArray.length - 1) setImgIdx(0)
    }
    if (val === -1) {
      setImgIdx(imgIdx + val)
      if (imgIdx === 0) setImgIdx(imgArray.length - 1)
    }
  }


  const getRaiting = (rating) => {
    const ratingToDisplay = gigService.getStars(rating)
    setRating(ratingToDisplay)
  }


  const { daysToMake, description, imgUrl, price, title, owner } = gig
  const { fullname, level, rate } = owner
  return (
    <div className="gig-card">
      <div className="card-header">
        <div className="img-container">
          <button className="btn-minus" onClick={() => imgController(-1)}>-</button>
          {imgArray && <img src={imgArray[imgIdx]} />}
          <button className="btn-plus" onClick={() => imgController(1)}>+</button>
        </div>
      </div>
      <Link to={`/${gig._id}`}>
        <div className="card-body">
          <div className="info flex">
            <div className="logo-container">
              <img src={owner.imgUrl} />
            </div>
            <div className="details flex column">
              <p>{fullname}</p>
              <small>{level}</small>
            </div>
          </div>
          <p className="desc">{title}</p>
          <span className='starRating'>{rating}</span>
        </div>
        <div className="card-footer flex space-between align-center">
          <span><i className="fas fa-heart"></i></span>
          <div className="container">
          <small>Starting at</small>
          <p>${price}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
