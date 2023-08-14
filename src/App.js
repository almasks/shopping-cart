import React from 'react'
import './index.css'
import CartContainer from './CartContainer';
import CartItem from './CartItem';
import Navbar from './Navbar';
import { useGlobalConttext } from './context';
function App() {
  const { loading } = useGlobalConttext()
  if (loading) {
    return (
      <div className='loading'>
        <h1>
          loading...

        </h1>    </div>
    )
  }
  return (
    <div>
      <Navbar />
      <CartContainer />
    </div>);
}

export default App;
