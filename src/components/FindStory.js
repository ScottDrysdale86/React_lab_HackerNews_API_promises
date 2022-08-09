import React, { useState } from "react";
import StoriesList from "./StoriesList";
import "./findStory.css";

const FindStory = ({ stories }) => {
	const [query, setQuery] = useState("");

	const searchedStories = stories.filter((story) => {
		if (query === "") {
			return story;
		} else if (story.title.toLowerCase().includes(query.toLowerCase())) {
			return story;
		}
	});

	return (
		<>
			<div className="search">
				<input
					placeholder="Enter story topic"
					onChange={(event) => setQuery(event.target.value)}
				/>
			</div>
			<div>
				<StoriesList searchedStories={searchedStories} />
			</div>
		</>
	);
};

export default FindStory;
