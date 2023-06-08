import React from 'react'
import { LinkedIn, GitHub, Email } from '@mui/icons-material'
import "../styles/Footer.css"

function Footer() {
	return (
		<div className='footer'>
			<div>

				<a href="https://github.com/tgrangeo" target="_blank" rel="noreferrer" >
					<GitHub />
				</a>
				<a href="https://www.linkedin.com/in/thomas-grangeon-20a837244/" target="_blank" rel="noreferrer" >
					<LinkedIn />
				</a>
				<a href={`mailto:thomas.grangeon9@gmail.com?subject=${"hello" || ""}&body=${""}`}>
					<Email />
				</a>
			</div>
			<p> &copy; 2023 tgrangeo.com</p>
		</div>
	)
}

export default Footer