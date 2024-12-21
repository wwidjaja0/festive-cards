import BufferText from "../components/BufferText";
import Card from "../components/Card";
import HeroText from "../components/HeroText";
import Timeline from "../components/Timeline";
import { motion } from "motion/react";
import MetaTags from "../components/MetaTags";
import ReactAudioPlayer from "react-audio-player";
import Button from "../components/Button";

const Meme01 = () => {
	return (
		<div>
			<MetaTags
				title="To: You"
				description="Dear You..."
				image="https://em-content.zobj.net/source/apple/81/christmas-tree_1f384.png"
				name="wwidjaja0"
			/>
			<div className="hero-section">
				<HeroText text={"To: You (yes you)"} />
			</div>
			<motion.p
				initial={{ opacity: 1 }}
				whileInView={{ opacity: 0 }}
				viewport={{ once: true }}
				transition={{ delay: 5 }}
				className="dm-sans hero-buffer"
			>
				Hint: scroll down :3 (also best experienced on desktop)
			</motion.p>
			<ReactAudioPlayer autoPlay controls loop volume={0.3}>
				<source src="./white-christmas.mp3" type="audio/mp3" />
				Audio is not supported on this browser.
			</ReactAudioPlayer>
			<Timeline>
				<Card
					title={"something about this year"}
					img={
						"https://drive.google.com/thumbnail?id=1QzlLMXI-ypKyQpLaDoz5LkZ98eFOdVLb&sz=w350"
					}
					text={"caption"}
				/>
				<BufferText text={"And now..."} />
				<Card
					title={"something about this year"}
					img={
						"https://drive.google.com/thumbnail?id=1zDpW2Mec35_gsHENvFEqOFfnINM3vLHu&sz=w350"
					}
					text={"caption"}
				/>
				<BufferText text={"So, with the year coming to an end:"} />
				<Card
					title={"MERRY CHRISTMAS WOOOOO 🎄🎄"}
					img={
						"https://drive.google.com/thumbnail?id=1IuVL_xnBJQEYXPnn69sgGuBQwLyJPrk3&sz=w350"
					}
					text={"caption"}
				/>
				<Card
					title={"thankful"}
					img={
						"https://drive.google.com/thumbnail?id=1r_I3hFXop7V1uDUzjijvAWU0lNY5hX2n&sz=w350"
					}
					text={"what i am thankful for"}
				/>
				<Card
					title={"wishes"}
					img={
						"https://drive.google.com/thumbnail?id=1yKu5map-3lhKq0znWCZfiQ1XPXfGMOfW&sz=w350"
					}
					text={"caption"}
				/>
				<BufferText text={"But wait! There's more..."} />
				<Card
					title={"ALSO HAPPY EARLY NEW YEAR 🎉🎉"}
					img={
						"https://drive.google.com/thumbnail?id=1PBEnDfu7qm4ICih-u3Ky3UEu2Z1f7l_D&sz=w350"
					}
					text={"caption"}
				/>
				<Card
					title={"Life's starting to move by faster"}
					img={
						"https://drive.google.com/thumbnail?id=1rvG09ajoCNazSjO04btmzYztq9CDSVvZ&sz=w350"
					}
					text={
						"so let's not waste a second of our time in our early adulthood and make the most of the moments."
					}
				/>
				<BufferText text={"goofy ahh photos alert 🤡"} />
				<Card
					title={"me when i'm not wich you"}
					img={
						"https://drive.google.com/thumbnail?id=1G37EOnpBf25TGho8GDydv2oBvB0ANkcN&sz=w350"
					}
					text={":("}
				/>
				<Card
					title={"when when i when im whe when im wich you"}
					img={
						"https://drive.google.com/thumbnail?id=1Gapjvsvrdws-1w8cIRPm_uCysNSlEzLG&sz=w350"
					}
					text={":)"}
				/>
				<Card
					title={"me when I don't have gift for you"}
					img={"https://cdn3.emoji.gg/emojis/7912-ant-meme.png"}
					text={"erm"}
				/>
				<Card
					title={"just kidding!"}
					img={"https://media.tenor.com/PS6medrGxqwAAAAM/cat-kiss.gif"}
					text={"here's a big fat kiss !"}
				/>
			</Timeline>
			<Button />
		</div>
	);
};

export default Meme01;
