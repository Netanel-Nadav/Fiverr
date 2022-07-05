import React from 'react'
import { OrderList } from './OrderList'

export const MyOrders = ({orders}) => {

  return (
    <div className="my-orders">
      <OrderList orders={orders} />
    </div>
  )
}
