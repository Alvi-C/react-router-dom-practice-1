import { useLoaderData } from "react-router-dom";

import DisplayCampaignList from "../components/displayCampaignList";


const Home = () => {
    const donationCampaignList = useLoaderData();
    return (
			<div>
				<div className='container mx-auto mt-4 px-4'>
					<DisplayCampaignList campaignList={donationCampaignList} />
				</div>
			</div>
		)
};

export default Home;