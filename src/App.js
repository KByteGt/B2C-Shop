
import React from 'react';
import Layout from './containers/Layout/Layout'
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />
          <Route path="/contact" component={Products} />
          <Route path="/products" component={Products} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
