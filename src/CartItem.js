import React from 'react';

const CartItem = (props) => {

  /* NO NEED THIS CONSTRUCTOR BY USING PROPS
  constructor() {
    super();
    this.state = {
      price: 999,
      title: "Mobile Phone",
      qty: 1,
      img: "",
    };
    // this.increaseQuantity = this.increaseQuantity.bind(this); one way to bind
    // this.testing();
  }
  */

  /* SEE THE SETSTATE FUNCTION CAN WORK AS SYNC CALL IN PROMISE
   
  testing(){
    const promise = new Promise((resolve,reject)=>{

      setTimeout(()=>{
        resolve('done');
      },5000);
    })

    promise.then(() => {

      // setState calls as synchronous call with render thrice i.e shallow merging is not here which is persent with async call of setstate
      this.setState({qty:this.state.qty  + 10});
      this.setState({qty:this.state.qty + 10 });
      this.setState({qty:this.state.qty + 10 });
      console.log(this.state);
    });
  }
  */
  // Arrow function to bind the class object with this function
  /*
  increaseQuantity = () => {
    // console.log(this.state);

    // setState Form 1
    // this.setState({
    //   qty:this.state.qty+1
    // });

    // setState Form 2
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1,
      };
    },()=>{
      console.log('this.state',this.state);
    });
  };

  decreaseQuantity = () => {

    const {qty} = this.state;

    if(qty === 0){
      return;
    }

    // setState Form 2
    this.setState((prevState) => {
      return {
        qty: prevState.qty - 1,
      };
    });
  };
*/
    // NO NEED WHEN WE USING PROPS
    // const { price, title, qty } = this.state;

    // Directly use this.props
    const { price, title, qty} = props.product;

    const{
      product,
      onIncreaseQuantity,
      onDecreaseQuantity,
      onDeleteproduct
    }=props

    // Each carditem has property props for accessing the data  console.log('this.props',this.props);
    // console.log(this.props);

    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} src={product.img} alt={product.id} />
        </div>

        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>Rs {price}</div>
          <div style={{ color: "#777" }}>Qty: {qty}</div>
          <div className="cart-item-actions">
            {/* {Buttons} */}
            <img
              alt="increase"
              className="actions-icon"
              src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
              onClick={() => onIncreaseQuantity(product)}
            />
            <img
              alt="decrease"
              className="actions-icon"
              src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
              onClick={() => onDecreaseQuantity(product)}
            />
            <img
              alt="delete"
              className="actions-icon"
              src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png"
              onClick={() => onDeleteproduct(product.id)}
            />
          </div>
        </div>
      </div>
    );
  }


const styles = {

  image:{
      height:110,
      width:110,
      borderRadius:4,
      background:'#ccc'
  }
}

export default CartItem;