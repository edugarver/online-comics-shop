import React from 'react'

export default function OrderColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-3">
          <p className="text-uppercase">order id:</p>
        </div>
        <div className="col-10 mx-auto col-lg-6">
          <p className="text-uppercase">summary of products</p>
        </div>
        <div className="col-10 mx-auto col-lg-3">
        </div>
      </div>
    </div>
  )
}
