import React, {Component, Fragment} from 'react';

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const prices = {
  salad: 5,
  cheese: 20,
  meat: 50,
  bacon: 30
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 20,
    purchasable: false,
    purchasing: false
  };
  
  addIngredientHandler = type => {
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type]++;
    
    const priceAddition = prices[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    
    this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
    
    this.updatePurchaseState(updatedIngredients);
  };
  
  removeIngredientHandler = type => {
    if(this.state.ingredients[type] === 0) {
      return;
    }
    
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type]--;
    
    const priceAddition = prices[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;
    
    this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
  
    this.updatePurchaseState(updatedIngredients);
  };
  
  updatePurchaseState = ingredients => {
    const sum = Object.keys(ingredients)
      .map(igKey => ingredients[igKey])
      .reduce((sum, el) => sum + el, 0);
    
    this.setState({purchasable: sum > 0});
  };
  
  purchaseHandler = () => {
    this.setState({purchasing: true});
  };
  
  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  };
  
  purchaseContinueHandler = () => {
    const queryParams = Object.keys(this.state.ingredients).map(key => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(this.state.ingredients[key]);
    });
    
    queryParams.push('price = ' + this.state.totalPrice)
    
    const queryString = queryParams.join('&');
    
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString
    });
  };
  
  render() {
    const disabledInfo = {...this.state.ingredients};
    
    Object.keys(disabledInfo).forEach(key => {
      disabledInfo[key] = disabledInfo[key] === 0;
    });
    
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          disabled={disabledInfo}
          price={this.state.totalPrice}
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          purchasable={this.state.purchasable}
          purchase={this.purchaseHandler}
        />
        <Modal
          show={this.state.purchasing}
          close={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            purchaseContinued={this.purchaseContinueHandler}
            purchaseCancelled={this.purchaseCancelHandler}
          />
        </Modal>
      </Fragment>
    )
  }
}

export default BurgerBuilder;
