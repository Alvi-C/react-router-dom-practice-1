/* eslint-disable react/prop-types */
import swal from 'sweetalert'

const CampaignDetails = ({ campaign }) => {

    const { image, title, text_bg, description, price } = campaign || {};

    const handleDonation = () => {
        const donatedArray = [];
        const donatedItems = JSON.parse(localStorage.getItem('donatedItemsList'));

        if(!donatedItems) {
            donatedArray.push(campaign);
            localStorage.setItem('donatedItemsList', JSON.stringify(donatedArray));
        } else {
            const isExist = donatedItems.find(item => item.id === campaign.id);
            if(!isExist) {
                donatedArray.push(...donatedItems, campaign);
				localStorage.setItem('donatedItemsList', JSON.stringify(donatedArray));
				swal('Thank you!', 'You are a beautiful person', 'success')
            }else {
                swal('Hey!', 'You have already donated in this campaign', 'warning')
            }
        }
    }

	return (
		<div className='px-4'>
			<div className='relative'>
				<img src={image} alt='Featured image' className='w-full' />
				<div className='h-20 bg-black opacity-70 absolute bottom-0 lg:top-[90.5%] right-0 left-0'></div>
				<button
					onClick={handleDonation}
					style={{ backgroundColor: text_bg }}
					className='inline-block w-40 py-3 px-4 mb-2 ml-5 rounded-md text-base text-white font-normal absolute bottom-1 left-0'
				>
					Donate ${price}
				</button>
			</div>
			<div className='py-8'>
				<h1 className='text-3xl font-bold mb-2'>{title}</h1>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default CampaignDetails;


/*
<div className='relative'>
				<img src={image} alt='Featured image' className='w-full' />
				<div className='h-20 bg-black opacity-70 absolute bottom-0 lg:top-[90.5%] right-0 left-0'></div>
				<button
					onClick={handleDonation}
					style={{ backgroundColor: text_bg }}
					className='inline-block w-40 py-3 px-4 mb-2 ml-5 rounded-md text-base text-white font-normal absolute bottom-1 left-0'
				>
					Donate ${price}
				</button>
			</div>
			<div className='py-8'>
				<h1 className='text-3xl font-bold mb-2'>{title}</h1>
				<p>{description}</p>
			</div>
*/