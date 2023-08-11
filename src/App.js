import React from 'react'
import './index.css'
import CartContainer from './CartContainer';
import CartItem from './CartItem';
import Navbar from './Navbar';
import { useGlobalConttext } from './context';
function App() {
  return (
<div>
<Navbar/>  
<CartContainer/>
</div>  );
}

export default App;
