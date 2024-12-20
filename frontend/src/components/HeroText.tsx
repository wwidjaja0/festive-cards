import React from "react";
import { motion } from "motion/react";

interface HeroTextProps {
	text: string;
}

const HeroText: React.FC<HeroTextProps> = ({ text }) => {
	return (
		<motion.h1
			initial={{ opacity: 0, y: -100 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.5, ease: "easeInOut", type: "spring" }}
			viewport={{ once: true }}
			className="personal-title"
		>
			{text}
		</motion.h1>
	);
};
export default HeroText;
