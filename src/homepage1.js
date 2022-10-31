export default function HomePage1() {
    return (
        <>
            <nav className="nav">
                <a href="/" className="site-title">
                    BookShare
                </a>
                <ul>
                    <li className="active">
                        <a href="/about">About</a>
                    </li>
                </ul>
            </nav>
            <div className="btns">
                <button className="login-btn">Login</button>
                <button className="sign-up">Create an Account</button>
            </div>
        </>
    )
}