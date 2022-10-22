export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="site-title">
                BookShare
            </a>
            <SearchBar />
            <ul>
                <li className="active">
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/my-account">My Account</a>
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

const SearchBar = () => (
    <form action="/" method="get" className="nav-search-bar">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Find books..."
            name="s"
        />
        <button type="submit">Search</button>
    </form>
);


//Add a post button and rest of navbar components
//Add search bar