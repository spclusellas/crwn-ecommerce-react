import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";

import Header from "./components/header/header.componenet";
import HomePage from "./pages/homepage/hompage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.componenet";
import CheckoutPage from "./pages/checkout/checkout.component"
import { auth, createUserDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions"
import { selectCurrentUser } from "./redux/user/user.selector"

function App() {
    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser);

    //let unsuscribeFromAuth = null;

    useEffect(() => {
         auth.onAuthStateChanged(async user => {
            if (user) {
                const userRef = await createUserDocument(user);
                userRef.onSnapshot(snapShot => {
                    dispatch(setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data(),
                    }))
                });
            } else {
                dispatch(setCurrentUser(null))
            }
        });

        return () => setCurrentUser(null);
    }, []);

    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/sign-in" render={() => currentUser ? (<Redirect to="/" />) : (<SignInSignUpPage />)} />
                <Route exact path="/checkout" component={CheckoutPage} />
                <Route path="/shop" component={ShopPage} />
            </Switch>
        </>
    );
}

export default App;
