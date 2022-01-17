import React from 'react';
import CalcPalette from '../CalcPalette/CalcPalette';
import Desk from '../Desk/Desk';

import './App.css';

function App() {
	return (
		<div className="container mt-5 d-flex justify-content-evenly align-items-center">
			<CalcPalette />
			<Desk />
		</div>
	);
}

export default App;
