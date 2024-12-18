import { Link } from "react-router-dom";
import { useEffect } from "react";
import Snowfall from "react-snowfall";
import { usePalette } from "color-thief-react";
import chillPNG from "/chill-guy.png";

function HomePage() {
	const useSnow = true;
	const { data, loading } = usePalette(chillPNG, 2, "hex");

	useEffect(() => {
		if (!loading && data) {
			const root = document.documentElement;
			root.style.setProperty("--primary-color", data[0]);
			root.style.setProperty("--secondary-color", data[1]);
		}
	});

	return (
		<div>
			<div className="home-card">
				<h1 className="dm-sans">
					Hi! If you've managed to stumble upon this page, it means you're a
					pretty chill guy.
				</h1>
				<img
					className="home-card-image no-drag"
					src="https://media.tenor.com/FetQ_KhWgd4AAAAM/chill-guy.gif"
				/>
				<h2 className="dm-mono">
					made with love -{" "}
					<Link to="https://www.wwidjaja.site/" target="blank">
						wwidjaja0
					</Link>
				</h2>
				<div>
					<Link to="https://github.com/wwidjaja0/" target="blank">
						<img
							className="socials no-drag"
							src="/github.png"
							width="50rem"
							alt="wwidjaja0 github"
						/>
					</Link>
					<Link to="https://www.linkedin.com/in/wwidjaja0/" target="blank">
						<img
							className="socials no-drag"
							src="/linkedin.png"
							width="50rem"
							alt="wwidjaja0 linkedin"
						/>
					</Link>
				</div>
				<p className="dm-mono">
					icons by{" "}
					<Link
						to="https://www.flaticon.com/authors/riajulislam"
						target="blank"
					>
						riajulislam
					</Link>
				</p>
			</div>
			{useSnow && <Snowfall snowflakeCount={30} />}
		</div>
	);
}
export default HomePage;
