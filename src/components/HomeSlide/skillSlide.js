import React from 'react'
import "../../styles/HomeSlide/HomeSlide.css"
import { SkillList } from '../../helpers/skillList'
import { useTranslation } from 'react-i18next';

export default function SkillSlide() {
	const { t } = useTranslation();
	return (
		<div className='skills'>
			<div className="slideTitle">{t("skillslide.skill")}</div>
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
