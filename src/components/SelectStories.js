import React from "react";
import "./selectStories.css";

const SelectStories = ({ stories, onStorySelected }) => {
	const handleStorySelect = function (event) {
		const selectedStory = stories[event.target.value];
		onStorySelected(selectedStory);
	};

	const storyOptions = stories.map((story, index) => {
		return (
			<option value={index} key={index}>
				{story.title}
			</option>
		);
	});

	return (
		<div className="selector">
			<label>Pick a Story</label>
			<select defaultValue="" onChange={handleStorySelect}>
				<option value="">Select a Story...</option>
				{storyOptions}
			</select>
		</div>
	);
};

export default SelectStories;
