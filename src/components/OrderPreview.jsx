import React from 'react'

export const OrderPreview = ({order}) => {
    const {buyer, gig} = order

    if (!order) return 'No Orders Yet'
  return (
    <section className="order-preview">
        <h2>Order from: {buyer.fullname}</h2>
        <small>{buyer.email}</small>
        <hr />
        <h3>About</h3>
        <p>{gig.title}</p>
        <p>{gig.description}</p>
        <p>{gig.price} ₪</p>

        <div className="actions flex justify-center">
            <button>Reject</button>
            <button>Approve</button>
        </div>
    </section>
  )
}
