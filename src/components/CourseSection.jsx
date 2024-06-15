import { useState, useEffect } from 'react';
import numberImage from './../img/number.svg';
import fullStar from './../img/fullStar.svg';
import halfStar from './../img/halfStar.svg';
import './CourseSection.css';
import { Link } from 'react-router-dom';

const courseLessons = [
	{
		id: 1,
		text: 'All courses',
	},
	{
		id: 2,
		text: 'Leadership',
	},
	{
		id: 3,
		text: 'Language',
	},
	{
		id: 4,
		text: 'House Cleaning',
	},
	{
		id: 5,
		text: 'Baby-sitting',
	},
	{
		id: 6,
		text: 'Chief cook',
	},
	{
		id: 7,
		text: 'Elderly caretaker',
	},
	{
		id: 8,
		text: 'Waiter and Waitress',
	},
	{
		id: 9,
		text: 'Ushering',
	},
];

// const containerRef = useRef(null);

// useEffect(() => {
// 	const container = containerRef.current;
// 	const totalWidth = container.scrollWidth;
// 	const duration = totalWidth / 50; // Adjust the speed by changing this factor

// 	container.style.animation = `scroll ${duration}s linear infinite`;

// 	const handleMouseOver = () => {
// 		container.style.animationPlayState = 'paused';
// 	};

// 	const handleMouseOut = () => {
// 		container.style.animationPlayState = 'running';
// 	};

// 	container.addEventListener('mouseover', handleMouseOver);
// 	container.addEventListener('mouseout', handleMouseOut);

// 	return () => {
// 		container.removeEventListener('mouseover', handleMouseOver);
// 		container.removeEventListener('mouseout', handleMouseOut);
// 	};
// }, []);

function CourseSection() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<>
			<section className='pt-16 max-md:mx-8 md:max-xl:pt-0 max-md:pt-0'>
				<div className='courses-section-header '>
					<h1 className='popular-courses max-md:text-xl'>
						Our <span className='courses-title'>Courses</span>{' '}
					</h1>

					<div className='explore-course-container max-md:gap-0 max-md:items-center max-md:w-1/3'>
						{windowWidth <= 768 ? (
							<h2 className='Explore-courses font-koho max-md:text-[15px]'>
								More Courses
							</h2>
						) : (
							<h2 className='Explore-courses font-koho'>
								Explore courses
							</h2>
						)}

						<img
							src='/gosign.svg'
							className='w-5 pt-5 max-md:h-3 max-md:pt-1 max-md:w-fit'
							alt='go-sign'
						/>
					</div>
				</div>
				<div className=''>
					<div className='flex flex-wrap gap-4 '>
						{courseLessons.map((courseLessons) => (
							<div
								key={courseLessons.id}
								className='mb-6'>
								<button className='px-4 py-2 border rounded-md hoverTextButton hover:bg-[#20B486] active:bg-[#20B486] flex-wrap max-md:text-[8px] max-md:flex '>
									{courseLessons.text}
								</button>
							</div>
						))}
					</div>
				</div>

				<div className=' container-card-item max-md:flex-col max-md:my-0 max-md:mx-auto'>
					<div className='card-item'>
						<div className='card-image-item'>
							<div className='card-image'></div>
						</div>

						<div className='card-info'>
							<div className='lessons-rating md:max-xl:flex-col md:max-xl:items-start'>
								<div className='lessons-count '>
									<img
										src={numberImage}
										className='number-image'
									/>
									<p className='lessons-number max-md:text-[1rem]'>
										{' '}
										10 Lessons
									</p>
								</div>
								<div className='rates max-md:size-auto'>
									<img src={fullStar} />
									<img src={fullStar} />
									<img src={fullStar} />
									<img src={halfStar} />
									<img src={halfStar} />
								</div>
							</div>
							<h2 className='card-title'>
								Professional Cleaning Mastery{' '}
							</h2>
							<p className='card-intro max-md:text-[15px]'>
								Advanced Cleaning Techniques and Equipment Usage
							</p>
							<div className='discount-section'>
								<div className='dollar-discounted md:max-xl:text-[17px]'>
									<span className='dollar-numbers-five max-md:text-[15px]'>
										{' '}
										$ 5
									</span>
									<span className='dollar-numbers-twenty max-md:text-[15px]'>
										{' '}
										$ 20
									</span>
								</div>
								<button className='Enroll max-md:text-xs max-md:pt-3 max-md:w-auto'>
									Enroll Now
								</button>
							</div>
						</div>
					</div>

					<div className='card-item'>
						<div className='card-image-item'>
							<div className='card-image-2'></div>
						</div>

						<div className='card-info'>
							<div className='lessons-rating md:max-xl:flex-col md:max-xl:items-start'>
								<div className='lessons-count '>
									<img
										src={numberImage}
										className='number-image'
									/>
									<p className='lessons-number max-md:text-[1rem]'>
										{' '}
										10 Lessons
									</p>
								</div>
								<div className='rates max-md:size-auto'>
									<img src={fullStar} />
									<img src={fullStar} />
									<img src={fullStar} />
									<img src={halfStar} />
									<img src={halfStar} />
								</div>
							</div>
							<h2 className='card-title'>
								Professional Cleaning Mastery{' '}
							</h2>
							<p className='card-intro max-md:text-[15px]'>
								Advanced Cleaning Techniques and Equipment Usage
							</p>
							<div className='discount-section'>
								<div className='dollar-discounted md:max-xl:text-[17px]'>
									<span className='dollar-numbers-five max-md:text-[15px] '>
										{' '}
										$ 5
									</span>
									<span className='dollar-numbers-twenty max-md:text-[15px]'>
										{' '}
										$ 20
									</span>
								</div>
								<button className='Enroll max-md:text-xs max-md:pt-3 max-md:w-auto'>
									Enroll Now
								</button>
							</div>
						</div>
					</div>

					<div className='card-item'>
						<div className='card-image-item'>
							<div className='card-image-3'></div>
						</div>

						<div className='card-info'>
							<div className='lessons-rating md:max-xl:flex-col md:max-xl:items-start'>
								<div className='lessons-count'>
									<img
										src={numberImage}
										className='number-image'
									/>
									<p className='lessons-number max-md:text-[1rem]'>
										10 Lessons
									</p>
								</div>
								<div className='rates max-md:size-auto'>
									<img src={fullStar} />
									<img src={fullStar} />
									<img src={fullStar} />
									<img src={halfStar} />
									<img src={halfStar} />
								</div>
							</div>
							<h2 className='card-title max-md:text-[15px]'>
								Professional Cleaning Mastery{' '}
							</h2>
							<p className='card-intro max-md:text-[15px]'>
								Advanced Cleaning Techniques and Equipment Usage
							</p>
							<div className='discount-section'>
								<div className='dollar-discounted md:max-xl:text-[17px]'>
									<span className='dollar-numbers-five max-md:text-[15px]'>
										{' '}
										$ 5
									</span>
									<span className='dollar-numbers-twenty max-md:text-[15px]'>
										{' '}
										$ 20
									</span>
								</div>
								<button className='Enroll max-md:text-xs max-md:pt-3 max-md:w-auto'>
									Enroll Now
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className='flex items-center justify-center text-center max-md:flex-col max-md:my-0 max-md:mx-auto'>
					<Link
						to='/AllCoursesPage'
						className='explore-all-courses-button max-md:text-[15px] max-md:px-6 max-md:py-3 max-md:w-max'>
						Explore all course
					</Link>
				</div>
			</section>
		</>
	);
}

export default CourseSection;

// import { useState, useEffect, useRef } from 'react';
// import numberImage from './../img/number.svg';
// import fullStar from './../img/fullStar.svg';
// import halfStar from './../img/halfStar.svg';
// import { Link } from 'react-router-dom';

// const courseLessons = [
// 	{
// 		id: 1,
// 		text: 'All courses',
// 	},
// 	{
// 		id: 2,
// 		text: 'Leadership',
// 	},
// 	{
// 		id: 3,
// 		text: 'Language',
// 	},
// 	{
// 		id: 4,
// 		text: 'House Cleaning',
// 	},
// 	{
// 		id: 5,
// 		text: 'Baby-sitting',
// 	},
// 	{
// 		id: 6,
// 		text: 'Chief cook',
// 	},
// 	{
// 		id: 7,
// 		text: 'Elderly caretaker',
// 	},
// 	{
// 		id: 8,
// 		text: 'Waiter and Waitress',
// 	},
// 	{
// 		id: 9,
// 		text: 'Ushering',
// 	},
// ];

// function CourseSection() {
// 	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
// 	const containerRef = useRef(null);

// 	useEffect(() => {
// 		const handleResize = () => {
// 			setWindowWidth(window.innerWidth);
// 		};

// 		window.addEventListener('resize', handleResize);

// 		return () => {
// 			window.removeEventListener('resize', handleResize);
// 		};
// 	}, []);

// 	useEffect(() => {
// 		const container = containerRef.current;
// 		const totalWidth = container.scrollWidth;
// 		const duration = totalWidth / 30; // Adjust the speed by changing this factor

// 		container.style.animation = `scroll ${duration}s linear infinite`;

// 		const handleMouseOver = () => {
// 			container.style.animationPlayState = 'paused';
// 		};

// 		const handleMouseOut = () => {
// 			container.style.animationPlayState = 'running';
// 		};

// 		container.addEventListener('mouseover', handleMouseOver);
// 		container.addEventListener('mouseout', handleMouseOut);

// 		return () => {
// 			container.removeEventListener('mouseover', handleMouseOver);
// 			container.removeEventListener('mouseout', handleMouseOut);
// 		};
// 	}, []);

// 	return (
// 		<>
// 			<section className='pt-16 max-md:mx-8 md:max-xl:pt-0 max-md:pt-0'>
// 				<div className='courses-section-header'>
// 					<h1 className='popular-courses max-md:text-xl'>
// 						Our <span className='courses-title'>Courses</span>
// 					</h1>

// 					<div className='explore-course-container max-md:gap-0 max-md:items-center max-md:w-1/3'>
// 						{windowWidth <= 768 ? (
// 							<h2 className='Explore-courses font-koho max-md:text-[15px]'>
// 								More Courses
// 							</h2>
// 						) : (
// 							<h2 className='Explore-courses font-koho'>
// 								Explore courses
// 							</h2>
// 						)}

// 						<img
// 							src='/gosign.svg'
// 							className='w-5 pt-5 max-md:h-3 max-md:pt-1 max-md:w-fit'
// 							alt='go-sign'
// 						/>
// 					</div>
// 				</div>
// 				<div>
// 					<div
// 						className='flex gap-4 whitespace-nowrap'
// 						ref={containerRef}>
// 						{courseLessons
// 							.concat(courseLessons)
// 							.map((courseLesson, index) => (
// 								<div
// 									key={index}
// 									className='inline-block mb-6 whitespace-nowrap animate-scroll'
// 									style={{
// 										animation: 'scroll 30s linear infinite',
// 										willChange: 'transform',
// 									}}>
// 									<button className='px-4 py-2 border rounded-md hover:bg-[#20B486] active:bg-[#20B486] flex-wrap max-md:text-[8px] max-md:flex'>
// 										{courseLesson.text}
// 									</button>
// 								</div>
// 							))}
// 					</div>
// 				</div>

// 				<div className='container-card-item max-md:flex-col max-md:my-0 max-md:mx-auto'>
// 					<div className='card-item'>
// 						<div className='card-image-item'>
// 							<div className='card-image'></div>
// 						</div>

// 						<div className='card-info'>
// 							<div className='lessons-rating md:max-xl:flex-col md:max-xl:items-start'>
// 								<div className='lessons-count'>
// 									<img
// 										src={numberImage}
// 										className='number-image'
// 									/>
// 									<p className='lessons-number max-md:text-[1rem]'>
// 										10 Lessons
// 									</p>
// 								</div>
// 								<div className='rates max-md:size-auto'>
// 									<img src={fullStar} />
// 									<img src={fullStar} />
// 									<img src={fullStar} />
// 									<img src={halfStar} />
// 									<img src={halfStar} />
// 								</div>
// 							</div>
// 							<h2 className='card-title'>Professional Cleaning Mastery</h2>
// 							<p className='card-intro max-md:text-[15px]'>
// 								Advanced Cleaning Techniques and Equipment Usage
// 							</p>
// 							<div className='discount-section'>
// 								<div className='dollar-discounted md:max-xl:text-[17px]'>
// 									<span className='dollar-numbers-five max-md:text-[15px]'>
// 										$5
// 									</span>
// 									<span className='dollar-numbers-twenty max-md:text-[15px]'>
// 										$20
// 									</span>
// 								</div>
// 								<button className='Enroll max-md:text-xs max-md:pt-3 max-md:w-auto'>
// 									Enroll Now
// 								</button>
// 							</div>
// 						</div>
// 					</div>

// 					<div className='card-item'>
// 						<div className='card-image-item'>
// 							<div className='card-image-2'></div>
// 						</div>

// 						<div className='card-info'>
// 							<div className='lessons-rating md:max-xl:flex-col md:max-xl:items-start'>
// 								<div className='lessons-count'>
// 									<img
// 										src={numberImage}
// 										className='number-image'
// 									/>
// 									<p className='lessons-number max-md:text-[1rem]'>
// 										10 Lessons
// 									</p>
// 								</div>
// 								<div className='rates max-md:size-auto'>
// 									<img src={fullStar} />
// 									<img src={fullStar} />
// 									<img src={fullStar} />
// 									<img src={halfStar} />
// 									<img src={halfStar} />
// 								</div>
// 							</div>
// 							<h2 className='card-title'>Professional Cleaning Mastery</h2>
// 							<p className='card-intro max-md:text-[15px]'>
// 								Advanced Cleaning Techniques and Equipment Usage
// 							</p>
// 							<div className='discount-section'>
// 								<div className='dollar-discounted md:max-xl:text-[17px]'>
// 									<span className='dollar-numbers-five max-md:text-[15px]'>
// 										$5
// 									</span>
// 									<span className='dollar-numbers-twenty max-md:text-[15px]'>
// 										$20
// 									</span>
// 								</div>
// 								<button className='Enroll max-md:text-xs max-md:pt-3 max-md:w-auto'>
// 									Enroll Now
// 								</button>
// 							</div>
// 						</div>
// 					</div>

// 					<div className='card-item'>
// 						<div className='card-image-item'>
// 							<div className='card-image-3'></div>
// 						</div>

// 						<div className='card-info'>
// 							<div className='lessons-rating md:max-xl:flex-col md:max-xl:items-start'>
// 								<div className='lessons-count'>
// 									<img
// 										src={numberImage}
// 										className='number-image'
// 									/>
// 									<p className='lessons-number max-md:text-[1rem]'>
// 										10 Lessons
// 									</p>
// 								</div>
// 								<div className='rates max-md:size-auto'>
// 									<img src={fullStar} />
// 									<img src={fullStar} />
// 									<img src={fullStar} />
// 									<img src={halfStar} />
// 									<img src={halfStar} />
// 								</div>
// 							</div>
// 							<h2 className='card-title max-md:text-[15px]'>
// 								Professional Cleaning Mastery
// 							</h2>
// 							<p className='card-intro max-md:text-[15px]'>
// 								Advanced Cleaning Techniques and Equipment Usage
// 							</p>
// 							<div className='discount-section'>
// 								<div className='dollar-discounted md:max-xl:text-[17px]'>
// 									<span className='dollar-numbers-five max-md:text-[15px]'>
// 										$5
// 									</span>
// 									<span className='dollar-numbers-twenty max-md:text-[15px]'>
// 										$20
// 									</span>
// 								</div>
// 								<button className='Enroll max-md:text-xs max-md:pt-3 max-md:w-auto'>
// 									Enroll Now
// 								</button>
// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 				<div className='flex items-center justify-center text-center max-md:flex-col max-md:my-0 max-md:mx-auto'>
// 					<Link
// 						to='/AllCoursesPage'
// 						className='explore-all-courses-button max-md:text-[15px] max-md:px-6 max-md:py-3 max-md:w-max'>
// 						Explore all course
// 					</Link>
// 				</div>
// 			</section>

// 			<style>{`
// 				@keyframes scroll {
// 					0% {
// 						transform: translateX(100%);
// 					}
// 					100% {
// 						transform: translateX(-100%);
// 					}
// 				}
// 			`}</style>
// 		</>
// 	);
// }

// export default CourseSection;
