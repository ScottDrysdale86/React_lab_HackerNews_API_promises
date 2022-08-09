import React, { useState, useEffect } from "react";
import SelectStories from "../components/SelectStories";
import StoryDetails from "../components/StoryDetails";

const Container = () => {
	const [stories, setStories] = useState([]);
	const [selectedStory, setSelectedStory] = useState(null);

	const getStories = () => {
		fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
			.then((res) => res.json())
			.then((data) => {
				const top10 = data.slice(0, 10);
				const stories = top10.map((storyId) => {
					return fetch(
						"https://hacker-news.firebaseio.com/v0/item/" +
							storyId +
							".json "
					).then((res) => res.json());
				});
				Promise.all(stories).then((data) => {
					setStories(data);
				});
			});
	};

	useEffect(() => {
		getStories();
	}, []);

	const onStorySelected = function (story) {
		setSelectedStory(story);
	};

	return (
		<>
			<SelectStories
				stories={stories}
				onStorySelected={onStorySelected}
			/>
			{selectedStory ? <StoryDetails story={selectedStory} /> : null}
		</>
	);
};

export default Container;
