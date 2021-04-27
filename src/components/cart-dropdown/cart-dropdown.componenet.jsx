import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { withRouter } from "react-router-dom"

import CartItem from "../cart-item/cart-item.component"
import CustomButton from "../custom-button/custom-button.component"
import { selectCartItems } from "../../redux/cart/cart.selector"
import { toggleCartHidden } from "../../redux/cart/cart.actions"

import "./cart-dropdown.styles.scss"

const CartDropdown = ({ history }) => {

    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)

    const handleButtonClick = () => {
        dispatch(toggleCartHidden())
        history.push("/checkout")
    }

    return (
        <div className="cart-dropdown">
            <div className="class-items">
                { cartItems.length ? 
                cartItems.map( cartItem => (<CartItem key={cartItem.id} item={cartItem} /> ))  
                :
                <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={handleButtonClick} >
                GO TO CHECKOUT
            </CustomButton>
        </div>
    )
}

export default withRouter(CartDropdown)
