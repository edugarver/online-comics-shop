import React from 'react'

export default function CartItem({ item, value }) {
  const { id, title, img, price } = item;
  const { removeItem } = value;
  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-3">
        <img src={img} style={{ width: '5rem', height: '5rem' }} className="img-fluid" alt="product" />
      </div>
      <div className="col-10 mx-auto col-lg-3">
        <span className="d-lg-none">product: </span> {title}
      </div>
      <div className="col-10 mx-auto col-lg-3">
        <span className="d-lg-none">price: €</span> {price}
      </div>
      <div className="col-10 mx-auto col-lg-3">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash"></i>
        </div>
      </div>
    </div>
  )
}
