import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks= ['Razzak', 'Alomgir', 'Shovo','Salman Sha', 'Bappa Raj']

  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'}
  ]

  const nayokNames = nayoks.map(nayok => nayok)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          I am a React Student!
        </p>
{/* useState use to counting */}
        <Counter></Counter>
        <ul>
          {
            nayoks.map(nayok => <li> {nayok} </li>)
          }
          <br/>
          {
            products.map (product => <li> {product.name} </li> )
          }
        </ul>

        {
          products.map (pd => <Product product={pd}></Product>)
        }
<br/>
        {/* 1st defined style */}
        {/* <Product name={products[0].name} price={products[0].price}></Product> */}
        <Product product={products[0]}></Product>
        <Product></Product>
        <Product></Product>

        <Person name='Rana Hasan' job='Mariner'></Person>
        <Person name='Nayeem' job='Garments'></Person>
      </header>
    </div>
  );
}

// ===============useState Declaration
function Counter (){
  const [count, setCount] = useState(10);
  // const handelIncrease = () => {
  //   // const newCount = count + 1;
  //   setCount(count + 1);
  // }
  return (
    <div>
      <h1>Count: {count} </h1>
      <button onMouseMove = {() =>  setCount(count - 1)}>Descries</button>
      <button onClick = {() =>  setCount(count + 1)} >Increase</button>
    </div>
  )
}

// ===============Product 
function Product (props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '10px',
    backgroundColor: 'lightgrey',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  // const {name, price} = props.product;
  return (
    <div style = {productStyle}>
      <h4>{props.product?.name}</h4>
      <h3>{props.product?.price}</h3>
      <button>By now</button>
    </div>
  );
}
// ===============Person 
function Person (props){
  return (
    <div style={{border: '2px solid red', width: '400px', margin: '20px'}}>
      <h3>My Name: {props.name}</h3>
      <p>My Profession: {props.job} </p>
    </div>
  );
}

export default App;
