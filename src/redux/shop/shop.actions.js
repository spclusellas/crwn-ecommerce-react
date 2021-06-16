import ShopActionTypes from "./shop.types";

import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
   type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionSuccess = collectionsMap => ({
   type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
   payload: collectionsMap,
});

export const fetchCollectionFailure = errorMsg => ({
   type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
   payload: errorMsg,
});

export const fetchCollectionsStartAsync = () => {
   return dispatch => {
      const collectionRef = firestore.collection("collections");
      dispatch(fetchCollectionsStart());

      collectionRef
         .get()
         .then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionSuccess(collectionsMap));
         })
         .catch(error => dispatch(fetchCollectionFailure(error.message)));
   };
};
