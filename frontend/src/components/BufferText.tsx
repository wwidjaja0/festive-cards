import React from "react";
import { motion } from "motion/react";

interface BufferTextProps {
	text: string;
}

const BufferText: React.FC<BufferTextProps> = ({ text }) => {
	return (
		<motion.h1
			initial={{ scale: 0 }}
			whileInView={{ scale: 1 }}
			viewport={{ once: true }}
			transition={{ delay: 0.5, ease: "easeInOut", type: "spring" }}
			className="text-buffer"
		>
			{text}
		</motion.h1>
	);
};
export default BufferText;
