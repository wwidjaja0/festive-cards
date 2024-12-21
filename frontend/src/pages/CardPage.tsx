import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Snowfall from "react-snowfall";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import Credits from "../components/Credits";
import { useEffect } from "react";
import BryceVillao01 from "../cards/BVillao01";
import VictorKu01 from "../cards/VKu01";
import AngelaTsai01 from "../cards/ATsai01";
import KylieLau01 from "../cards/KLau01";
import LisaLiu01 from "../cards/LLiu01";
import General01 from "../cards/General01";
import Meme01 from "../cards/Meme01";

function CardPage() {
	const { cardName } = useParams();
	const useSnow = true;
	const names = [
		"vicky",
		"angela",
		"pookie",
		"bryce",
		"lisa",
		"christmass",
		"christmas",
	];
	const isValidCardName = names.includes(cardName || "");
	if (!isValidCardName) {
		document.documentElement.style.setProperty("--background-color", "#000000");
	}

	// Define color mapping for each cardName
	const colors: Record<string, [string, string, string]> = {
		default: ["#000000", "#000000", "#000000"],
		vicky: ["#384B70", "#507687", "#B8001F"],
		angela: ["#5CB338", "#FFC145", "#FB4141"],
		pookie: ["#3C552D", "#CA7373", "#D7B26D"],
		bryce: ["#384B70", "#507687", "#B8001F"],
		lisa: ["#5CB338", "#FFC145", "#FB4141"],
		christmas: ["#3C552D", "#CA7373", "#D7B26D"],
		christmass: ["#3C552D", "#CA7373", "#D7B26D"],
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

	// Update CSS variable dynamically
	useEffect(() => {
		const unsubscribe = backgroundColor.onChange((latest) => {
			document.documentElement.style.setProperty("--background-color", latest);
		});

		// Clean up the subscription
		return () => unsubscribe();
	}, [backgroundColor]);

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
						{cardName === "vicky" && <VictorKu01 />}
						{cardName === "angela" && <AngelaTsai01 />}
						{cardName === "pookie" && <KylieLau01 />}
						{cardName === "bryce" && <BryceVillao01 />}
						{cardName === "lisa" && <LisaLiu01 />}
						{cardName === "christmas" && <General01 />}
						{cardName === "christmass" && <Meme01 />}
						<Credits fixed={true} />
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
