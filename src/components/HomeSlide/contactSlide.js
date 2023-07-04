import React, { useState } from 'react'
import { Send } from '@mui/icons-material'
import "../../styles/HomeSlide/HomeSlide.css"

export default function ContactSlide() {
	const [object, setObject] = useState('');
	const [message, setMessage] = useState('');

	return (
		<div className='contact'>
			<div className="slideTitle">Contact Me</div>
			<div className="form-group">
				<input type="text" className="form-control" placeholder='Object' value={object}
					onChange={(event) =>
						setObject(event.target.value)
					} />
			</div>
			<div className="form-group">
				<textarea className="form-control" style={{ resize: "none" }} placeholder='Message' rows="5" value={message}
					onChange={(event) =>
						setMessage(event.target.value)
					}></textarea>
			</div>
			<div className="form-group">
				<a href={`mailto:thomas.grangeon9+Portfolio@gmail.com?subject=${object} &body=${message}`}>
					<div className="SendButton"><Send style={{ marginRight: "10px" }} /> Send</div>
				</a>
			</div>
		</div>
	)
}
