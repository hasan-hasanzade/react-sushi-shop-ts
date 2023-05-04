import React from 'react'
import { Link } from 'react-router-dom'

const CartEmpty: React.FC = () => {
  return (
   <>
      <div className='container'>
        <div className='empty-wrap'>
        <img width='553' src="https://www.adasglobal.com/img/empty-cart.png" alt="" />
        <div className='center'>
        <p className='cart-par'>You have no items in your shopping cart.</p>  
        <p className='cart-para'>Let's go buy something!</p>
        <Link to='/' className='button button-black'>
          <span>Back</span>
        </Link>
        </div>

        </div>
      </div>
   </>

  )
}

export default CartEmpty