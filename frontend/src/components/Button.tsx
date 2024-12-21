const Button = () => {
	return (
		<button
			className="dm-mono"
			onClick={() => {
				window.scrollTo({ top: 0, behavior: "smooth" });
			}}
		>
			Back to Top
		</button>
	);
};
export default Button;
