import React from 'react'
import SmallNav from "../components/smallNav";

export default function LogoutPage() {
    return (
        <>
            <SmallNav/>
            <div className="btns">
                <a href="/login" style={{ textDecoration: 'none' }} >
                    <button className="login-btn">Login</button>
                </a>
                <a href="/sign-up" style={{ textDecoration: 'none' }} >
                    <button className="sign-up">Create an Account</button>
                </a>
            </div>

        </>
    )
}