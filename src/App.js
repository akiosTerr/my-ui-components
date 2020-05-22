import React from 'react';
import './App.css';
import Button from './components/Button';
import ReactiveForm from './components/reactiveForm';

function App() {
	return (
		<div className='App'>
			<ReactiveForm />
			<Button size='small' bgColor='purple'>
				BUTTON
			</Button>
			<Button size='medium' bgColor='red'>
				BUTTON
			</Button>
			<Button size='big' bgColor='blue'>
				BUTTON
			</Button>
		</div>
	);
}

export default App;
