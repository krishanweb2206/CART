import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
/* MOving the constructor to App component because we want to share the total i.e qty1+qty2 to navbar compnent 
  constructor() {

    super();

    this.state = {
      // List of products
      products: [
        {
          price: 3999,
          title: "Mobile Phone",
          qty: 1,
          img: "",
          id: 1,
        },
        {
          price: 2999,
          title: "Watch",
          qty: 1,
          img: "",
          id: 2,
        },
        {
          price: 1999,
          title: "Laptop",
          qty: 1,
          img: "",
          id:3
        },
      ],
    };
  }

  handleIncreaseQuantity = (product) => {

    // console.log('hey...please increase the qty of product',product);
    const {products} = this.state;

    const index = products.indexOf(product);
    products[index].qty+=1;

    this.setState({
      products:products
    })

  }

  handleDecreaseQuantity = (product) =>{

    // console.log("hey ...please decrease the qty of product",product);

    const {products} = this.state;

    const index = products.indexOf(product);

    if(products[index].qty === 0){
      return;
    }
    products[index].qty-=1;

    this.setState({
      products:products
    })
  }

  handleDeleteproduct = (id) =>{
    
    const {products} = this.state;

    const items = products.filter((item) => item.id !== id);

    this.setState({
      products:items
    })

  }
  */

    const {products} = props;
    return (
      <div className="cart">

        { products.map((product) => {
          // Error comes likes key should be uniquie so adding id but not include in props
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQuantity={props.onIncreaseQuantity}
              onDecreaseQuantity={props.onDecreaseQuantity}
              onDeleteproduct={props.onDeleteproduct}
            />
          );
        })}

        {/* Examples of props i.e passing the data from parent to child i.e <CartItem qty={1} price={1900} title={"Watch"} img={''} /> */}
        {/* <CartItem qty={1} price={1900} title={"Watch"} img={""} /> */}

      </div>
    );
  }


export default Cart;
