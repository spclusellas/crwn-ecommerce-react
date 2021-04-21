import React, { useState } from "react";

import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"

import { signInWithGoogle } from "../../firebase/firebase.utils"

const SignIn = () => {
    const [signInData, setSignInData] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = e => {};
    const handleChange = e => {
        signInData({
            ...signInData,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <div className="sign-in">
            <h2>I have already have an account</h2>
            <span>Sign In with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput name="email" type="email" label="Email" handleChange={handleChange} required />
                <FormInput name="password" type="password" label="Password" handleChange={handleChange} required />
                <CustomButton type="submit"> Sign In </CustomButton>
                <CustomButton onClick={ signInWithGoogle } > Sign In with Google </CustomButton>
            </form>
        </div>
    );
};

export default SignIn;
