import React from 'react'
import CartItem from './CartItem.js'
import { useGlobalConttext } from './context.js'

function CartContainer() {
    const { cart } = useGlobalConttext()
    if (cart.length === 0) {
        return (
            <div className='empty-cart'>
                <h4>your bag</h4>
                <p>is empty</p>

            </div>
        )
    }
    return (
        <section className='cart'>
            <h2>YOUR BAG</h2>

            {cart.map((item, id) => {
                return (
                    <div>
                        <CartItem key={id} {...item} />
                    </div>

    )
            })}
            <footer>
                <hr></hr>
                <div className='cart-total'>
                    <h4 className='cart-total'>total <span>$ 00</span></h4>
                </div>
                <button className='btn clear-btn' onClick={() => console.log('clear btn')}>CLEAR CART</button>
            </footer>
        </section>
    )
}

export default CartContainer