import React from 'react'
import { useDispatch, useSelector } from "react-redux"

import { toggleCartHidden } from "../../redux/cart/cart.actions"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import { selectCartItemsCount } from "../../redux/cart/cart.selector"

import "./cart-icon.styles.scss"

const CartIcon = () => {

    const dispatch = useDispatch()
    const cartItemsCount = useSelector(selectCartItemsCount)

    const handleClick = e => {
        dispatch(toggleCartHidden())
    }

    return (
        <div className="cart-icon" onClick={ handleClick }>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{ cartItemsCount }</span>
        </div>
    )
}

export default CartIcon
