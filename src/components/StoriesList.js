import React from "react";
import StoryDetails from "./StoryDetails";

const StoriesList = ({ searchedStories }) => {
	const storiesItems = searchedStories.map((story, index) => {
		return (
			<li>
				<StoryDetails story={story} key={index} />
			</li>
		);
	});

	return (
		<div className="storiesList">
			<ul>{storiesItems}</ul>
		</div>
	);
};

export default StoriesList;
