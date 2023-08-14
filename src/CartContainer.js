import React from 'react'
import CartItem from './CartItem.js'
import { useGlobalConttext } from './context.js'

function CartContainer() {
    const { cart, total,clearCart } = useGlobalConttext()

    if (cart.length === 0) {
        return (
            <section className='cart'>
                <header>
                    <h2>your bag</h2>
                    <h4 className='empty-cart'>is empty</h4>
                </header>
            </section>
        )
    }
    
    return (
        <section className='cart'>
            <h2>YOUR BAG</h2>
            {cart.map((item) => {
                return (
                    <div>
                        <CartItem key={item.id} {...item} />
                    </div>
                )
            })}
            <footer>
                <hr></hr>
                <div className='cart-total'>

                    <h4>total <span>$ {total}</span></h4>
                </div>
                <button className='btn clear-btn' onClick={clearCart}>CLEAR CART</button>
            </footer>
        </section>
    )
}

export default CartContainer