import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils"
import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

const Header = ({ currentUser }) => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link to="/shop" className="option">Shop</Link>
                <Link to="/contact" className="option">Contact</Link>
                { currentUser ? (<div className="option" onClick={() => auth.signOut()} > { currentUser.displayName } </div>) : <Link to="/sign-in" className="option"> Sign In </Link> }
            </div>
        </div>
    );
};

export default Header;
