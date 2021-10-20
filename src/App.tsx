import { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import LearningPage from './pages/LearningPage';
import ProgressPage from './pages/ProgressPage';
import { data } from './helpers/data';
import { useLocalStorage } from './helpers/customHooks/useLocalStorage';

const App: FC = () => {
	const [dataObject, setDataObject] = useLocalStorage('data', data);
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/">
						<LearningPage learning={data} />
					</Route>
					<Route exact path="/progress" component={ProgressPage} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
