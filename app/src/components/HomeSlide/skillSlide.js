import React from 'react'
import "../../styles/HomeSlide/HomeSlide.css"
import { SkillList } from '../../helpers/skillList'

export default function SkillSlide() {
	return (
		<div className='skills'>
			<h2>Skills</h2>
			<div className='skillList'>

				{SkillList.map((item) => {
					return <div className='skillItem'>
						<div style={{ backgroundImage: `url(${item.image})` }} className='itemImage' />
						<p>{item.name}</p>
					</div>
				})}
			</div>

		</div>
	)
}
