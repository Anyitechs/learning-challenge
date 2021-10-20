import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import { IProps } from '../interfaces/interface';
import YoutubeFrame from '../components/YoutubeFrame';
import { modifyLocalData, listenEvent } from '../helpers/helper';

const RenderLearning = (learning: IProps['learning']) => {
	let [index, setIndex] = useState<number>(0);
	let data = learning[index];
	const [duration, setDuration] = useState(data?.time_limit);
	const localData = JSON.parse(localStorage.data);
	useEffect(() => {
		duration > 0 && setTimeout(() => setDuration(duration - 1), 1000);
		if (duration === 0 && index < learning.length - 1) {
			setIndex(index + 1);
			setDuration(learning[index]['time_limit']);
			modifyLocalData(localData, index);
			// listenEvent();
		}
	}, [duration]);
	const handleNext: (event: React.MouseEvent<HTMLButtonElement>) => void =
		() => {
			if (index < learning.length - 1) {
				setIndex((index + 1) % learning.length);
				setDuration(learning[index]['time_limit']);
				modifyLocalData(localData, index);
				console.log('index below');
				console.log(index);
			}
		};
	return (
		<div>
			{data && (
				<div>
					<h2>Content: {data.content_type}</h2>
					<h3>Title: {data.title}</h3>
					<h3>Description: {data.description}</h3>
					<h4>Lesson timer: {duration} seconds</h4>
					{data.content_type == 'Lesson' ? (
						<YoutubeFrame src={data.video_url} />
					) : (
						<h3>{data.question_type}</h3>
					)}
					<Button color={'red'} onClick={handleNext} text={'Next'} />
				</div>
			)}
		</div>
	);
};

export default RenderLearning;
