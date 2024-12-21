import BufferText from "../components/BufferText";
import Card from "../components/Card";
import HeroText from "../components/HeroText";
import Timeline from "../components/Timeline";
import { motion } from "motion/react";
import MetaTags from "../components/MetaTags";
import ReactAudioPlayer from "react-audio-player";
import Button from "../components/Button";

const AngelaTsai01 = () => {
	return (
		<div>
			<MetaTags
				title="To: Angela"
				description="Dear Angela..."
				image="https://em-content.zobj.net/source/apple/81/christmas-tree_1f384.png"
				name="wwidjaja0"
			/>
			<div className="hero-section">
				<HeroText text={"To: Angela Tsai"} />
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
				<source src="./its-beginning.mp3" type="audio/mp3" />
				Audio is not supported on this browser.
			</ReactAudioPlayer>
			<Timeline>
				<Card
					title={"When we first met..."}
					img={
						"https://drive.google.com/thumbnail?id=1cG_49nY6vVmt1oL0P75uB0wYaeaqg5J1&sz=w350"
					}
					text={
						"We played Mahjong and I thought you were pretty scary at first 😅 haha (I have no clue why) but I thought you were a very cool and hardworking person!"
					}
				/>
				<BufferText text={"But then I realized..."} />
				<Card
					title={"...you're really just a chill gal!"}
					img={
						"https://drive.google.com/thumbnail?id=1Fh3xmYU0lBmDV98p7rnhxGkE68-j4f4u&sz=w350"
					}
					text={
						"Who could have known that we would have so many hang outs this quarter and have such fun times together? I'm honestly so grateful that you invited me to as many things as you did and that we got to know each other better through ACM :)"
					}
				/>
				<BufferText text={"And to that I say:"} />
				<Card
					title={"Happy Belated Birthday, Angela 🎉"}
					img={
						"https://drive.google.com/thumbnail?id=1ZjXwaPM17m5kwqCKr4B4fRa3UYaDdlY1&sz=w350"
					}
					text={
						"(yes this is the gift I said I was going to give you but couldn't get to you in time because I'm a busy bee, but don't worry, there's more !! [keep scrolling 😋])"
					}
				/>
				<Card
					title={"Parties & Hangouts !!"}
					img={
						"https://drive.google.com/thumbnail?id=15_0rGzCMpbJDKy-RoHeZ58jt2fUU4QU6&sz=w350"
					}
					text={
						"These moments were the most fun I've had in a single quarter. Hope you also had tons of fun and got to celebrate your 21st birthday to the fullest :3"
					}
				/>
				<Card
					title={"On another note..."}
					img={
						"https://drive.google.com/thumbnail?id=1nb0ddmrPp5YvYBMaFHrQ_gCoQCqy6FVz&sz=w350"
					}
					text={
						"I thought mahjong was going to be the only thing we did together this quarter, but I'm glad we did more than that. I'm looking forward to being able to make more memories with you the rest of this year (even if we both may be more busy), but I'm sure we'll find time to hang out, and even if we may drift apart someday, I'm sure we'll both understand that that's life, and that's okay. 😌"
					}
				/>
				<BufferText text={"But wait! There's more..."} />
				<Card
					title={"ALSO MERRY CHRISTMAS WOOOOO 🎄🎄"}
					img={
						"https://drive.google.com/thumbnail?id=1eJGjDJA3xdQk0kVvG8hpioNi3uhrjEf-&sz=w350"
					}
					text={
						"Hope it was fun watching me after victor's party lol, only a few people have seen me like that my whole life, takes a lot of trust from me"
					}
				/>
				<BufferText text={"stargazing! 🌌🌠"} />
				<Card
					title={"Look!"}
					img={
						"https://drive.google.com/thumbnail?id=1EsXjNeidz-ac8LIn8dOIcjA58cuPaZSv&sz=w350"
					}
					text={"What's over there :O"}
				/>
				<Card
					title={"👀"}
					img={
						"https://drive.google.com/thumbnail?id=18kgNZBACTUMGfzFNZDiakLoIlMNQ-872&sz=w350"
					}
					text={"lol we all look so enamoured :3"}
				/>
				<Card
					title={"hands down fav upperclassmen"}
					img={
						"https://drive.google.com/thumbnail?id=1zRSombtenY_vMW18cseF8oQiYxx-D1cF&sz=w350"
					}
					text={
						"You're one of my favorite upperclassmen I've met at this school so far! And that's not just because you're one of the few I've met haha 😅"
					}
				/>
				<Card
					title={"also HAPPY EARLY NEW YEAR 🎉"}
					img={
						"https://drive.google.com/thumbnail?id=1xZlXZu6tuzzcFWPr_XttHRH1dtvwpWXe&sz=w350"
					}
					text={
						"I'm gonna miss you and all the bytes when you guys graduate 😭😭😭"
					}
				/>
				<Card
					title={"new addiction alert 🚨"}
					img={
						"https://drive.google.com/thumbnail?id=1uitYbMF08VxoJJ2z4rgtCU5Opy1a_HGP&sz=w350"
					}
					text={
						"Jokes on you, I'm also addicted to poker 😏. LOL, but I hope you had fun on your birthday, I'll say that I had a great time as it was my first time watching a meteor shower in my life and actually seeing anything! It was a fun experience that I'll never forget."
					}
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

export default AngelaTsai01;
