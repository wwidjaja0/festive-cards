import React from "react";

interface TimelineProps {
	children: React.ReactNode;
}

const Timeline: React.FC<TimelineProps> = ({ children }) => {
	const refs = React.Children.map(children, () =>
		React.createRef<HTMLDivElement>()
	);

	/*
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const handleTimelineClick = (index: number) => {
		// Scroll to the corresponding card when the timeline item is clicked
		refs![index].current?.scrollIntoView({
			behavior: "smooth",
			block: "center",
		});
		setActiveIndex(index);
	}; */

	return (
		<div>
			{/*
			<div className="timeline">
				<h2 className="timeline-title">Timeline</h2>
				{React.Children.map(children, (_, index) => (
					<div
						key={index}
						className={`timeline-item ${activeIndex === index ? "active" : ""}`}
						onClick={() => handleTimelineClick(index)} // Add click handler
						style={{ cursor: "pointer", marginBottom: "10px" }}
					>
						Card {index + 1}
					</div>
				))}
			</div>*/}
			<div>
				{React.Children.map(children, (child, index) => (
					<div ref={refs![index]} key={index}>
						{child}
					</div>
				))}
			</div>
		</div>
	);
};

export default Timeline;
