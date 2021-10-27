import React from 'react';
import '../StyleSheet.css';

function TaskCard({ TaskName, priority }) {
	return (
		<div className="TaskCardContainer">
			<div className="TaskSide1">
				<h4>{TaskName}</h4>
			</div>
			<div className="TaskSide2">
				<h3>icons 1</h3>
				<h3>{priority}</h3>
				<h3>icon 2</h3>
			</div>
		</div>
	);
}

export default TaskCard;
