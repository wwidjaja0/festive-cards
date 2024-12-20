import { motion } from "motion/react";
import Credits from "./Credits";

const HomeCard = () => {
	const generateRandomColor = () => {
		const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
		return randomColor;
	};

	document.documentElement.style.setProperty(
		"--background-color",
		generateRandomColor()
	);
	return (
		<motion.div
			className="home-card"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				duration: 2,
			}}
		>
			<h1 className="dm-sans">Thank you for existing.</h1>
			<img
				className="home-card-image no-drag"
				src="https://media.tenor.com/FetQ_KhWgd4AAAAM/chill-guy.gif"
			/>
			<Credits fixed={false} />
		</motion.div>
	);
};

export default HomeCard;
