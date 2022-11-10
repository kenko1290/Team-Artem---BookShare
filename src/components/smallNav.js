export default function SmallNav() {
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
        </>
    )
}