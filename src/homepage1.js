import smallNav from './smallNav.js';

export default function HomePage1() {
    return (
        <>
            <smallNav />
            <div className="btns">
                <button className="login-btn">Login</button>
                <button className="sign-up">Create an Account</button>
            </div>
        </>
    )
}