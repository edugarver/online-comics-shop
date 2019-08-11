import React, { Component } from 'react'
import { storeProducts } from './data';
import ls from 'local-storage';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        cart: [],
        orders: [],
        lastOrder: null,
        cartTotal: 0
    }

    componentDidMount() {
        this.setProducts();
        this.setState({
            orders: ls.get('orders') || [],
            lastOrder: ls.get('lastOrder')
        });
    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        })
        this.setState(() => {
            return { products: tempProducts };
        });
    }

    getItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    addToCart = id => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return { products: tempProducts, cart: [...this.state.cart, product] };
        },
            () => {
                this.addTotals();
            });
    }

    removeItem = id => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id);
        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.total = 0;

        this.setState(() => {
            return {
                cart: [...tempCart],
                product: [...tempProducts]
            }
        }, () => {
            this.addTotals();
        })
    }

    clearCart = () => {
        this.setState(() => {
            return {
                cart: []
            };
        }, () => {
            this.setProducts();
            this.addTotals();
        });
    }

    placeOrder = () => {
        let tempOrders = [...this.state.orders];
        let tempCart = [...this.state.cart];
        let tempLastOrder = this.state.lastOrder;

        // form the summary
        let summary = "";
        for (var i = 0; i < tempCart.length - 1; i++) {
            summary += tempCart[i].title + ", ";
        }
        summary += tempCart[tempCart.length - 1].title;

        //calculate the id for the new order
        let tempId = 1;
        if (tempLastOrder !== null) {
            tempId = tempLastOrder.id + 1;
        }

        // build and push the order
        tempLastOrder = { id: tempId, orderSummary: summary, products: tempCart };
        tempOrders.push(tempLastOrder);
        ls.set('orders', [...tempOrders]);
        ls.set('lastOrder', tempLastOrder);
        this.setState(() => {
            return {
                orders: [...tempOrders],
                lastOrder: tempLastOrder
            };
        }, () => {
            this.clearCart();
        });
    }

    removeOrder = id => {
        let tempOrders = [...this.state.orders];
        tempOrders = tempOrders.filter(item => item.id !== id);
        this.setState(() => {
            return {
                orders: [...tempOrders]
            }
        })
    }

    addTotals = () => {
        let total = 0;
        this.state.cart.map(item => (total += item.total));
        this.setState(() => {
            return {
                cartTotal: total
            }
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                addToCart: this.addToCart,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
                placeOrder: this.placeOrder,
                removeOrder: this.removeOrder
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }