import React from 'react';
import './Navigation.css';
import NavigationItem from "./NavigationItem/NavigationItem";

const Navigation = () => (
  <ul className="NavigationItems">
    <NavigationItem to="/" exact>Burger Builder</NavigationItem>
    <NavigationItem to="/orders" exact>Orders</NavigationItem>
    <NavigationItem to="/counter" exact>Counter</NavigationItem>
  </ul>
);

export default Navigation;