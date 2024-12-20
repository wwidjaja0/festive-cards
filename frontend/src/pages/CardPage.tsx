import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Snowfall from "react-snowfall";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import VictorKuCards from "../cards/VKu01";
import AngelaTsaiCards from "../cards/ATsai01";
import KylieLauCards from "../cards/KLau01";

function CardPage() {
	const { cardName } = useParams();
	const useSnow = true;
	const names = ["vicky", "angela", "pookie"];
	const isValidCardName = names.includes(cardName || "");

	// Define color mapping for each cardName
	const colors: Record<string, [string, string, string]> = {
		default: ["#ffffff", "#000000", "#000000"],
		vicky: ["#384B70", "#507687", "#B8001F"],
		angela: ["#5CB338", "#FFC145", "#FB4141"],
		pookie: ["#3C552D", "#CA7373", "#D7B26D"],
	};

	// Get the current color based on the cardName
	const baseColors = colors[cardName!] || colors.default;

	// Scroll progress and animated background color
	const { scrollYProgress } = useScroll();
	const smoothScroll = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
	});

	// Interpolated color (baseColor to white as you scroll)
	const backgroundColor = useTransform(
		smoothScroll,
		[0, 0.5, 1],
		[baseColors[0], baseColors[1], baseColors[2]] // Base color to white
	);

	return (
		<motion.div
			style={{
				backgroundColor, // Apply animated background color
				minHeight: "100vh",
				width: "100vw",
				overflow: "hidden",
			}}
		>
			<div>
				{isValidCardName ? (
					<>
						{cardName === "vicky" && <VictorKuCards />}
						{cardName === "angela" && <AngelaTsaiCards />}
						{cardName === "pookie" && <KylieLauCards />}
						<p className="dm-mono" style={{ position: "fixed", bottom: 0 }}>
							made with love -{" "}
							<Link to="https://www.wwidjaja.site/" target="blank">
								wwidjaja0
							</Link>
						</p>
					</>
				) : (
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{
							duration: 1,
							delay: 0.5,
							ease: "easeInOut",
							type: "spring",
							stiffness: 260,
							damping: 20,
						}}
						style={{ margin: "10% 1vh" }}
					>
						<h1 className="dm-sans">Card not found!</h1>
						<p className="dm-mono">
							The card you're looking for does not exist.
						</p>
						<Link className="dm-mono" to="/">
							Go back to the homepage.
						</Link>
					</motion.div>
				)}
				{useSnow && (
					<Snowfall
						style={{
							position: "fixed",
							width: "100vw",
							height: "100vh",
						}}
						snowflakeCount={30}
					/>
				)}
			</div>
		</motion.div>
	);
}

export default CardPage;
