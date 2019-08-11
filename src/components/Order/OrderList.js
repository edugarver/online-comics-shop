import React from 'react'
import OrderItem from './OrderItem'

export default function OrderList({ value }) {
  const { orders } = value;

  return (
    <div className="container-fluid">
      {orders.map(item => {
        return <OrderItem key={item.id} item={item} value={value} />
      })}
    </div>
  )
}
