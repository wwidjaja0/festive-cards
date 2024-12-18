import { useParams } from "react-router-dom";
import Snowfall from "react-snowfall";

function CardPage() {
	const params = useParams();
	const useSnow = true;

	console.log(params);

	return (
		<div>
			{params.cardName}
			{useSnow && <Snowfall snowflakeCount={30} />}
		</div>
	);
}
export default CardPage;
