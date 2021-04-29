import React from 'react'
import { useSelector } from "react-redux"

import CollectionPreview from "../collection-preview/collection-preview.component"
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors"

import "./collections-overview.styles.scss"

const CollectionsOverview = () => {

    const collections = useSelector(selectCollectionsForPreview)

    return (
        <div className="collection-overview">
            { collections.map( ({id, ...collectionData}) => <CollectionPreview key={id} {...collectionData} />) }
        </div>
    )
}

export default CollectionsOverview
