import BufferText from "../components/BufferText";
import Card from "../components/Card";
import HeroText from "../components/HeroText";
import Timeline from "../components/Timeline";
import { motion } from "motion/react";
import MetaTags from "../components/MetaTags";
import ReactAudioPlayer from "react-audio-player";
import Button from "../components/Button";

const KylieLau01 = () => {
	return (
		<div>
			<MetaTags
				title="To: Kylie"
				description="Dear Kylie Lau..."
				image="https://em-content.zobj.net/source/apple/81/christmas-tree_1f384.png"
				name="wwidjaja0"
			/>
			<div className="hero-section">
				<HeroText text={"To: My Forever Pookie"} />
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
				<source src="./ill-be-home.mp3" type="audio/mp3" />
				Audio is not supported on this browser.
			</ReactAudioPlayer>
			<Timeline>
				<Card
					title={"If you didn't click play,"}
					img={
						"https://drive.google.com/thumbnail?id=11ZyhKIxCN0FhKmZV1Ks9xgb558mur2D1&sz=w350"
					}
					text={"now is your chance buddy. 🔫😊"}
				/>
				<BufferText text={"Moving along..."} />
				<Card
					title={"HIIII POOKIEEEE"}
					img={
						"https://drive.google.com/thumbnail?id=18lGoreq2HtUnRp0ScwNWa1pjotELptgZ&sz=w350"
					}
					text={
						"This is me winking at you btw (but also you look really cute here)"
					}
				/>
				<BufferText text={"I think you already know the drill..."} />
				<Card
					title={"🎉 Happy Birthday, Kylie!!! 🎉"}
					img={
						"https://drive.google.com/thumbnail?id=1DUPoSxfe93TezUPCZarbgcQ5i9nwp2e4&sz=w350"
					}
					text={
						"Look at us all cute together ! (Yes I know this was my birthday haha)"
					}
				/>
				<Card
					title={"Kylie-ception..."}
					img={
						"https://drive.google.com/thumbnail?id=1I8TdjXcJGo1Asjk3H7h_TDgDTxNZu7JQ&sz=w350"
					}
					text={"Silly photo but I think it's vv cute and funny :3"}
				/>
				<Card
					title={"You went to Japan this year!"}
					img={
						"https://drive.google.com/thumbnail?id=1ORqJWwcFwRxOl-U95ho2UyZuz-1D3LKg&sz=w350"
					}
					text={
						"If we're both being completely honest, I should've went on that trip with you instead of your highschool friends. (KIDDING your highschool friends are cool... [mostly kekeke jokes jokes] I hope you all enjoyed the experience. 😌)"
					}
				/>
				<Card
					title={"ALSO MERRY CHRISTMAS !! 🎄🎄"}
					img={
						"https://drive.google.com/thumbnail?id=1Cd0_OET0hOdCsZJtvl_zl69amJjp-6K4&sz=w350"
					}
					text={
						"Wowowow, so stylish, so demure ✨ I think we slay in this photo."
					}
				/>
				<Card
					title={"PERSONAL MESSAGE ALERT 🚨🚨🚨"}
					img={
						"https://drive.google.com/thumbnail?id=18HdRd-DgU4kp4KU0AuYA5VJJpRS6jEAz&sz=w350"
					}
					text={"Dear Kylie..."}
				/>
				<Card
					title={"i love your silly and i hope you love my silly too"}
					img={
						"https://drive.google.com/thumbnail?id=1y0gwCl5ocavBCBJEBkMGCVtoiAUo2Cvt&sz=w350"
					}
					text={
						"I think you're the prettiest most beautifullest most sillyest girl ever and the perfect person for me and we should definitely get married someday ahsjhajhjshjshjahsjhajsh"
					}
				/>
				<Card
					title={"don't think anyone else could love me as much as you do"}
					img={
						"https://drive.google.com/thumbnail?id=16kDRjBuHf6lHVE4iAqSc1tJ9aXqE38OA&sz=w350"
					}
					text={
						"Thank you for sticking by my side and wanting to experience and enjoy the same things that I do, and for being the bestest most caringest friend AND MORE IMPORTANTLY, GIRLFRIEND, I could ever ask for to be by my side :3"
					}
				/>
				<Card
					title={"you make me smile. genuinely."}
					img={
						"https://drive.google.com/thumbnail?id=1PyI4RLbhtxtC7TyBO20XRg20TY0uIl1n&sz=w350"
					}
					text={
						"There's so many times when (I think about you and I just go uwu) <= ai made me type this 🙄 (side eye) but no if I'm being honest, there's so many times when we have a moment with each other and something you do or say or even just looking at you gets me all happy inside in ways I can't describe."
					}
				/>
				<Card
					title={"💭"}
					img={
						"https://drive.google.com/thumbnail?id=1q-0ly404lgUoXsB4jPTM-Wnry7_z3qph&sz=w350"
					}
					text={
						"And sometimes when I look at you, I'll think to myself... I have it all, and it can't get any better than this... there's nothing in the world that could replace you 😋"
					}
				/>
				<Card
					title={"goated one year anniversary date"}
					img={
						"https://drive.google.com/thumbnail?id=1jhbrrg_30zlt2BPhtetEMn36u1E1Rqjz&sz=w350"
					}
					text={"also thank you for being a sugar mommy on this day :D"}
				/>
				<Card
					title={"ASHJASHJAHSJHASJHJSA"}
					img={
						"https://drive.google.com/thumbnail?id=1PfMyMzI06VRMdKwVILIKwV-pkfwfPqxC&sz=w350"
					}
					text={"AAAAAAAAAAAAAAAAAAAAAAAA SO PRETTYYYYYYYYYYYY"}
				/>
				<Card
					title={"sometimes it might get overwhelming"}
					img={
						"https://drive.google.com/thumbnail?id=1G9d8wPTkHzxiprbOofeUGboh_BsSpfBW&sz=w350"
					}
					text={
						"me when im being me and you are like AHHHH cuz i'm like a chill guy type beat but life stressful and ur like brrrrrrrr want cuddles"
					}
				/>
				<Card
					title={"<3"}
					img={
						"https://drive.google.com/thumbnail?id=1JqNzj1qARlEJF31-CcEJuZYieegd9SKY&sz=w350"
					}
					text={
						"so here's to making more snapshots of our life from moment to moment with each other, always living in the moment when we're with each other"
					}
				/>
				<BufferText text={"goofy ahh photo alert 🤡"} />
				<Card
					title={"look at this silly goose 🦢"}
					img={
						"https://drive.google.com/thumbnail?id=1KzMD8V8SAlr4Mxi48FxH5Yupu22SoG8v&sz=w350"
					}
					text={"uwu"}
				/>
				<BufferText text={"But wait! There's more..."} />
				<Card
					title={"me when I don't have gift for you"}
					img={"https://cdn3.emoji.gg/emojis/7912-ant-meme.png"}
					text={"erm"}
				/>
				<Card
					title={"Hey! Where's my gift? 😡"}
					img={
						"https://drive.google.com/thumbnail?id=1THoB5SaWKCFoe0foQ07BwSwYOzpnEh8s&sz=w350"
					}
					text={"You might be asking..."}
				/>
				<Card
					title={"Turn around !"}
					img={
						"https://cdn.iconscout.com/icon/free/png-256/free-amazon-logo-icon-download-in-svg-png-gif-file-formats--brand-social-media-card-pack-logos-icons-1583154.png?f=webp"
					}
					text={"Happy Birthday, Merry Christmas, and Happy New Year! haha :3"}
				/>
			</Timeline>
			<Button />
		</div>
	);
};

export default KylieLau01;
