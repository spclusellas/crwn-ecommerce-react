import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Route } from "react-router-dom";

import WithSpinner from "../../components/with-spinner/with-spinner.component"
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions"
import { selectIsCollectionFetching, selectIsCollectionLoaded } from "../../redux/shop/shop.selectors"

import "./shop.styles.scss";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = ({ match }) => {

    const dispatch = useDispatch()
    const isCollectionFetching = useSelector(selectIsCollectionFetching)
    const isCollectionLoaded = useSelector(selectIsCollectionLoaded)

    useEffect(() => {
        dispatch(fetchCollectionsStart())
        return () => {};
    }, []);

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />} />
            <Route path={`${match.path}/:collectionUrlParam`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props}  />} />
        </div>
    );
};

export default ShopPage;
