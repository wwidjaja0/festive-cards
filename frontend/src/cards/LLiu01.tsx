import BufferText from "../components/BufferText";
import Card from "../components/Card";
import HeroText from "../components/HeroText";
import Timeline from "../components/Timeline";
import { motion } from "motion/react";
import MetaTags from "../components/MetaTags";
import ReactAudioPlayer from "react-audio-player";
import Button from "../components/Button";

const LisaLiu01 = () => {
	return (
		<div>
			<MetaTags
				title="To: Lisa"
				description="Dear Lisa..."
				image="https://em-content.zobj.net/source/apple/81/christmas-tree_1f384.png"
				name="wwidjaja0"
			/>
			<div className="hero-section">
				<HeroText text={"To: Lisa Liu"} />
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
					title={"When we first met,"}
					img={
						"https://drive.google.com/thumbnail?id=18xquo5t3k8kSk9jym-3TRoMXimScMQa6&sz=w350"
					}
					text={
						"I took you as a very adventurous person and someone who's always down to try new things and very much a thrill-seeker/go-getter."
					}
				/>
				<BufferText text={"But then I realized..."} />
				<Card
					title={"...you're really just a chill gal."}
					img={
						"https://drive.google.com/thumbnail?id=1hqrllodNlvgRc6_9mk5_gFm4JQrSzXPg&sz=w350"
					}
					text={"And I still think that all those things are true and more! "}
				/>
				<BufferText text={"And to that I say:"} />
				<Card
					title={"MERRY CHRISTMAS WOOOOO 🎄🎄"}
					img={
						"https://upload-os-bbs.hoyolab.com/upload/2021/12/26/73868637/727cac912f4c8cb20e406d8c43fc0e92_3553923933272662680.gif"
					}
					text={
						"wowowow check out this cool gif :3 also should I get back into genshin? I might touch it over the summer but not sure if I have time during the school year, I'm always down to play if ur on tho so lmk"
					}
				/>
				<Card
					title={"Deep Talks and Fun Moments"}
					img={
						"https://drive.google.com/thumbnail?id=1N4Tq-BtlXeHNexUdPJwt-vD8MTSItV_6&sz=w350"
					}
					text={
						"Thanksgiving Break was HEAVY, and hey, we would know 😂 but I'm so glad that I got to know more about you on a deeper level and spend all that time with you over the break :3 I definitely felt a lot less lonely over the break because of the time we spent and I hope you feel the same!"
					}
				/>
				<Card
					title={"Meeting all these cool people you know!"}
					img={
						"https://drive.google.com/thumbnail?id=1R4BshRhm11xrKqsVGXXPrSfT-YtTj4BN&sz=w350"
					}
					text={
						"Also really glad and thankful to meet all of your very very cool friends and I got to know them better and hang out with a lot of people because of you, so I'm very grateful for that! I got to have some of the most fun I've had in all my time here because you chose to pick me up, so for that I'm very grateful."
					}
				/>
				<BufferText text={"But wait! There's more..."} />
				<Card
					title={"ALSO HAPPY EARLY NEW YEAR 🎉"}
					img={
						"https://drive.google.com/thumbnail?id=1H8nsvAvBNQIZpNDvaUX7A4WrMsEWOoZY&sz=w350"
					}
					text={
						"WOOOOOOOOOOOOO can't believe it's the end of the year already! I'm really looking forward to the new year and all the new memories we'll make together. I'm sure we'll have a lot of fun and I'm looking forward to it! 😊"
					}
				/>
				<Card
					title={"And while we're still here"}
					img={
						"https://drive.google.com/thumbnail?id=1iJyyeqqbkR7Tdg97d_gCTL4PFpn1JgGV&sz=w350"
					}
					text={
						"let's not waste a second of our time in our early adulthood and make the most of the moments."
					}
				/>
				<Card
					title={"Looking forward to future hangouts!"}
					img={
						"https://drive.google.com/thumbnail?id=12cUl1MBkxwquB0ILoMfpDYFmnO9UwCQw&sz=w350"
					}
					text={
						"I'm really going to miss you and all the bytes when you guys graduate and eventually move away 😭😭😭"
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
						"Merry Christmas and Happy New Year! haha :3 (it should be sent to you very shortly, but if it hasn't yet let me know)"
					}
				/>
			</Timeline>
			<Button />
		</div>
	);
};

export default LisaLiu01;
