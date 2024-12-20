import BufferText from "../components/BufferText";
import Card from "../components/Card";
import HeroText from "../components/HeroText";
import Timeline from "../components/Timeline";
import { motion } from "motion/react";

const VictorKu01 = () => {
	return (
		<div>
			<div className="hero-section">
				<HeroText text={"To: Victor"} />
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
					title={"When we first met,"}
					img={
						"https://drive.google.com/thumbnail?id=1QzlLMXI-ypKyQpLaDoz5LkZ98eFOdVLb&sz=w400"
					}
					text={"I thought you were a chill guy."}
				/>
				<BufferText text={"But then I realized..."} />
				<Card
					title={"...you're really just a chill guy."}
					img={
						"https://drive.google.com/thumbnail?id=1zDpW2Mec35_gsHENvFEqOFfnINM3vLHu&sz=w400"
					}
					text={
						"Who could have known that we would have so many hang outs this quarter and have such fun times together? I'm honestly so grateful that you invited me to as many things as you did and that we got to know each other better through ACM."
					}
				/>
				<BufferText text={"And to that I say:"} />
				<Card
					title={"🎉 Happy Belated Birthday, Victor 🎉"}
					img={
						"https://drive.google.com/thumbnail?id=1IuVL_xnBJQEYXPnn69sgGuBQwLyJPrk3&sz=w400"
					}
					text={"WRITE NOTE HERE"}
				/>
				<Card
					title={"BIRTHDAY PHOTO"}
					img={
						"https://drive.google.com/thumbnail?id=1r_I3hFXop7V1uDUzjijvAWU0lNY5hX2n&sz=w400"
					}
					text={"WRITE NOTE HERE"}
				/>
				<Card
					title={"BIRTHDAY PHOTO"}
					img={
						"https://drive.google.com/thumbnail?id=1yKu5map-3lhKq0znWCZfiQ1XPXfGMOfW&sz=w400"
					}
					text={"WRITE NOTE HERE"}
				/>
				<Card
					title={"ALSO MERRY CHRISTMAS WOOOOO 🎄🎄🎄"}
					img={
						"https://drive.google.com/thumbnail?id=1PBEnDfu7qm4ICih-u3Ky3UEu2Z1f7l_D&sz=w400"
					}
					text={"WRITE NOTE HERE"}
				/>
				<Card
					title={"PHOTO"}
					img={
						"https://drive.google.com/thumbnail?id=1rvG09ajoCNazSjO04btmzYztq9CDSVvZ&sz=w400"
					}
					text={"WRITE NOTE HERE"}
				/>
				<Card
					title={"And finally, a gift for you..."}
					img={
						"https://drive.google.com/thumbnail?id=1IuVL_xnBJQEYXPnn69sgGuBQwLyJPrk3&sz=w400"
					}
					text={"WRITE NOTE HERE"}
				/>
			</Timeline>
		</div>
	);
};
export default VictorKu01;
