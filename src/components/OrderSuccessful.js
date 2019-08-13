import React from 'react'
import Title from './Title'
import { ProductConsumer } from '../context'
import OrderItem from './Order/OrderItem'
import OrderColumns from './Order/OrderColumns';

export default function OrderSuccessful() {
  return (
    <section>
      <ProductConsumer>
        {value => {
          const { lastOrder } = value;
          return (
            <React.Fragment>
              <div className="order-successful">
                <Title name="order" title="successful"></Title>
                <OrderColumns />
                <OrderItem key={lastOrder.id} item={lastOrder} value={value} />
              </div>
            </React.Fragment>
          );
        }}
      </ProductConsumer>
    </section>
  )
}
