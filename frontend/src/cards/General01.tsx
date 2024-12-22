import BufferText from "../components/BufferText";
import Card from "../components/Card";
import HeroText from "../components/HeroText";
import Timeline from "../components/Timeline";
import { motion, Variants } from "motion/react";
import MetaTags from "../components/MetaTags";
import ReactAudioPlayer from "react-audio-player";
import Button from "../components/Button";
import ImageGallery from "react-image-gallery";

const CardVariants: Variants = {
	offscreen: { x: -100, opacity: 0 },
	onscreen: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 2,
			delay: 0.2,
			ease: "easeIn",
			type: "spring",
			stiffness: 260,
			damping: 20,
		},
	},
};

const baseUrl = "https://drive.google.com/thumbnail";
const ids = [
	"1tZqINV907c0uPHzGeM290-6luL0RWBUZ",
	"1aYmsstFe7n3MFYAEPdadflsGc1okKLhH",
	"135O6RAVuZs716coT_EqaYZ9UnsBbCsJe",
	"1rGauG-9lh6QyfI_P5iIig7fXl-Gh4RMe",
	"1AcaGqNp7uar_4JMOxutKTH2UdaZpFTKj",
	"1GV2mqh-D0aXRlLoZXHAPUHzRkhcWlTxo",
	"1v1A1G-WvpAvYo_maB9PNKaamQb9M62zv",
	"1zRKlohjYMs7fhxHOiUx2gwDlBD3Uv55N",
	"1jVqu6wy3gL24e4rrMAMdN982Yh4HA2eW",
	"1jMotc3ArvyUKup2WTas1HqaMtII6WAYB",
	"1lLlDMzDhaJNCCYUpUwNPUZykJUFKsD4S",
	"1BwzS0n2C01hVm31_1nbErZ-QMkH0yQm0",
	"1NsSkGkNbd4cHnWXSGjJN4s56d0e_9rv-",
	"1i7-ZvgnkyCsFp0m28hv4aKhvhDPkOpX-",
	"1OyQbFQGI1jqcWAnuFGR1cADpPZ4TQThB",
	"1xixq4SVI1f28dZq9LQxA0K4ci7n_Vwez",
	"1IcxRDHE7in8I4eZmPnYYWP3pdgZsIpfu",
	"1tyRafQ8ZctMuTfQd_3XNArnG2_ouA29L",
	"1GRwT_PrJbHStUsiHN-SJZXqZyFOdaYcN",
	"1PrkETsRcaP3VCnHxc4sErkHByerrRBIR",
	"1GXxMelyXamep-Ypb79xenrBT_k2avDOY",
	"1VHzqe-eopVihpwkByovOiO9ETyMC_76j",
	"12AQDgBAV-Pm5On25Zn5GQYHwv6Lrl_IS",
	"1B3w4DiZjlnobWrrEiYHCkClRQBzKro_X",
	"1u6dN-xAnbB8ZHOHgS23c8fqLqHTi2KBI",
	"1pK4pflyyIXXSLusUmktHftGWM1LE5WMX",
	"1PgjpvHtezWRMDoPC4cZz1vqR-I7yU2pH",
	"1MkHDbbXpRktmiHaZIbvCMVzlDQPQe_YI",
	"1uBCwmsQnK0BqNyTnQKtc-uvLyI4sB4-l",
	"1F6b498zrPiXLnPh5wngi64iVhiToM6su",
	"1pHxh2UaJeXgRpS9oyT6DvKLVt1lY_TeL",
	"1zILOH4TH6XFGe_ykwr537N-139XrotYE",
	"184MiYeTsWfbwBTLq4RBKrXb-nffvN6NH",
	"1GZF-Ndz2Fs6pPHpk8m0DcuU-m0bWnRp7",
	"1t4eTdYGy42MDKK6T4iQ8t4klIlfxXzTF",
	"1W3_yMBl6Cruh46bpLU-ZrXvTifzR4nK4",
	"151whIZsfWA2rWIxRdHMyOm5ZeXUji56X",
	"1gZiZB0awBtJ5wjaSZ4iDeO-0l9JboGZa",
	"1zz1gifbOvd0hiw4l3rqRGDAE_SkfUTNN",
	"1QFdUaC2MVCMpNQ6J6SO7FjdVwIA0NMkc",
	"1FYvyVZbEPNyDdK0sYlLozLyB6TaC4_9u",
	"11KWOKgMU4J338RYDsiWmK8_3SHUjX56-",
	"1OQCQ5645xMEEJL9-dZwCclziSZHkyODQ",
	"11FX78nkIVeRg8IZ_fWi7X9ee3KHho1Jq",
	"1bH2QlG4rDinE7RSyxt1frfK3k1n55fCN",
	"1--RKhGvEqqf7ZhIxKYICIGqROVvGaOKk",
];

const images = ids.map((id) => ({ original: `${baseUrl}?id=${id}&sz=w350` }));

const General01 = () => {
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
					title={"this year was a lot..."}
					img={
						"https://media0.giphy.com/media/3oKIPwoeGErMmaI43S/giphy.gif?cid=6c09b952da6sz08qly6mhht0bqibdsxtwbkrmfa7by9jsvlz&ep=v1_gifs_search&rid=giphy.gif&ct=g"
					}
					text={"you dodging all the curveballs this year..."}
				/>
				<BufferText text={"And now..."} />
				<Card
					title={"you're a chill guy"}
					img={"https://media.tenor.com/FetQ_KhWgd4AAAAM/chill-guy.gif"}
					text={
						"yay! You made it to the end of the year :) I'm so proud of you 😌"
					}
				/>
				<BufferText text={"So, with the year coming to an end:"} />
				<Card
					title={"MERRY CHRISTMAS WOOOOO 🎄🎄"}
					img={"/me.gif"}
					text={
						"from the Widjaja family to you! CHRISTMAS WOOOOOO MY FAVORITE HOLIDAY LETS GOOOO"
					}
				/>
				<motion.div
					initial="offscreen"
					whileInView="onscreen"
					variants={CardVariants}
					viewport={{ once: true, amount: 0.5 }}
					className="personal-card"
				>
					<div className="card">
						<h1 className="personal-card-title">thankful for you 🥺</h1>
						<div
							style={{
								height: "622px",
								placeContent: "center",
								placeItems: "center",
							}}
						>
							<ImageGallery
								items={images}
								showNav={true}
								showFullscreenButton={true}
								showPlayButton={false}
								autoPlay={true}
								showIndex={true}
								slideInterval={1500}
								slideDuration={0}
							/>
						</div>
					</div>
					<p className="personal-card-text">
						to everyone that made this year special... as every year is in its
						own way, thank you for being a part of it. Also these were the only
						photos of the year that I could muster, but know that whether it was
						a really deep talk that we had, a short dinner or interaction, I
						have you in my memories. 🫡 (also sorry if the photos are blurry :3)
					</p>
				</motion.div>
				<Card
					title={"best wishes"}
					img={"https://media.tenor.com/u9jAXVyIZV8AAAAM/anime-gojou.gif"}
					text={"(keep scrolling)"}
				/>
				<BufferText text={"But wait! There's more..."} />
				<Card
					title={"ALSO HAPPY EARLY NEW YEAR 🎉🎉"}
					img={
						"https://media.tenor.com/2uv5oIQG-QoAAAAM/sono-bisque-doll-wa-koi-wo-suru-fireworks.gif"
					}
					text={"AYAYAYAYAYAAYAYAYAYAYAYAAYYA"}
				/>
				<Card
					title={"Life moves fast"}
					img={
						"https://media1.giphy.com/media/XIqCQx02E1U9W/200w.gif?cid=6c09b952cqog7669e7mfta0to6w427j82420c4w3odo0beth&ep=v1_gifs_search&rid=200w.gif&ct=g"
					}
					text={"so move faster lol."}
				/>
				<Card
					title={"me when i'm not with you"}
					img={"https://media.tenor.com/P63Vv_xY2BAAAAAM/jerik29.gif"}
					text={":("}
				/>
				<Card
					title={"when when i when im whe when im with you"}
					img={
						"https://media.tenor.com/ZPHHiCRxrlsAAAAj/happy-happy-happy-cat.gif"
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
					text={"here you go"}
				/>
			</Timeline>
			<Button />
		</div>
	);
};

export default General01;
