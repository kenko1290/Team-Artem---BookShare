import "./App.css";
// import EditProfile from "./edit_profile/edit_profile";
import AboutUs from './pages/AboutUs';
import HomePage1 from './pages/homepage1';
import PostPage from './pages/PostPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RequestsPage from "./pages/RequestsPage/requestsPage";
import MyAccountPage from "./pages/MyAccountPage/myAccountPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import LogoutPage from "./pages/LogoutPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
	return (
		<Router>		
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/about" element={<AboutUs />} />
				<Route path="/post" element={<PostPage />} />
				<Route path="/home" element={<HomePage1 />} />
				<Route path="/" element={<HomePage1 />} />
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="/settings" element={<SettingsPage />} />
				<Route path="/my-account" element={<MyAccountPage />} />
				<Route path="/post" element={<PostPage />} />
				<Route path="/request" element={<RequestsPage />} />
				<Route path="/sign-up" element={<SignupPage />} />
				<Route path="/logout" element={<LogoutPage />} />
			</Routes>
		</Router>

	);
}

export default App;