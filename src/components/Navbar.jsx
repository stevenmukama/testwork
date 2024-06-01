import { useState, useEffect, useRef } from 'react';
import logo from './../img/spidedlogo.svg';
import './Navbar.css';

const languages = [
	{
		value: 'English',
		label: 'English',
		flag: '/EnglishLang.svg',
	},
	{
		value: 'French',
		label: 'French',
		flag: '/FrenchLang.svg',
	},
];

const Navbar = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [isOpen, setIsOpen] = useState(false);
	const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
	const dropdownRef = useRef(null);
	const [isSmallScreenMenuOpen, setIsSmallScreenMenuOpen] =
		useState(false);
	const smallScreenMenuRef = useRef(null);
	const buttonRef = useRef(null);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
			if (window.innerWidth > 768) {
				setIsSmallScreenMenuOpen(false);
			}
		};

		const handleClickOutside = (event) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target)
			) {
				setIsOpen(false);
			}
			if (buttonRef.current && !buttonRef.current.contains(event.target)) {
				setIsSmallScreenMenuOpen(false);
			}
		};

		window.addEventListener('resize', handleResize);
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			window.removeEventListener('resize', handleResize);
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const handleLanguageChange = (lang) => {
		setSelectedLanguage(lang);
		setIsOpen(false);
	};

	const toggleSmallScreenMenu = () => {
		setIsSmallScreenMenuOpen(!isSmallScreenMenuOpen);
	};

	const handleNavItemClick = (section) => {
		setIsOpen(false);
		setIsSmallScreenMenuOpen(false);
		document
			.getElementById(section)
			?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<>
			<nav className='Navbar border-b border-solid border-[#d6d2d2] '>
				{windowWidth <= 768 ? (
					<img
						src='/smallLogo.svg'
						alt='Logo'
						className='h-auto'
					/>
				) : (
					<img
						src={logo}
						alt='Logo'
						className='nav-logo'
					/>
				)}
				<div className={`nav-items ${isOpen && 'open'}`}>
					<a
						className='nav-item max-md:hidden'
						onClick={() => handleNavItemClick('home')}>
						Home
					</a>
					<a
						className='nav-item max-md:hidden'
						onClick={() => handleNavItemClick('courses')}>
						Courses
					</a>
					<a
						className='nav-item max-md:hidden'
						onClick={() => handleNavItemClick('contact')}>
						Contact us
					</a>
					<a className='nav-item'>Sign in </a>
					{windowWidth <= 768 ? (
						<a className='button box-account'>Sign up </a>
					) : (
						<a className='button box-account'>Create account </a>
					)}
					<div
						className={` ${
							isOpen ? 'hidden max-md:block open' : 'hidden max-md:block'
						}`}>
						<button
							ref={buttonRef}
							className='border max-md:border-[#888686] max-md:mt-2 max-md:border-solid max-md:border max-md:rounded-lg'
							onClick={toggleSmallScreenMenu}>
							<img
								src='/smallScreenToggle.svg'
								className='pl-2 pr-2 max-md:w-8 max-md:h-8'
							/>
						</button>
					</div>

					<div
						className='px-4 py-3 w-max bg-[#4B4B4B] text-white rounded-md  max-md:hidden  cursor-pointer relative'
						ref={dropdownRef}>
						<div
							className='bg-[#4B4B4B] text-white flex items-center gap-2'
							onClick={(e) => {
								e.stopPropagation();
								setIsOpen(!isOpen);
							}}>
							<img
								src={selectedLanguage.flag}
								alt={selectedLanguage.label}
								className='w-6 h-6'
							/>
							<span>{selectedLanguage.label}</span>
							<img src='/downEng.svg' />
						</div>
						{isOpen && (
							<ul className='absolute left-0 bg-[#4B4B4B] text-white rounded-md mt-2 w-full z-50'>
								{languages.map((lang) => (
									<li
										key={lang.value}
										className='flex items-center px-4 py-3 gap-2 cursor-pointer hover:bg-[#3a3a3a]'
										onClick={() => handleLanguageChange(lang)}>
										<img
											src={lang.flag}
											alt={lang.label}
											className='w-6 h-6 '
										/>
										<span>{lang.label}</span>
									</li>
								))}
							</ul>
						)}
					</div>
				</div>
			</nav>
			{isSmallScreenMenuOpen && (
				<div
					ref={smallScreenMenuRef}
					className='bg-[#4B4B4B] text-white pt-[60px] px-4 rounded-lg'>
					<a
						className='block pb-2'
						onClick={() => handleNavItemClick('home')}>
						Home
					</a>
					<a
						className='block pb-2'
						onClick={() => handleNavItemClick('courses')}>
						Courses
					</a>
					<a
						className='block pb-2'
						onClick={() => handleNavItemClick('contact')}>
						Contact us
					</a>
				</div>
			)}
			<div className='border-b border-solid border-[#d6d2d2] mt-2 w-full'></div>
		</>
	);
};

export default Navbar;
