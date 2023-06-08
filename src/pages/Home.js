import React from 'react'
import { LinkedIn, GitHub, Email } from '@mui/icons-material'
import "../styles/Home.css"

function Home() {
	return (
		<div className='home'>
			<div className='about'>
				<h2> HI, My Name is Thomas</h2>
				<div className="prompt">
					<p>Student Software Developer</p>
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
				</div>
			</div>
			<div className='skills'>
				<h1>Skills</h1>
				<ol className='list'>
					<li className='item'>
						<h2>Front-end</h2>
						<span>coming soon</span>
					</li>
					<li className='item'>
						<h2>Back-end</h2>
						<span>coming soon</span>
					</li>
				</ol>
			</div>
		</div>
	)
}

export default Home