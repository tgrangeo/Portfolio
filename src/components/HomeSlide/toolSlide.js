import React from 'react'
import "../../styles/HomeSlide/HomeSlide.css"
import { ToolList } from '../../helpers/skillList'

export default function ToolsSlide() {
	return (
		<div className='skills'>
			<h2>Tools</h2>
			<div className='skillList'>

				{ToolList.map((item) => {
					return <div className='skillItem'>
						<div style={{ backgroundImage: `url(${item.image})` }} className='itemImage' />
						<p>{item.name}</p>
					</div>
				})}
			</div>

		</div>
	)
}
