import "./App.css";
import Settings from "./settings";
// import EditProfile from "./edit_profile/edit_profile";
import BookList from './components/BookList';
import AboutUs from './pages/AboutUs';
import HomePage1 from './pages/homepage1';
import PostPage from './pages/PostPage';
import Profile from './components/profile/profile';
import RequestsPage from "./pages/RequestsPage/requestsPage";
import MyAccountPage from "./pages/MyAccountPage/myAccountPage";

function App() {
	return (
		<div className="App">
			{/* <EditProfile /> */}
			{/* <Settings /> */}
			{/* <Profile /> */}
      <MyAccountPage />
		</div>
	);
}

export default App;