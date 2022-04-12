import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Checkout from "./containers/Checkout/Checkout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Layout from "./components/Layout/Layout";
import Orders from "./containers/Orders/Orders";
import Counter from "./containers/Counter/Counter";

const App = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={BurgerBuilder}/>
      <Route path="/checkout" component={Checkout}/>
      <Route path="/orders" exact component={Orders}/>
      <Route path="/counter" exact component={Counter}/>
      <Route render={() => <h1>Not Found</h1>}/>
    </Switch>
  </Layout>
);

export default App;
