import React from 'react'
import { Route } from "react-router-dom"
import { useSelector } from "react-redux"

import CollectionsOverview from "../../components/collections-overview/collections-overview.component"
import CollectionPage from "../collection/collection.component"

import "./shop.styles.scss"

const ShopPage = ({ match }) => {
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionUrlParam`} component={CollectionPage} />
        </div>
    )
}

export default ShopPage
