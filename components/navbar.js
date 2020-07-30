import { useEffect, useState } from "react";
import Link from "next/link";
import useScrollPosition from "@react-hook/window-scroll";
import { FaPhone, FaTooth, FaMapMarkerAlt } from "react-icons/fa";

const Navbar = () => {
	const [scroll, setScroll] = useState(true);

	const scrollY = useScrollPosition(60);

	useEffect(() => {
		if (scrollY > 0) {
			setScroll(false);
		} else setScroll(true);
	}, [scrollY]);
	const navClass = "new-nav navbar navbar-expand-lg navbar-light";
	return (
		<nav
			className={scroll ? `${navClass}` : `${navClass} nav-secondary-scroll `}
		>
			<div className='container justify-content-center'>
				<div className='row justify-content-between' style={{ width: "100%" }}>
					<div className=' navbar-center'>
						<Link href='/'>
							<a className='navbar-brand brand-title'>
								<p className='brand-title'>Klinger</p>
								<p className='brand-subtitle'>Zahnarztpraxis</p>
							</a>
						</Link>
					</div>
					<div className='col-sm-auto d-flex justify-content-center align-items-center navbar-center m-0 mt-lg-0 mt-3 '>
						<div className='d-flex align-items-center justify-content-end '>
							<div className=' d-md-flex d-none align-items-center'>
								<FaPhone className='mr-4 nav-icon'></FaPhone>

								<div className='d-flex flex-column'>
									<a href='tel:01753438837' className='link telephone'>
										0175 343 88 37
									</a>

									<a href='tel:01723433209' className='link telephone'>
										0172 343 32 09
									</a>
								</div>
							</div>

							<div className='divider d-md-inline d-none'></div>

							<Link href='/leistungen'>
								<div className='d-flex flex-column justify-content-center align-items-center link'>
									<div>
										<FaTooth className='nav-icon mb-2'></FaTooth>
									</div>
									<a>Leistungen</a>
								</div>
							</Link>

							<div className='divider'></div>

							<Link href='/adresse'>
								<div className='d-flex flex-column justify-content-center align-items-center link'>
									<div>
										<FaMapMarkerAlt className='nav-icon mb-2'></FaMapMarkerAlt>
									</div>
									<a>Adresse</a>
								</div>
							</Link>
						</div>
					</div>
				</div>
				<div className='row d-md-none d-flex mt-3'>
					<div className='d-flex  align-items-center'>
						<div className='d-flex flex-column'>
							<a href='tel:01753438837' className='link telephone'>
								0175 343 88 37
							</a>

							<a href='tel:01723433209' className='link telephone'>
								0172 343 32 09
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
