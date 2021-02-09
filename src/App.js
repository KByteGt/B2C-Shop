
import React from 'react';
import Layout from './containers/Layout/Layout'
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import ShoppingCart from './containers/ShoppingCart/ShoppingCart';
import ItemDetail from './containers/ItemDetail/ItemDetail';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/catalogue" component={Products} />
          <Route path="/cart" component={ShoppingCart} /> 
          <Route path="/item/:itemId" component={ItemDetail} /> 
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
