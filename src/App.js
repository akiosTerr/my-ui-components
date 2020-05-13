import React from 'react';
import './App.css';
import Button from './components/Button';

function App() {
	return (
		<div className='App'>
			<Button size='small' bgColor='purple'>
				HELLO
			</Button>
			<Button size='medium' bgColor='red'>
				AKIOS
			</Button>
			<Button size='big' bgColor='blue'>
				button
			</Button>
		</div>
	);
}

export default App;
