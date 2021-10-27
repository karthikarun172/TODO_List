/** @format */

import logo from './logo.svg';
import './App.css';
import AddTaskBtn from './Components/AddTaskBtn';
import SearchInput from './Components/SearchInput';
import TaskCard from './Components/TaskCard';

function App() {
	return (
		<div>
			<h3>hello</h3>
			<div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
				<SearchInput />
				<AddTaskBtn />
			</div>
			<TaskCard TaskName="Create a video" priority="HP" />
		</div>
	);
}

export default App;
