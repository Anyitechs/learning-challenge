import { FC } from 'react';
import '../styles/components/ProgressTable.css';

const ProgressTable: FC = () => {
	return (
		<div>
			<h2>Progress Page</h2>
			<table>
				<tr>
					<th>Title</th>
					<th>Time Taken</th>
					<th>Pass/Fail</th>
				</tr>
				<tr>
					<td>first</td>
					<td>second</td>
					<td>fail</td>
				</tr>
			</table>
		</div>
	);
};

export default ProgressTable;
