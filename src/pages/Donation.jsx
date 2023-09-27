import { useEffect, useState } from 'react'
import DonatedListDisplay from '../components/DonatedListDisplay'

const Donation = () => {
	const [donatedList, setDonatedList] = useState([])
	const [noDataFound, setNoDataFound] = useState(false)
	const [isShow, setIsShow] = useState(false)


	useEffect(() => {
		const donatedItems = JSON.parse(localStorage.getItem('donatedItemsList'))
		if (donatedItems) {
			setDonatedList(donatedItems)
		} else {
			setNoDataFound(true)
		}
	}, [])

	const handleViewBtn = () => {
		setIsShow(!isShow)
	}

	return (
		<div className='container mx-auto mt-10'>
			{noDataFound ? (
				<p className='text-2xl font-bold h-[80vh] flex justify-center items-center'>
					You have not donated anything yet!
				</p>
			) : (
				<div>
					<div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-8 mb-8 mx-4'>
						{isShow
							? donatedList.map(campaign => (
									<DonatedListDisplay
										key={campaign.id}
										donatedCampaign={campaign}
									/>))
							: donatedList
									.slice(0, 4)
									.map(campaign => (
										<DonatedListDisplay
											key={campaign.id}
											donatedCampaign={campaign}
										/>
									))}
					</div>
					{donatedList.length > 4 && (
						<div className={!isShow ? 'block' : 'hidden'}>
							<button
								onClick={handleViewBtn}
								className='block w-30 rounded bg-[#009444] text-white px-4 py-2 mt-10 text-sm font-normal transition hover:scale-105 mx-auto'
							>
								See all
							</button>
						</div>
					)}
				</div>
			)}
		</div>
	)
}

export default Donation


