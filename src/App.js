import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/header/header.componenet"
import HomePage from "./pages/homepage/hompage.component";
import ShopPage from "./pages/shop/shop.component"
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.componenet"
import { auth } from "./firebase/firebase.utils"

function App() {

    const [ currentUser, setCurrentUser ] = useState(null)

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            console.log(user)
        })
    }, [])

    return (
        <>  
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/shop" component={ShopPage} />
                <Route exact path="/sign-in" component={SignInSignUp} />
            </Switch>
        </>
    );
}

export default App;
