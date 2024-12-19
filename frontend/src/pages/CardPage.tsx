import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Snowfall from "react-snowfall";

/**
 * A base for a festive-card that I can send to anyone in the world.
 *
 * What does it contain?
 * 1. A sticky calendar that updates as we scroll through the photos with dates.
 * 5. A nice note section at the end.
 * 6. A copyright/crediting section at the end.
 */

function CardPage() {
	const params = useParams();
	const useSnow = true;

	console.log(params);

	return (
		<div>
			{params.cardName}

			{
				// map a number of cards that animate in on staggered scroll with text
			}

			{
				// personalized note section/card i write for them
			}
			<p className="dm-mono">
				made with love -{" "}
				<Link to="https://www.wwidjaja.site/" target="blank">
					wwidjaja0
				</Link>
			</p>
			{useSnow && <Snowfall snowflakeCount={30} />}
		</div>
	);
}
export default CardPage;
