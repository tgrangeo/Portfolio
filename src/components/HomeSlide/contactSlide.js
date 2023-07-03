import React, { useState } from 'react'
import { Send } from '@mui/icons-material'
import "../../styles/HomeSlide/HomeSlide.css"

export default function ContactSlide() {

	const [name, setName] = useState('');
	const [mail, setMail] = useState('');
	const [message, setMessage] = useState('');

	function submit() {
		console.log(`${name} ${mail} ${message}`);
		if (name && mail && message) {
			const requestBody = {
				name: name,
				mail: mail,
				message: message
			}
			const requestOptions = {
				method: 'POST',
				mode: 'cors',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(requestBody)
			};
			fetch('http://localhost:8080/api/v1/contact', requestOptions)
		}
		//.then(response => response.json())
		// .then(data => this.setState({ postId: data.id }));
	}

	return (
		<div className='contact'>
			<div className="slideTitle">Contact Me</div>
			{/* <form className="formDiv" onSubmit={submit}> */}
			<div className="form-group">
				<input type="text" placeholder='Name' className="form-control" value={name}
					onChange={(event) =>
						setName(event.target.value)
					} />
			</div>
			<div className="form-group">
				<input type="email" className="form-control" placeholder='Email' aria-describedby="emailHelp" value={mail}
					onChange={(event) =>
						setMail(event.target.value)
					} />
			</div>
			<div className="form-group">
				<textarea className="form-control" style={{ resize: "none" }} placeholder='Message' rows="5" value={message}
					onChange={(event) =>
						setMessage(event.target.value)
					}></textarea>
			</div>
			<div className="form-group">
				<button type="submit" onClick={submit} className="SendButton"><Send style={{ marginRight: "10px" }} />Send</button>
			</div>
			{/* </form> */}
		</div>
	)
}
