import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IProps } from '../interfaces/interface';
import RenderLearning from '../widgets/RenderLearning';

const LearningPage: FC<IProps> = ({ learning }) => {
	return (
		<div>
			<nav>
				<Link to="/progress" target="_blank">
					Progress page
				</Link>
			</nav>
			<h2>Learning Page</h2>
			<div>{RenderLearning(learning)}</div>
		</div>
	);
};

export default LearningPage;
