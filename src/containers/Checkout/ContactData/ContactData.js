import React, {Component} from 'react';
import './ContactData.css';
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import axiosOrders from "../../../axios-orders";

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    street: '',
    postal: '',
    loading: false
  };
  
  // valueChanged = e => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   this.setState({[name]: value});
  // }
  
  valueChanged = e => this.setState({[e.target.name]: e.target.value});
  
  orderHandler = async (e) => {
    e.preventDefault();
    
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: this.state.name,
        email: this.state.email,
        street: this.state.street,
        postal: this.state.postal
      }
    };
    
    this.setState({loading: true});
    await axiosOrders.post('/orders.json', order);
    this.props.history.push('/');
    this.setState({loading: false});
  };
  
  render() {
    let form = (
      <form onSubmit={this.orderHandler}>
        <input
          type="text"
          className="Input"
          name="name"
          placeholder="Your name"
          value={this.state.name}
          onChange={this.valueChanged}
        />
        <input
          type="email"
          className="Input"
          name="email"
          placeholder="Your mail"
          value={this.state.email}
          onChange={this.valueChanged}
        />
        <input
          type="text"
          className="Input"
          name="street"
          placeholder="Street"
          value={this.state.street}
          onChange={this.valueChanged}
        />
        <input
          type="text"
          className="Input"
          name="postal"
          placeholder="Postal Code"
          value={this.state.postal}
          onChange={this.valueChanged}
        />
        <Button type="Success">ORDER</Button>
      </form>
    );
    
    if(this.state.loading) {
      form = <Spinner/>;
    }
    
    return (
      <div className="ContactData">
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;