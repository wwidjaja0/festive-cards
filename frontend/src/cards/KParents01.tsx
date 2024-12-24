import BufferText from "../components/BufferText";
import Card from "../components/Card";
import HeroText from "../components/HeroText";
import Timeline from "../components/Timeline";
import { motion } from "motion/react";
import MetaTags from "../components/MetaTags";
import ReactAudioPlayer from "react-audio-player";
import Button from "../components/Button";

const KParents01 = () => {
	return (
		<div>
			<MetaTags
				title="To: Mr. and Mrs. Lau"
				description="Dear Mr. and Mrs. Lau..."
				image="https://em-content.zobj.net/source/apple/81/christmas-tree_1f384.png"
				name="wwidjaja0"
			/>
			<div className="hero-section">
				<HeroText text={"To: Mr. and Mrs. Lau"} />
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
					title={"Merry Christmas!"}
					img={"/me.gif"}
					text={
						"Merry Christmas and the happiest of holidays to the most gracious hosts on this side of the North Pole! 🎄✨"
					}
				/>
				<BufferText
					text={
						"Wishing you a Merry Christmas this year with a virtual card and some cool gifts. :)"
					}
				/>
				<Card
					title={"Thank you for all the blessings this year!"}
					img={"https://media.tenor.com/FetQ_KhWgd4AAAAM/chill-guy.gif"}
					text={
						"Thank you for always making me feel welcome and inviting me out to some of the best places in town for dinner ! I appreciate the company and the moments we've had (though the food is a close second 😉)."
					}
				/>
				<Card
					title={
						"So I got some gifts for you guys as a token of my appreciation."
					}
					img={
						"https://media.tenor.com/ZPHHiCRxrlsAAAAj/happy-happy-happy-cat.gif"
					}
					text={
						"I thought you may have wanted something more practical, so I hope you'll find the gifts useful. 😌"
					}
				/>
				<Card
					title={"A Gift for Mrs. Lau"}
					img={
						"https://drive.google.com/thumbnail?id=12djUnpXeh7rM2llGNAOVt-TyT2-vXrUf&sz=w350"
					}
					text={"Here's a hint what your gift is going to be!"}
				/>
				<Card
					title={"A Gift for Mr. Lau"}
					img={
						"https://drive.google.com/thumbnail?id=1QBxlkW27fHkuXGG3j-VFhdmuixBl503L&sz=w350"
					}
					text={"If you can guess this one, I'll be impressed."}
				/>
				<Card
					title={
						"If you have your guesses, you can now go ahead and open your gifts!"
					}
					img={
						"https://media0.giphy.com/media/LrKIes2AcLUTl1lhfk/200w.gif?cid=6c09b9525dpsxrghp4o20wm1rlqbc1b336uznr9iq59s9mvk&ep=v1_gifs_search&rid=200w.gif&ct=g"
					}
					text={"From: Widjaja "}
				/>
			</Timeline>
			<Button />
		</div>
	);
};

export default KParents01;
