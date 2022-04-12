import React, {Component} from 'react';
import axiosOrders from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import OrderItem from "../../components/Order/OrderItem/OrderItem";
import withErrorHandler from "../../hoc/withErrorHandler";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  };
  
  async componentDidMount() {
    try {
      const response = await axiosOrders.get('/orders.json');
  
      const orders = Object.keys(response.data).map(id => {
        return {...response.data[id], id};
      });
  
      this.setState({orders});
    }
    finally {
      this.setState({loading: false});
    }
  };
  
  render() {
    let orders = <Spinner/>;
    
    if(!this.state.loading) {
      orders = this.state.orders.map(order => (
        <ErrorBoundary key={order.id}>
          <OrderItem
            ingredients={order.ingredients}
            price={order.price}
          />
        </ErrorBoundary>
      ));
    }
    
    return orders;
  }
}

export default withErrorHandler(Orders, axiosOrders);