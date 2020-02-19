// Make a class componenet with 
// a list of products in it's state. 
// Renders each product via Product component. 
import React, { Component } from 'react';
import ProductDisplay from './ProductDisplay';
import CartList from './CartList';
class ProductList extends Component {
  state = { products: [
        {
          name: "Ultra Boost",
          manufacturer: "Adidas",
          price: 160,
          quantity: 5
        },
        {
          name: "Air Force One Low",
          manufacturer: "Nike",
          price: 100,
          quantity: 6
        },
        {
          name: "Classic Leather",
          manufacturer: "Reebok",
          price: 120,
          quantity: 3
        },
        {
          name: "Sk8-Hi",
          manufacturer: "Vans",
          price: 60,
          quantity: 10
        }
      ],
    cart: []}
  handleAddToCart = (prodName) => {
    let item = this.state.products.find(product => {
      return product.name === prodName && product.quantity > 0
    });
    if(item) {
      this.setState((prevState) => {
        return {
          cart: [...prevState.cart, item]
        }
      })
    }
    let newProdList = this.state.products.map(product => {
      if(product.name === prodName && product.quantity > 0) {
        return {
          name: product.name,
          quantity: product.quantity - 1,
          manufacturer: product.manufacturer,
          price: product.price
        }
      } else {
        return product
      }
    })
    this.setState({products: newProdList});
  }

  render() { 
    console.log(this.state.cart)
    let prods = this.state.products.map((product, i) => {
      return <ProductDisplay key={product.name} 
              name={product.name}
              price={product.price}
              manufacturer={product.manufacturer}
              quantity={product.quantity}
              handleAddToCart={this.handleAddToCart} />
    })
    return ( 
      <>
      <div>
        {prods}
      </div>
      <div>
        Items in cart: 
        <CartList items={this.state.cart}/>
      </div>
      </>
     );
  }
}
 
export default ProductList;
