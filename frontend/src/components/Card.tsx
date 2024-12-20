import { motion, Variants } from "motion/react";
import React from "react";

interface CardProps {
	title: string;
	img: string;
	text: string;
}

const CardVariants: Variants = {
	offscreen: { x: -100, opacity: 0 },
	onscreen: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 2,
			delay: 0.2,
			ease: "easeIn",
			type: "spring",
			stiffness: 260,
			damping: 20,
		},
	},
};

const Card: React.FC<CardProps> = ({ title, img, text }) => {
	return (
		<motion.div
			initial="offscreen"
			whileInView="onscreen"
			variants={CardVariants}
			viewport={{ once: true, amount: 0.5 }}
			className="personal-card"
		>
			<div className="card">
				<h1 className="personal-card-title">{title}</h1>
				<img
					className="personal-card-image no-drag"
					src={img}
					alt="drive image"
				/>
			</div>
			<p className="personal-card-text">{text}</p>
		</motion.div>
	);
};

export default Card;
