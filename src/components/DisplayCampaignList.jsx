/* eslint-disable react/prop-types */
import CampaignCard from "./CampaignCard";


const DisplayCampaignList = ({ campaignList }) => {
    return (
			<div className='py-10'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8'>
                    {campaignList.map(campaign => <CampaignCard key={campaign.id} campaign={campaign} />)}
				</div>
			</div>
		)
}

export default DisplayCampaignList;