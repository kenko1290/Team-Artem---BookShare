import SmallNav from '../components/smallNav.js';

export default function HomePage1() {
    return (
        <>
            <SmallNav />
            <div className="btns">
                <button className="login-btn">Login</button>
                <button className="sign-up">Create an Account</button>
            </div>
        </>
    )
}