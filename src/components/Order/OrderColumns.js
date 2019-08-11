import React from 'react'

export default function OrderColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <tr>
        <div className="row">
          <th>
            <div className="col-10 mx-auto col-lg-3">
              <p className="text-uppercase">order id</p>
            </div>
          </th>
          <th>
            <div className="col-10 mx-auto col-lg-6">
              <p className="text-uppercase">products</p>
            </div>
          </th>
          <th>
            <div className="col-10 mx-auto col-lg-3">
            </div>
          </th>
        </div>
      </tr>
    </div>
  )
}
