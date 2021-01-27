
import React from 'react';
import Layout from './containers/Layout/Layout'
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
      <Router>
        <div>
          <Layout>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/products" component={Products} />
            </Switch>
          </Layout>
        </div>

      </Router>
  );
}

export default App;
