import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

const SignUp = () => {
    const [signUpData, setSignUpData] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleSubmit = async e => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = signUpData;
        if (password !== confirmPassword) {
            alert("Passwords don´t match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserDocument(user, { displayName });
            setSignUpData({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = e => {
        setSignUpData({
            ...signUpData,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput type="text" name="displayName" required label="Display Name" value={signUpData.displayName} onChange={handleChange} />
                <FormInput type="email" name="email" required label="Email" value={signUpData.email} onChange={handleChange} />
                <FormInput type="password" name="password" required label="Password" value={signUpData.password} onChange={handleChange} />
                <FormInput type="password" name="confirmPassword" required label="Confirm Password" value={signUpData.confirmPassword} onChange={handleChange} />
                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </div>
    );
};

export default SignUp;
