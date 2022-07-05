import React from 'react'
import { OrderPreview } from './OrderPreview'

export const OrderList = ({orders}) => {
  if (!orders.length) return <div className="no-orders">No orders yet</div>
  return (
    <div className="order-list flex column">
        {orders.map((order,idx) => <OrderPreview order={order} key={idx} />)}
    </div>
  )
}
