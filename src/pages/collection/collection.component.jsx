import React from 'react'
import { useSelector } from "react-redux"

import CollectionItem from "../../components/collection-item/collection-item.component"
import { selectCollection } from "../../redux/shop/shop.selectors"

import "./collection.styles.scss"

const CollectionPage = ({ match }) => {
    console.log("matchh", match);
    const collection = useSelector(state => selectCollection(state, match.params.collectionUrlParam));
    const { title, items } = collection
    return (
        <div className="collection-page">
            <h2 className="title">{ title }</h2>
            <div className="items">
                {
                    items.map(item => <CollectionItem key={item.id} item={ item } />)
                }
            </div>
        </div>
    )
}

export default CollectionPage
