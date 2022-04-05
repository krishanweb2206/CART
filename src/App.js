import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  query,
  orderBy,
  getDocs,
  onSnapshot,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      // List of products
      products: [],
      loading:true
    }
  }

  componentDidMount(){
    const db = getFirestore();
    const colRef = collection(db, "products");

    /* this will not work when we doing directly changes from firebase databse then it will not reflect here so,use onsnapshot
    getDocs(colRef)
      .then((snapshot)=>{

        snapshot.docs.map((doc) => {
          console.log(doc.data());
        });

        const products = snapshot.docs.map((doc)=>{

          const data = doc.data();
          data['id']= doc.id;
          return data;
        })

        this.setState({
          products:products,
          loading:false
        })
          
      })
      .catch(err =>{
        console.log(err.message);
      })
      */

    const sortedbyprice= query(colRef,orderBy('price'))
     onSnapshot(sortedbyprice,(snapshot)=>{

        const products = snapshot.docs.map((doc)=>{

          const data = doc.data();
          data['id']= doc.id;
          return data;
        })

        this.setState({
          products:products,
          loading:false
        })
          
      })

  }

  addProduct = () =>{
     const db = getFirestore();
     const colRef = collection(db, "products");

     addDoc(colRef, {
       img:"https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
       price:4500,
       qty:1,
       title:"Washing Machine",
     }).then((docRef) => {
        console.log("product is added", docRef.id);
     })
     .catch((error)=>{
      console.log('Error is : ',error);
     });
  }

  handleIncreaseQuantity = (product) => {
    // console.log('hey...please increase the qty of product',product);
    const { products } = this.state;
    const db = getFirestore();

    const index = products.indexOf(product);
    // products[index].qty += 1;
    // this.setState({
    //   products: products,
    // });

    const docRef = doc(db, "products", products[index].id);

    updateDoc(docRef, {
      qty: products[index].qty + 1,
    })
      .then(() => {
        console.log("product is update successfully in increment ");
      })
      .catch((error) => {
        console.log("Error is : ", error);
      });
  };

  handleDecreaseQuantity = (product) => {
    // console.log("hey ...please decrease the qty of product",product);

    const { products } = this.state;
    const db = getFirestore();

    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }
    // products[index].qty -= 1;

    // this.setState({
    //   products: products,
    // });

    const docRef = doc(db, "products", products[index].id);

    updateDoc(docRef, {
      qty: products[index].qty - 1,
    })
      .then(() => {
        console.log("product is update successfully in decrement ");
      })
      .catch((error) => {
        console.log("Error is : ", error);
      });

  };

  handleDeleteproduct = (id) => {
    const { products } = this.state;
    const db = getFirestore();

    // const items = products.filter((item) => item.id !== id);

    // this.setState({
    //   products: items,
    // });

    const docRef = doc(db, "products", id);
    deleteDoc(docRef)
      .then(() => {
        console.log("product is deleted successfully");
      })
      .catch((error) => {
        console.log("Error is : ", error);
      });
  };

  getCartCount = () => {

    const { products } = this.state;
    let count=0;

    products.forEach((product) => {
      count+= product.qty;
    })

    return count;
  }

  getCardTotal = () => {

    const { products } = this.state;

    let cardTotal = 0;

    products.map((product) => {
      cardTotal = cardTotal + product.qty * product.price
    })

    return cardTotal;
  }

  render() {
    const { products,loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        {/* <button onClick={this.addProduct} style={{ fontSize:20,padding:20 }}>Add Product</button> */}
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteproduct={this.handleDeleteproduct}
        />
        {loading && <h1>Loading the products....</h1>}
        <div style ={{ fontSize:20,padding:10 }}>TOTAL : {this.getCardTotal()}</div>
      </div>
    );
  }
}


export default App;
