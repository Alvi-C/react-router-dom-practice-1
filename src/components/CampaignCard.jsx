/* eslint-disable react/prop-types */


const CampaignCard = ({ campaign }) => {
    console.log(campaign);
    const {id, image, title, category, category_bg, card_bg, text_bg} = campaign || {};

    return (
			<div>
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
							className='inline-block text-teal-800 py-1 px-4 text-xs font-medium tracking-wide'
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
			</div>
		)
}

export default CampaignCard;