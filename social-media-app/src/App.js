import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Registration from "./pages/Registration"
import ProtectedRoute from "./routes/ProtectedRoute"
import SinglePost from "./components/posts/SinglePost"

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<ProtectedRoute>
						<Home />
					</ProtectedRoute>
				}
			/>
			<Route path="/login/" element={<Login />} />
			<Route path="/register/" element={<Registration />} />
			<Route
				path="/post/:postId/"
				element={
					<ProtectedRoute>
						<SinglePost />
					</ProtectedRoute>
				}
			/>
		</Routes>
	)
}
export default App
