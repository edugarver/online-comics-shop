import React, { useState } from 'react'
import OrderItem from './OrderItem'

export default function OrderList({ value }) {
  const { orders } = value;
  const [search, setSearch] = useState('');

  const updateSearch = (event) => {
    setSearch(event.target.value);
  }

  let filteredOrders = orders.filter(order => order.id.toString().indexOf(search) !== -1);

  return (
    <div className="container-fluid">
      {filteredOrders.map(item => {
        return <OrderItem key={item.id} item={item} value={value} />
      })}
      <input type="text" value={search} onChange={updateSearch.bind(this)} />
    </div>
  )
}
