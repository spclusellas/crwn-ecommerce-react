import React from "react";
import { useSelector } from "react-redux";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart.icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.componenet";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selector";

import "./header.styles.scss";
import { HeaderContainer, LogoContainer, OptionDiv, OptionLink, OptionsContainer } from "./header.styles";

const Header = () => {
    const currentUser = useSelector(selectCurrentUser);
    const toggleCartHidden = useSelector(selectCartHidden);

    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">Shop</OptionLink>
                <OptionLink to="/contact">Contact</OptionLink>
                {
                    currentUser ? 
                        <OptionsContainer onClick={() => auth.signOut()}>{currentUser.displayName}</OptionsContainer> 
                    : 
                        <OptionLink to="/sign-in">Sign In</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {toggleCartHidden ? null : <CartDropdown />}
        </HeaderContainer>
    );
};

export default Header;
