import React, { useContext } from 'react'
import style from './placeorder.module.css'
import style1 from '../Cart/cart.module.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

const {getTotalCartAmount} = useContext(StoreContext)

  return (
      <form className={style.placeOrder}>
        <div className={style.placeOrderLeft}>
          <p className={style.title}>Delivery Details</p>
          <div className={style.multiInputs}>
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name'/>
          </div>
          <input type="email" placeholder='Email Address'/>
          <input type="text" placeholder='Street'/>
          <div className={style.multiInputs}>
            <input type="text" placeholder='City' />
            <input type="text" placeholder='State'/>
          </div>
          <div className={style.multiInputs}>
            <input type="text" placeholder='Zip Code' />
            <input type="text" placeholder='Country'/>
          </div>
          <input type="text" placeholder='Phone Number'/>
        </div>
        <div className={style.placeOrderRight}>
        <div className={style1.CartTotal}>
          <h2>Cart Total</h2>
          <div>
            <div className={style1.CartTotalDetails}>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className={style1.CartTotalDetails}>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:5}</p>
            </div>
            <hr />
            <div className={style1.CartTotalDetails}>
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+5}</b>
            </div>
          </div>
          <button>Proceed To Payment</button>
        </div>
        </div>
      </form>
  )
}

export default PlaceOrder