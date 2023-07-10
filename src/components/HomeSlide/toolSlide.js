import React from 'react'
import "../../styles/HomeSlide/HomeSlide.css"
import { ToolList } from '../../helpers/skillList'
import { useTranslation } from 'react-i18next';

export default function ToolsSlide() {
	const { t } = useTranslation();
	return (
		<div className='skills'>
			<div className="slideTitle">{t("toolslide.tool")}</div>
			<div className='skillList'>
				{ToolList.map((item) => {
					return <div className='skillItem' key={item.name}>
						<div style={{ backgroundImage: `url(${item.image})` }} className='itemImage' />
						<p className='itemText'>{item.name}</p>
					</div>
				})}
			</div>
		</div>
	)
}
