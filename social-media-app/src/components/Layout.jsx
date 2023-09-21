import React from "react"
import Navigationbar from "./Navbar"
import { useNavigate } from "react-router-dom"
import { ArrowLeftOutlined } from "@ant-design/icons"
function Layout(props) {
	const { hasNavigationBack } = props
	const navigate = useNavigate()
	return (
		<div>
			<Navigationbar />
			{hasNavigationBack && (
				<ArrowLeftOutlined
					style={{
						color: "#0D6EFD",
						fontSize: "24px",
						marginLeft: "5%",
						marginTop: "1%",
					}}
					onClick={() => navigate(-1)}
				/>
			)}
			<div className="container my-2">{props.children}</div>
		</div>
	)
}
export default Layout
