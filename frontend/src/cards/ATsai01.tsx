import Card from "../components/Card";
import Timeline from "../components/Timeline";
import { motion } from "motion/react";

const AngelaTsai01 = () => {
	return (
		<div>
			<div className="hero-section">
				<motion.h1
					initial={{ opacity: 0, y: -100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5, ease: "easeInOut", type: "spring" }}
					viewport={{ once: true }}
					className="personal-title"
				>
					To: Angela
				</motion.h1>
				<motion.h1 className="personal-title"></motion.h1>
				<motion.h1
					initial={{ opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ delay: 1.5, ease: "easeInOut", type: "spring" }}
					viewport={{ once: true }}
					className="personal-title"
				></motion.h1>
			</div>
			<motion.p
				initial={{ opacity: 1 }}
				whileInView={{ opacity: 0 }}
				viewport={{ once: true }}
				transition={{ delay: 5 }}
				className="dm-sans hero-buffer"
			>
				Hint: scroll down :3
			</motion.p>
			<Timeline>
				<Card
					title={"🎉 Happy Belated Birthday, Victor 🎉"}
					img={"https://media.tenor.com/FetQ_KhWgd4AAAAM/chill-guy.gif"}
					text={"chill guy"}
				/>
				<Card
					title={"🎉 Happy Belated Birthday, Victor 🎉"}
					img={"https://media.tenor.com/FetQ_KhWgd4AAAAM/chill-guy.gif"}
					text={"chill guy"}
				/>
				<Card
					title={"🎉 Happy Belated Birthday, Victor 🎉"}
					img={"https://media.tenor.com/FetQ_KhWgd4AAAAM/chill-guy.gif"}
					text={"chill guy"}
				/>
				<Card
					title={"🎉 Happy Belated Birthday, Victor 🎉"}
					img={"https://media.tenor.com/FetQ_KhWgd4AAAAM/chill-guy.gif"}
					text={"chill guy"}
				/>
				<Card
					title={"🎉 Happy Belated Birthday, Victor 🎉"}
					img={"https://media.tenor.com/FetQ_KhWgd4AAAAM/chill-guy.gif"}
					text={"chill guy"}
				/>
				<Card
					title={"🎉 Happy Belated Birthday, Victor 🎉"}
					img={"https://media.tenor.com/FetQ_KhWgd4AAAAM/chill-guy.gif"}
					text={"chill guy"}
				/>
				<Card
					title={"🎉 Happy Belated Birthday, Victor 🎉"}
					img={"https://media.tenor.com/FetQ_KhWgd4AAAAM/chill-guy.gif"}
					text={"chill guy"}
				/>
				<Card
					title={"🎉 Happy Belated Birthday, Victor 🎉"}
					img={"https://media.tenor.com/FetQ_KhWgd4AAAAM/chill-guy.gif"}
					text={"chill guy"}
				/>
			</Timeline>
		</div>
	);
};
export default AngelaTsai01;
