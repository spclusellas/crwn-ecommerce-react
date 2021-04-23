import React, { useState } from "react";

import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = () => {
    const [signInData, setSignInData] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = signInData;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setSignInData({
                email: "",
                password: "",
            });
        } catch (error) {
            console.log(error);
        }
    };
    const handleChange = e => {
        setSignInData({
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
                <div className="buttons">
                    <CustomButton type="submit"> Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign In with Google
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
