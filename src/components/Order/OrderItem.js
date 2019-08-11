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
          <div className="col-10 mx-auto col-lg-3>">
            <ul>
              {
                products.map(product => {
                  return <li>{product.title}</li>
                })
              }
            </ul>
          </div>
        </td>
        <td>
          <div className="col-10 mx-auto col-lg-3">
            <Link to="/">
              <button className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => removeOrder(id)}
              >cancel order</button>
            </Link>
          </div>
        </td>
      </div>
    </tr>
  )
}
