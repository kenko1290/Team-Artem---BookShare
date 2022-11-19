import "./App.css";
import Settings from "./settings";
// import EditProfile from "./edit_profile/edit_profile";
import AboutUs from './pages/AboutUs';
import HomePage1 from './pages/homepage1';
import PostPage from './pages/PostPage';
import Profile from './components/profile/profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import RequestsPage from "./pages/RequestsPage/requestsPage";
import MyAccountPage from "./pages/MyAccountPage/myAccountPage";

function App() {
	return (
		<Router>
			<Navbar/>
			<Routes>
				<Route path="/about" element={<AboutUs />} />
				<Route path="/post" element={<PostPage />} />
				<Route path="/home" element={<HomePage1	 />} />
				<Route path="/" element={<HomePage1	 />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/settings" element={<Settings />} />
			</Routes>
		</Router>
	);
}

export default App;