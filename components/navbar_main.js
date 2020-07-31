import { useEffect, useState } from "react";
import useScrollPosition from "@react-hook/window-scroll";
import Link from "next/link";

const NavbarMain = () => {
	const [scroll, setScroll] = useState(true);
	const scrollY = useScrollPosition(60);

	useEffect(() => {
		if (scrollY > 0) {
			setScroll(false);
		} else setScroll(true);
	}, [scrollY]);

	const navClass =
		"nav-main sticky-top navbar navbar-expand-lg navbar-dark p-2 ";

	return (
		<nav
			className={
				scroll
					? `${navClass} transition-ease`
					: `${navClass} nav-main-scroll transition-ease`
			}
		>
			<div className='container'>
				<Link href='/'>
					<a className={scroll ? "brand-display m-0" : "navbar-brand m-0"}>
						<p className='brand-title-main m-0'>Klinger</p>
					</a>
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarTogglerDemo02'
					aria-controls='navbarTogglerDemo02'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div
					className={`collapse navbar-collapse ${
						scroll ? "justify-content-center" : "justify-content-end"
					}`}
					id='navbarTogglerDemo02'
				>
					<ul className='navbar-nav  mt-2 mt-lg-0 '>
						<li className='nav-item active '>
							<Link href='/'>
								<a className='nav-text'>
									Home <span className='sr-only'>(current)</span>
								</a>
							</Link>
						</li>
						<li className='nav-item '>
							<Link href='/praxis'>
								<a className='nav-text '>Praxis</a>
							</Link>
						</li>
						<li className='nav-item '>
							<Link href='/leistungen'>
								<a className='nav-text'>Leistungen</a>
							</Link>
						</li>
						<li className='nav-item '>
							<Link href='/adresse'>
								<a className='nav-text'>Kontakt</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavbarMain;
