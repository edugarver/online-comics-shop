import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductLlist';
import Cart from './components/Cart';
import OrderSuccessful from './components/Order/OrderSuccessful';
import Order from './components/Order';
import Default from './components/Default';
import OrderDeleted from './components/Order/OrderDeleted';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/cart" component={Cart} />
        <Route path="/order-successful" component={OrderSuccessful} />
        <Route path="/orders" component={Order} />
        <Route path="/order-deleted" component={OrderDeleted} />
        <Route component={Default} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
