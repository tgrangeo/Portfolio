import React from 'react'
import "../../styles/HomeSlide/HomeSlide.css"
import { ToolList } from '../../helpers/skillList'

export default function ToolsSlide() {
	return (
		<div className='skills'>
			<div className="slideTitle">Tools</div>
			<div className='skillList'>
				{ToolList.map((item) => {
					return <div className='skillItem'>
						<div style={{ backgroundImage: `url(${item.image})` }} className='itemImage' />
						<p className='itemText'>{item.name}</p>
					</div>
				})}
			</div>

		</div>
	)
}
