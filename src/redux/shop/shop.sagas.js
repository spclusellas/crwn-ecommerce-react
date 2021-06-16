import { takeEvery, call, put } from "redux-saga/effects"
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils"
import { fetchCollectionSuccess, fetchCollectionFailure } from "./shop.actions"
import ShopActionsTypes from "./shop.types"

export function* fetchCollectionsAsync(){
    try {
        const collectionRef = firestore.collection("collections");
        const snapshot = yield collectionRef.get()
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
        yield put(fetchCollectionSuccess(collectionsMap))        
    } catch (error) {
        console.log(error)
        yield put(fetchCollectionFailure(error.messege))
    }
}

export function* fetchCollectionsStart(){
    yield takeEvery(ShopActionsTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}