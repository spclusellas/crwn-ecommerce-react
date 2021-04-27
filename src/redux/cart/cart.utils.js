export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

    if(existingCartItem){
        return cartItems.map( cartItem => cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem )
    } 

    return [ ...cartItems, { ...cartItemToAdd, quantity: 1 } ]
}

export const removeItemFromCart = (cartItems, itemToBeRemoved) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === itemToBeRemoved.id)

    if(existingCartItem.quantity === 1){
        return clearItemFromCart(cartItems, itemToBeRemoved)
    }

    return cartItems.map( cartItem => cartItem.id === itemToBeRemoved.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem )
}

export const clearItemFromCart = (cartItems, itemToBeRemoved) => cartItems.filter( cartItem => cartItem.id !== itemToBeRemoved.id )