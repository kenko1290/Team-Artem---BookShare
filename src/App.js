
import "./App.css";
// import Settings from "./settings";
import EditProfile from "./edit_profile/edit_profile";
import BookList from './components/BookList';
import AboutUs from './pages/AboutUs';
import HomePage1 from './pages/homepage1';
import PostPage from './pages/PostPage';
import Profile from './components/profile/profile';

function App() {
	return (
		<div className="App">
			<EditProfile />
			{/* <Settings /> */}
			{/* <Profile /> */}
		</div>
	);
}

export default App;
