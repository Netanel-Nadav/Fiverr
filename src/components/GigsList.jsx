import React from 'react'
import { GigPreview } from './GigPreview'

export const GigsList = ({ gigs }) => {
  return (
    <div className="gigsList grid-card">
      {gigs.map(gig => <GigPreview gig={gig} key={gig._id} />)}
    </div>
  )
}
