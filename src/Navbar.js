export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="site-title">
                BookShare
            </a>
            <ul>
                <li className="active">
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/profile">Profile</a>
                </li>
                <li>
                    <a href="/settings">Settings</a>
                </li>
            </ul>
        </nav>
    )
}

//Add a post button and rest of navbar components
//Add search bar