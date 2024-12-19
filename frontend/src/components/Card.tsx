import { Link } from "react-router-dom";

const Card = () => {
	return (
		<div className="home-card">
			<h1 className="dm-sans">
				Hi! If you've managed to stumble upon this page, it means you're a
				pretty chill guy.
			</h1>
			<img
				className="home-card-image no-drag"
				src="https://media.tenor.com/FetQ_KhWgd4AAAAM/chill-guy.gif"
			/>
			<p className="dm-mono">
				made with love -{" "}
				<Link to="https://www.wwidjaja.site/" target="blank">
					wwidjaja0
				</Link>
			</p>
		</div>
	);
};

export default Card;
