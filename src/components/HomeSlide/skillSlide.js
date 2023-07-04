import React from 'react'
import "../../styles/HomeSlide/HomeSlide.css"
import { SkillList } from '../../helpers/skillList'

export default function SkillSlide() {
	return (
		<div className='skills'>
			<div className="slideTitle">Skills</div>
			<div className='skillList'>

				{SkillList.map((item) => {
					return <div className='skillItem' key={item.name}>
						<div style={{ backgroundImage: `url(${item.image})` }} className='itemImage' />
						<p className='itemText'>{item.name}</p>
					</div>
				})}
			</div>

		</div>
	)
}
