import BufferText from "../components/BufferText";
import Card from "../components/Card";
import HeroText from "../components/HeroText";
import Timeline from "../components/Timeline";
import { motion } from "motion/react";
import MetaTags from "../components/MetaTags";
import ReactAudioPlayer from "react-audio-player";
import Button from "../components/Button";

const BryceVillao01 = () => {
	return (
		<div>
			<MetaTags
				title="To: Bryce"
				description="Dear Bryce..."
				image="https://em-content.zobj.net/source/apple/81/christmas-tree_1f384.png"
				name="wwidjaja0"
			/>
			<div className="hero-section">
				<HeroText text={"To: Bryce Villao"} />
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
				<source src="./first-day-of-christmas.mp3" type="audio/mp3" />
				Audio is not supported on this browser.
			</ReactAudioPlayer>
			<Timeline>
				<Card
					title={"When we first met,"}
					img={
						"https://drive.google.com/thumbnail?id=1IC9yVrA7jrnI-qTY0OEs45Rj-fnsxOgC&sz=w350"
					}
					text={"I thought you were a chill guy."}
				/>
				<BufferText text={"But then I realized..."} />
				<Card
					title={"...you're really just a chill guy."}
					img={
						"https://drive.google.com/thumbnail?id=1NsMIbQ4pouCVO8jPaNYYu1q520ztsEEO&sz=w350"
					}
					text={"goofy ah"}
				/>
				<BufferText text={"And to that I say:"} />
				<Card
					title={"merry cwismas 🎄"}
					img={
						"https://drive.google.com/thumbnail?id=1bpIfZzL1OqgKVV1ZvWeTXhJC9hbTutCy&sz=w350"
					}
					text={
						"And although we may not have had as many hangouts as we did last quarter, I'm glad we still got to hang out here and there and make some memories together. I'm grateful for the times we spent together and I hope you had a great time celebrating Christmas and New Years. 🎉"
					}
				/>
				<Card
					title={"thank u por gifts and food"}
					img={
						"https://drive.google.com/thumbnail?id=18OwwW0etRtgAN-V_aeFTEtiykihydm6n&sz=w350"
					}
					text={
						"Even though I always say it, thank you for all the rides, the food you've given me, and all the gifts and souveniers you've given me. Even if this doesn't make up for it in value I hope you find it meaningful :) also the sort throat medicine was a life saver 🙏 "
					}
				/>
				<Card
					title={"also don't worry"}
					img={
						"https://drive.google.com/thumbnail?id=1XoIAvHgyF3bwq749-uAEO87JgPScZq3M&sz=w350"
					}
					text={
						"I'm still planning on using the go plus over the summer when I get more time again lol, in the meantime though I'm on the grind 😤"
					}
				/>
				<BufferText text={"But wait! There's more..."} />
				<Card
					title={"ALSO HAPPY EARLY NEW YEAR WOOOOO 🎉"}
					img={
						"https://drive.google.com/thumbnail?id=1HbJ9-nsAjDFdIulIrdXOrbQtuLrgR7NV&sz=w350"
					}
					text={"(I might forget to wish on the actual day so here you go.)"}
				/>
				<Card
					title={"hope you're making good memories"}
					img={
						"https://drive.google.com/thumbnail?id=1LWlgcN6vF06Q1wYpSkuQdQkkFgzlO7eC&sz=w350"
					}
					text={"soon people are cool ! (including you)"}
				/>
				<Card
					title={"soon!"}
					img={
						"https://drive.google.com/thumbnail?id=1fHfRT-GIbuDHDBHikltP48EU2abFGzH8&sz=w350"
					}
					text={"And with that, hope we'll hang out soon :)"}
				/>
				<Card
					title={"me when I don't have gift for you"}
					img={"https://cdn3.emoji.gg/emojis/7912-ant-meme.png"}
					text={"erm"}
				/>
				<Card
					title={"just kidding!"}
					img={
						"https://cdn.iconscout.com/icon/free/png-256/free-amazon-logo-icon-download-in-svg-png-gif-file-formats--brand-social-media-card-pack-logos-icons-1583154.png?f=webp"
					}
					text={
						"Merry Christmas and Happy New Year! haha :3 (it should be sent to you very shortly, but if it hasn't yet let me know)"
					}
				/>
			</Timeline>
			<Button />
		</div>
	);
};

export default BryceVillao01;
