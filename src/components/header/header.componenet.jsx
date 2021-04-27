import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart.icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.componenet"
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { selectCurrentUser } from "../../redux/user/user.selector"
import { selectCartHidden } from "../../redux/cart/cart.selector"

import "./header.styles.scss";

const Header = () => {
    const currentUser = useSelector(selectCurrentUser);
    const toggleCartHidden = useSelector(selectCartHidden)

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
            { toggleCartHidden ? null:  (<CartDropdown />)  }
        </div>
    );
};

export default Header;
