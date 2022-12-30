import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRouteRequiresAuth from "./components/PrivateRouteRequiresAuth";
import EditProfilePage from "./pages/EditProfilePage";
import AboutUsPage from "./pages/AboutUsPage/AboutUs";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import ShowTextbookPage from "./pages/ShowTextbookPage/index";
import RequestsPage from "./pages/RequestsPage";
import MyAccountPage from "./pages/MyAccountPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DefaultPage from "./pages/DefaultPage";
import SettingsPage from "./pages/SettingPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
	return (
		<AuthProvider>
			<Router>
				<Routes>
					<Route path="/" element={<DefaultPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/sign-up" element={<SignupPage />} />
					<Route path="/home" element={<HomePage />} />
					<Route path="/about-us" element={<AboutUsPage />} />
					<Route
						path="/post"
						element={
							<PrivateRouteRequiresAuth>
								<PostPage />
							</PrivateRouteRequiresAuth>
						}
					/>
					<Route
						path="/request"
						element={
							<PrivateRouteRequiresAuth>
								<RequestsPage />
							</PrivateRouteRequiresAuth>
						}
					/>
					<Route
						path="/my-account"
						element={
							<PrivateRouteRequiresAuth>
								<MyAccountPage />
							</PrivateRouteRequiresAuth>
						}
					/>
					<Route
						path="/profile"
						element={
							<PrivateRouteRequiresAuth>
								<ProfilePage />
							</PrivateRouteRequiresAuth>
						}
					/>
					<Route
						path="/edit-profile"
						element={
							<PrivateRouteRequiresAuth>
								<EditProfilePage />
							</PrivateRouteRequiresAuth>
						}
					/>
					<Route
						path="/settings"
						element={
							<PrivateRouteRequiresAuth>
								<SettingsPage />
							</PrivateRouteRequiresAuth>
						}
					/>
					<Route path="/logout" element={<DefaultPage />} />
					<Route
						path="/textbooks/:id"
						element={
							<PrivateRouteRequiresAuth>
								{" "}
								<ShowTextbookPage />{" "}
							</PrivateRouteRequiresAuth>
						}
					/>
				</Routes>
			</Router>
		</AuthProvider>
	);
}

export default App;
