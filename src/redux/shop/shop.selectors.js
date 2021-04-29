import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop], 
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    (collections) => Object.keys(collections).map(key => collections[key])
)

const getId = (_, id) => id;

export const selectCollection = createSelector(
    [selectCollections, getId], 
    (collections, id) => collections[id]
);
