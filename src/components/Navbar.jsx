import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
			<div>
				<div className='container mx-auto mt-4'>
					<nav className='flex items-center justify-between flex-wrap'>
						<h3 className='text-2xl font-bold'>
							<NavLink to='/'>
								<img
									className='w-44'
									src='https://i.ibb.co/wYqVnYf/donation-logo.png'
									alt=''
								/>
							</NavLink>
						</h3>
						<ul className='flex items-center justify-between flex-wrap gap-5 lg:gap-8 px-2'>
							<li>
								<NavLink
									to='/'
									className={({ isActive }) =>
										isActive
											? 'underline underline-offset-8 decoration decoration-red-500 text-red-500 font-semibold leading-6'
											: ''
									}
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to='/donation'
									className={({ isActive }) =>
										isActive
											? 'underline underline-offset-8 decoration decoration-red-500 text-red-500 font-semibold leading-6'
											: ''
									}
								>
									Donation
								</NavLink>
							</li>
							<li>
								<NavLink
									to='/stat'
									className={({ isActive }) =>
										isActive
											? 'underline underline-offset-8 decoration decoration-red-500 text-red-500 font-semibold leading-6'
											: ''
									}
								>
									Statistics
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		)
};

export default Navbar;