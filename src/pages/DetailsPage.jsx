import { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import CampaignDetails from '../components/CampaignDetails'

const DetailsPage = () => {
	const [campaign, setCampaign] = useState()
	const allCampaign = useLoaderData()
	const params = useParams()

	useEffect(() => {
		const selectedCampaign = allCampaign.find(campaignItem => campaignItem.id === parseInt(params.id))
		setCampaign(selectedCampaign);

	}, [allCampaign, params.id])


	return (
		<div className='container mx-auto mt-4'>
			<CampaignDetails campaign={campaign} />
		</div>
	)
}

export default DetailsPage
