
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

import { PieChart, Pie, Cell } from 'recharts'
const COLORS = ['#0088FE', '#00C49F']

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	percent,
}) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5
	const x = cx + radius * Math.cos(-midAngle * RADIAN)
	const y = cy + radius * Math.sin(-midAngle * RADIAN)

	return (
		<text
			x={x}
			y={y}
			fill='white'
			textAnchor={x > cx ? 'start' : 'end'}
			dominantBaseline='central'
		>
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	)
}


const Statistics = () => {

    const [yourDonation, setYourDonation] = useState([])

    const getAllCampaigns = useLoaderData();

    useEffect(() => {
		const donatedCampaigns = JSON.parse(localStorage.getItem('donatedItemsList'))
			if (donatedCampaigns) {
				setYourDonation(donatedCampaigns)
            }
    }, [])

    const totalCampaignsLength = getAllCampaigns.length
    const givenDonationLength = yourDonation.length
    const donationPercentage = parseFloat(
			((givenDonationLength / totalCampaignsLength) * 100).toFixed(2)
		)
    const remainingDonation = 100 - donationPercentage;

    const data = [
			{ name: donationPercentage, value: donationPercentage },
			{ name: remainingDonation, value: remainingDonation },
		]

	return (
		<div className='container mx-auto mt-4'>
			<div className='flex justify-center'>
				<PieChart width={500} height={500}>
					<Pie
						data={data}
						cx='50%'
						cy='50%'
						label={renderCustomizedLabel}
						outerRadius={150}
						fill='#8884d8'
						dataKey='value'
					>
						{data.map((entry, index) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
					</Pie>
				</PieChart>
			</div>
			<div className='flex justify-center gap-8 font-normal md:text-xl px-3 md:px-4'>
				<div className='flex items-center gap-3'>
					<h4>Your Donation:</h4>
					<span className='block w-16 h-3 bg-[#287ef5]'></span>
				</div>
				<div className='flex items-center gap-3'>
					<h4>Total Donation:</h4>
					<span className='block w-16 h-3 bg-[#45b897]'></span>
				</div>
			</div>
		</div>
	)
}

export default Statistics
