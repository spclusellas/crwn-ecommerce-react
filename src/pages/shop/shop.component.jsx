import React, { useState } from 'react'

import CollectionPreview from "../../components/collection-preview/collection-preview.component"

import SHOP_DATA from "./shop.data.js"

const ShopPage = () => {

    const [ collections, setCollections ] = useState(SHOP_DATA)

    return (
        <div className="shop-page">
            { collections.map( ({id, ...collectionData}) => <CollectionPreview key={id} {...collectionData} />) }
        </div>
    )
}

export default ShopPage
