import React from 'react'
import { Link } from 'react-router-dom';

export default function OrderItem({ item, value }) {
  const { id, products } = item;
  const { removeOrder } = value;
  return (
    <div>
      <div className="row my-2 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-1">
          <span className="d-lg-none"></span> {id}
        </div>
        <div className="mx-auto col-lg-6>">
          <ul class="list-group">
            {
              products.map(product => {
                return <li class="list-group-item"><img src={product.img} style={{ width: '5rem', height: '5rem' }} className="img-fluid" alt="product" /> {product.title}</li>
              })
            }
          </ul>
        </div>
        <div className="col-10 mx-auto col-lg-3">remove
            <Link to="/">
            <div className="cart-icon" onClick={() => removeOrder(id)}>
              <i className="fas fa-trash"></i>
            </div>
          </Link>
        </div>
      </div>
      <hr />
    </div>
  )
}
