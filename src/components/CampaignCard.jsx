/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const CampaignCard = ({ campaign }) => {

    const {id, image, title, category, category_bg, card_bg, text_bg} = campaign || {};

    return (
			<Link to={`/${id}`}>
				<div
					style={{ backgroundColor: card_bg }}
					className=' rounded-lg overflow-hidden'
				>
					<img
						className='h-48 w-full object-cover object-end'
						src={image}
						alt=''
					/>
					<div className='py-5 px-3'>
						<span
							style={{ background: category_bg, color: text_bg }}
							className='inline-block py-1 px-4 mb-2 rounded-md text-xs font-medium tracking-wide'
						>
							{category}
						</span>
						<h4
							style={{ color: text_bg }}
							className='mt-2 font-semibold text-lg leading-tight truncate'
						>
							{title}
						</h4>
					</div>
				</div>
			</Link>
		)
}

export default CampaignCard;