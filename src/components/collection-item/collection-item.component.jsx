import React from 'react'
import { useDispatch } from "react-redux"

import "./collection-item.styles.scss"

import CustomButton from "../custom-button/custom-button.component"
import { addItem } from "../../redux/cart/cart.actions"

const CollectionItem = ({item}) => {
    const { name, price, imageUrl } = item
    const dispatch = useDispatch()

    const handleAddItem = () => {
        console.log(item);
        dispatch(addItem(item))
    }

    return (
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="collection-footer">
                <span className="name"> {name} </span>
                <span className="price"> {price} </span>
            </div> 
            <CustomButton inverted onClick={ handleAddItem } >Add To Cart</CustomButton>  
        </div>
    )
}

export default CollectionItem
