import React from "react";
import { Link } from "react-router-dom";

interface CreditsProps {
	fixed: boolean;
}

const Credits: React.FC<CreditsProps> = ({ fixed }) => {
	if (fixed) {
		return (
			<p
				className="dm-mono"
				style={{
					position: "fixed",
					bottom: 0,
					margin: "1rem",
					opacity: 0.5,
					background: "black",
					border: "1px solid black",
					borderRadius: "1rem",
				}}
			>
				made with love -{" "}
				<Link to="https://www.wwidjaja.site/" target="blank">
					wwidjaja0
				</Link>
			</p>
		);
	} else {
		return (
			<p className="dm-mono">
				made with love -{" "}
				<Link to="https://www.wwidjaja.site/" target="blank">
					wwidjaja0
				</Link>
			</p>
		);
	}
};
export default Credits;
