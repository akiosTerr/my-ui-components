import React, { useRef, useEffect, useState } from 'react';

function ReactiveForm() {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const bodyInput = useRef(null);
	const titleInput = useRef(null);
	const rows = 3;
	const baseClass = 'createPostTextArea';
	const bigFontCharsCount = 80;
	const charLineSmall = 50;
	const charLineBig = 29;
	var classString;
	var fontSize;

	useEffect(() => {
		reactiveTextArea();
	});

	const titleChange = () => {
		setTitle(titleInput.current.value);
	};

	const bodyChange = () => {
		setBody(bodyInput.current.value);
		reactiveTextArea();
	};

	const reactiveTextArea = () => {
		const element = bodyInput.current;
		const text = element.value;
		const size = text.length;
		fontSize = size < bigFontCharsCount ? false : true;
		const lineBreaks = (text.match(/\n/g) || []).length;
		const cols = fontSize ? charLineSmall : charLineBig;
		const lineCount = (size / cols) >> 0;
		let addRows = 0;
		addRows += lineBreaks;
		addRows += lineCount;
		classString = baseClass + (fontSize ? ' smallFont' : ' bigFont');
		element.className = classString;
		element.rows = addRows + rows;
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		const newPost = {
			title,
			body,
		};
		if (newPost.title.length < 1 || newPost.body.length < 1) {
			console.log('forms empty');
			return 'error form empty';
		}
	};

	return (
		<form onSubmit={onSubmit} className='createPostForm'>
			<label htmlFor='title'>Post Title</label>
			<input
				maxLength='45'
				onChange={titleChange}
				ref={titleInput}
				className='createPostTitle bigFont'
				type='text'
				name='title'
				id='title'
			/>
			<label htmlFor='body'>Post</label>
			<textarea
				maxLength='2000'
				onChange={bodyChange}
				ref={bodyInput}
				className='createPostTextArea'
				name='Post'
				cols='30'
				rows='3'
			/>
			<input value='Publish' className='pub-btn' type='submit' />
		</form>
	);
}

export default ReactiveForm;
