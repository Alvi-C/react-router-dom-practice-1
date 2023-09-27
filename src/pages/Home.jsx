import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import DisplayCampaignList from "../components/displayCampaignList";


const Home = () => {
    const donationCampaignList = useLoaderData();
    console.log(donationCampaignList);
    return (
			<div>
				<div className='container mx-auto mt-4'>
					<Banner />
					<DisplayCampaignList campaignList = {donationCampaignList}/>
				</div>
			</div>
		)
};

export default Home;