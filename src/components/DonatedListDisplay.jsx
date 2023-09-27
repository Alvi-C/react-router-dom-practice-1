/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const DonatedListDisplay = ({ donatedCampaign }) => {

	const {id, image, title, category, category_bg, card_bg, text_bg, price } = donatedCampaign || {}

	return (
		<div
			style={{ backgroundColor: card_bg }}
			className='flex rounded-lg overflow-hidden w-[400px] md:w-[700px] lg:w-[630px] mx-auto'
		>
			<img
				src={image}
				className='w-32 md:w-80 lg:w-60 h-full object-cover'
				alt=''
			/>
			<div className='p-5'>
				<span
					style={{ background: category_bg, color: text_bg }}
					className='inline-block py-1 px-4 mb-2 rounded-md text-xs font-medium tracking-wide'
				>
					{category}
				</span>
				<h4 className='mt-2 font-semibold text-lg leading-tight truncate'>
					{title}
				</h4>
				<p
					style={{ color: text_bg }}
					className='mt-2 mb-4 font-semibold text-lg'
				>
					${price}
				</p>
				<Link to={`/${id}`}>
					<button
						style={{ backgroundColor: text_bg }}
						className='py-1 px-3 md:py-2 md:px-4 rounded-md text-sm md:text-base text-white font-normal'
					>
						View Details
					</button>
				</Link>
			</div>
		</div>
	)
}

export default DonatedListDisplay;