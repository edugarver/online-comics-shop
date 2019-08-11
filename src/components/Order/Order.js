import React, { Component } from 'react'
import Title from '../Title';
import OrderColumns from './OrderColumns';
import EmptyOrder from './EmptyOrder';
import { ProductConsumer } from '../../context';
import OrderList from './OrderList';

export default class Order extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const { orders } = value;
                        if (orders.length > 0) {
                            return (
                                <React.Fragment>
                                    <Title name="outstanding" title="orders"></Title>
                                    <OrderColumns />
                                    <OrderList value={value} />
                                </React.Fragment>
                            );
                        } else {
                            return <EmptyOrder />
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}
