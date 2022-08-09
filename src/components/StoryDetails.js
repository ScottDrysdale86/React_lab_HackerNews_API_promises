import React from "react";
import "./storyDetails.css";

const StoryDetails = ({ story }) => {
	return (
		<div className="details">
			<h2>
				<a href={story.url}>{story.title}</a>
			</h2>
			<p>{story.by}</p>
		</div>
	);
};

export default StoryDetails;
