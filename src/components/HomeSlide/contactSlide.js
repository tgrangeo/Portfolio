import React from 'react'
import "../../styles/HomeSlide/HomeSlide.css"

export default function ContactSlide() {

	function submit() {
		console.log("hi");
	}

	return (
		<div className='contact'>
			<h2>Contact Me</h2>
			<form className="formDiv" onSubmit={submit}> {/*method="POST"> */}
				<div className="form-group">
					<input type="text" placeholder='Name' className="form-control" />
				</div>
				<div className="form-group">
					<input type="email" className="form-control" placeholder='Email' aria-describedby="emailHelp" />
				</div>
				<div className="form-group">
					<textarea className="form-control" placeholder='Message' rows="5"></textarea>
				</div>
				<div className="form-group">
					<button type="submit" className="SendButton">Send</button>
				</div>
			</form>
		</div>
	)
}
