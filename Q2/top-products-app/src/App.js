import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductListPage from './ProductListPage';
import ProductDetailsPage from './ProductDetailsPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={ProductListPage} />
          <Route path="/product/:id" component={ProductDetailsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
