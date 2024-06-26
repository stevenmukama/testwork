import ladyimage from './../img/ladysitting.png';
import circleBg from './../img/circlesbg.svg';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function HeroSection() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);
	}, []);

	return (
		<>
			<section className='Home-section md:max-xl:block max-md:flex-col-reverse max-md:pt-2 max-md:my-0 max-md:mx-[30px] max-md:pb-0'>
				<img
					className='circleBg max-md:hidden'
					src={circleBg}
					alt='circleBg'
				/>
				<img
					className='circleBg-img max-md:hidden'
					src={circleBg}
					alt='circleBg'
				/>
				<div className='main-herosection '>
					<h1 className='hero-text font-[800] max-md:block max-md:text-[26px] max-md:text-start max-md:font-extrabold'>
						<span style={{ color: '#F49406' }}> Gain</span>{' '}
						<span style={{ color: 'black' }}> Impressive</span>
						<span style={{ color: '#20B486' }}> Skills</span>{' '}
						<span style={{ color: 'black' }}> That </span>{' '}
						<br className='max-md:hidden'></br>
						<span style={{ color: 'black' }}> Bridges </span>{' '}
						<span style={{ color: '#20B486' }}> The Gap</span>
						<span style={{ color: 'black' }}> Between </span>{' '}
						<br className='max-md:hidden'></br>
						<span style={{ color: '#F49406' }}>
							Personal Development
						</span>{' '}
						<span style={{ color: 'black' }}>And</span>{' '}
						<br className='max-md:hidden'></br>
						<span style={{ color: '#20B486' }}>
							Professional Success!
						</span>{' '}
					</h1>
					<div>
						<p className='hero-description text-[rgba(30,30,30,0.7)] leading-[1.8] max-md:text-[15px] text-[23px] max-md:text-center'>
							Discover vital courses that bring about real change in both
							your personal and professional life. At SPID Education, we
							prioritize practical learning through reading, ensuring you
							acquire valuable skills that truly make a difference.
						</p>
						<div className='font-semibold Home-section-buttons'>
							<button className='cta-button max-md:text-sm max-md:px-2 '>
								Get Started
							</button>
							<button className='contact-button max-md:text-sm max-md:px-2 '>
								Contact Us
							</button>
							<Link
								to='/certificationPage'
								className='flex gap-4 max-md:gap-2 items-center font-Poppins hover:text-[#20B486]'>
								<img
									src='/certificationVector.svg'
									alt='certification icon'
									className='w-auto h-auto max-md:w-5 max-md:h-5'
								/>
								{windowWidth <= 768 ? (
									<p className='font-medium text-start max-md:text-[15px]'>
										Cert Verify
									</p>
								) : (
									<p className='max-md:text-sm md:text-[22px] font-medium'>
										Cert Verification
									</p>
								)}
							</Link>
						</div>
					</div>
				</div>
				<div className='herosection-lady max-md:flex '>
					<div className='box-herosection lg:max-xl:left-[35%] max-sm:left-[50%]'></div>
					<img
						src={ladyimage}
						className='rounded-md lady-sitting-image max-sm:h-[272.45px] max-md:w-full max-md:pt-3 max-md:pr-5'
						alt='lady-sitting-image'
					/>
				</div>
			</section>
		</>
	);
}

export default HeroSection;
