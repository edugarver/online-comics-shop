import React from 'react'
import { Link } from 'react-router-dom';

export default function OrderItem({ item, value }) {
  const { id, products } = item;
  const { removeOrder } = value;
  return (
    <tr>
      <div className="row my-2 text-capitalize text-center">
        <td>
          <div className="col-10 mx-auto col-lg-3">
            <span className="d-lg-none">order id: </span> {id}
          </div>
        </td>
        <td>
          <div className="mx-auto col-lg-6>">products
            <ul class="list-group">
              {
                products.map(product => {
                  return <li class="list-group-item"><img src={product.img} style={{ width: '5rem', height: '5rem' }} className="img-fluid" alt="product" /> {product.title}</li>
                })
              }
            </ul>
          </div>
        </td>
        <td>
          <div className="col-10 mx-auto col-lg-3">remove
            <Link to="/">
              <div className="cart-icon" onClick={() => removeOrder(id)}>
                <i className="fas fa-trash"></i>
              </div>
            </Link>
          </div>
        </td>
      </div>
    </tr>
  )
}
