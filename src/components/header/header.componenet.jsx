import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart.icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.componenet"
import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

const Header = () => {
    const currentUser = useSelector(state => state.user.currentUser);
    const toggleCardHidden = useSelector(state => state.card.hidden)

    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link to="/shop" className="option">
                    Shop
                </Link>
                <Link to="/contact" className="option">
                    Contact
                </Link>
                {currentUser ? (
                    <div className="option" onClick={() => auth.signOut()}>
                        {currentUser.displayName}
                    </div>
                ) : (
                    <Link to="/sign-in" className="option">
                        Sign In
                    </Link>
                )}
                <CartIcon />
            </div>
            { toggleCardHidden ? null:  (<CartDropdown />)  }
        </div>
    );
};

export default Header;
