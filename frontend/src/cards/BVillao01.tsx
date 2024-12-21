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
						"https://drive.google.com/thumbnail?id=1QzlLMXI-ypKyQpLaDoz5LkZ98eFOdVLb&sz=w350"
					}
					text={"I thought you were a chill guy."}
				/>
				<BufferText text={"But then I realized..."} />
				<Card
					title={"...you're really just a chill guy."}
					img={
						"https://drive.google.com/thumbnail?id=1zDpW2Mec35_gsHENvFEqOFfnINM3vLHu&sz=w350"
					}
					text={
						"Who could have known that we would have so many hang outs this quarter and have such fun times together? I'm honestly so grateful that you invited me to as many things as you did and that we got to know each other better through ACM."
					}
				/>
				<BufferText text={"And to that I say:"} />
				<Card
					title={"🎉 Happy Belated Birthday, Victor 🎉"}
					img={
						"https://drive.google.com/thumbnail?id=1IuVL_xnBJQEYXPnn69sgGuBQwLyJPrk3&sz=w350"
					}
					text={
						"(yes this is the gift I said I was going to give you but couldn't get to you in time because I'm a busy bee, but don't worry, there's more !! [keep scrolling 😋])"
					}
				/>
				<Card
					title={"Parties & Hotpot!!"}
					img={
						"https://drive.google.com/thumbnail?id=1r_I3hFXop7V1uDUzjijvAWU0lNY5hX2n&sz=w350"
					}
					text={
						"These moments were the most fun I've had in a single quarter. Hope you had tons of fun and got to celebrate your 22nd birthday to the fullest. "
					}
				/>
				<Card
					title={"On another note..."}
					img={
						"https://drive.google.com/thumbnail?id=1yKu5map-3lhKq0znWCZfiQ1XPXfGMOfW&sz=w350"
					}
					text={
						"I thought poker was going to be the only thing we did together this quarter, but I'm glad we did more than that. I'm looking forward to being able to make more memories with you the rest of this year (even if I may be more busy), but I'm sure we'll find time to hang out, and even if we may drift apart someday, I'm sure we'll both understand that that's life, and that's okay. 😌"
					}
				/>
				<BufferText text={"But wait! There's more..."} />
				<Card
					title={"ALSO MERRY CHRISTMAS WOOOOO 🎄🎄"}
					img={
						"https://drive.google.com/thumbnail?id=1PBEnDfu7qm4ICih-u3Ky3UEu2Z1f7l_D&sz=w350"
					}
					text={"May I join your uwu tree pwetty pwease? 👉👈🥺"}
				/>
				<Card
					title={"And while we're still here"}
					img={
						"https://drive.google.com/thumbnail?id=1rvG09ajoCNazSjO04btmzYztq9CDSVvZ&sz=w350"
					}
					text={
						"let's not waste a second of our time in our early adulthood and make the most of the moments."
					}
				/>
				<BufferText text={"goofy ahh photos alert 🤡"} />
				<Card
					title={"putting in the work"}
					img={
						"https://drive.google.com/thumbnail?id=1G37EOnpBf25TGho8GDydv2oBvB0ANkcN&sz=w350"
					}
					text={
						"had to get down and dirty to get those really nice shots of you 😏"
					}
				/>
				<Card
					title={"???"}
					img={
						"https://drive.google.com/thumbnail?id=1Gapjvsvrdws-1w8cIRPm_uCysNSlEzLG&sz=w350"
					}
					text={"wtf is going on in this photo lul"}
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
						"Happy Birthday, Merry Christmas, and Happy New Year! haha :3 (it should be sent to you very shortly, but if it hasn't yet let me know)"
					}
				/>
			</Timeline>
			<Button />
		</div>
	);
};

export default BryceVillao01;
