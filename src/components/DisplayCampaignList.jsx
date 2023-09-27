/* eslint-disable react/prop-types */
import CampaignCard from "./CampaignCard";
import { useState } from 'react'

const DisplayCampaignList = ({ campaignList }) => {

	const [searchQuery, setSearchQuery] = useState('')
	const [filteredCampaigns, setFilteredCampaigns] = useState(campaignList)

	const handleSearch = () => {
		const lowerCaseQuery = searchQuery.toLowerCase()
		const filtered = campaignList.filter(campaign =>
			campaign.category.toLowerCase().includes(lowerCaseQuery)
		)
			setFilteredCampaigns(filtered)
	}
    return (
			<div className=''>
				<div className='relative overflow-hidden min-h-[30vh] md:min-h-[70vh]'>
					<div className='absolute inset-0'>
						<img
							src='https://i.ibb.co/dQd047P/hero-banner.jpg'
							alt='Background Image'
							className='object-cover object-center w-full'
						/>
						<div className='absolute inset-0 bg-white opacity-70'></div>
					</div>

					<div className='relative z-10 flex flex-col justify-center items-center min-h-[40vh] md:min-h-[70vh] text-center'>
						<h1 className='md:text-5xl font-bold leading-tight mb-4'>
							I Grow By Helping People In Need
						</h1>
						<div className='flex rounded-md md:w-[70%] mt-8 mx-auto'>
							<input
								type='text'
								name='q'
								className='w-3/4 md:w-2/4 p-3 ml-2 md:ml-16 lg:ml-36 rounded-md rounded-r-none border border-gray-300 placeholder-current placeholder:text-gray-400'
								placeholder='Search here...'
								value={searchQuery}
								onChange={e => setSearchQuery(e.target.value)}
							/>
							<button
								onClick={handleSearch}
								className='inline-flex items-center gap-2 bg-red-500 text-white text-lg font-normal py-3 px-6 rounded-r-md'
							>
								Search
							</button>
						</div>
					</div>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 py-10'>
					{filteredCampaigns.map(campaign => (
						<CampaignCard key={campaign.id} campaign={campaign} />
					))}
				</div>
			</div>
		)
}

export default DisplayCampaignList;