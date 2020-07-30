import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MainContact = () => {
	const [ref, inView, entry] = useInView({
		/* Optional options */
		threshold: 0,
	});
	return (
		<motion.div
			ref={ref}
			animate={{ x: inView ? 0 : -200, opacity: inView ? 1 : 0 }}
			transition={{ ease: "easeOut", duration: 0.7 }}
			className='container pt-5 mb-5'
		>
			<div className='row'>
				<div className='col-lg-6 d-flex align-items-lg-start align-items-center flex-column'>
					<h2 className='section-title mb-5'>Öffnungszeiten</h2>
					<table className='table table-borderless table-sm mb-5 '>
						<tbody>
							<tr>
								<th scope='row' className='text-lg-left text-center'>
									Montag
								</th>
								<td className='text-lg-left text-center'>08:00 - 18:00 Uhr</td>
							</tr>
							<tr>
								<th scope='row' className='text-lg-left text-center'>
									Dienstag
								</th>
								<td className='text-lg-left text-center'>08:00 - 18:00 Uhr</td>
							</tr>
							<tr>
								<th scope='row' className='text-lg-left text-center'>
									Mittwoch
								</th>
								<td className='text-lg-left text-center'>08:00 - 18:00 Uhr</td>
							</tr>
							<tr>
								<th scope='row' className='text-lg-left text-center'>
									Donnerstag
								</th>
								<td className='text-lg-left text-center'>08:00 - 18:00 Uhr</td>
							</tr>
							<tr>
								<th scope='row' className='text-lg-left text-center'>
									Freitag
								</th>
								<td className='text-lg-left text-center'>08:00 - 18:00 Uhr</td>
							</tr>
							<tr>
								<th scope='row' className='text-lg-left text-center'>
									Samstag
								</th>
								<td className='text-lg-left text-center'>08:00 - 12:00 Uhr</td>
							</tr>
							<tr>
								<th scope='row' className='text-lg-left text-center'>
									Sonntag
								</th>
								<td className='text-lg-left text-center'> Rühetag </td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className='col-lg-6 '>
					<ul
						className='nav nav-tabs d-flex justify-content-center'
						id='myTab'
						role='tablist'
					>
						<li className='nav-item' role='presentation'>
							<a
								className='nav-link active'
								id='stetten-tab'
								data-toggle='tab'
								href='#stetten'
								role='tab'
								aria-controls='home'
								aria-selected='true'
							>
								Lörrach - Stetten
							</a>
						</li>
						<li className='nav-item' role='presentation'>
							<a
								className='nav-link'
								id='zentrum-tab'
								data-toggle='tab'
								href='#zentrum'
								role='tab'
								aria-controls='profile'
								aria-selected='false'
							>
								Lörrach - Zentrum
							</a>
						</li>
						<li className='nav-item' role='presentation'>
							<a
								className='nav-link'
								id='schopfheim-tab'
								data-toggle='tab'
								href='#schopfheim'
								role='tab'
								aria-controls='contact'
								aria-selected='false'
							>
								Schopfheim
							</a>
						</li>
					</ul>
					<div
						className='tab-content d-flex justify-content-center align-items-center pt-4'
						id='myTabContent'
					>
						<div
							className='tab-pane fade show active'
							id='stetten'
							role='tabpanel'
							aria-labelledby='home-tab'
						>
							<iframe
								className='map-box'
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.983436305458!2d7.6618814894908205!3d47.60365658467762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x57abe8fb64afbf9d!2sDr.med.dent.%20Harry%20Klinger!5e0!3m2!1sro!2sde!4v1595757901392!5m2!1sro!2sde'
								allowFullScreen
							></iframe>
						</div>

						<div
							className='tab-pane fade'
							id='zentrum'
							role='tabpanel'
							aria-labelledby='profile-tab'
						>
							<iframe
								className='map-box'
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.449000583415!2d7.660556303760369!3d47.61375231225217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x464c0b285a90af97!2sDr.%20Harry%20Klinger%20%26%20Dr.%20Fleischhauer!5e0!3m2!1sro!2sde!4v1595757826853!5m2!1sro!2sde'
								allowFullScreen
							></iframe>
						</div>
						<div
							className='tab-pane fade'
							id='schopfheim'
							role='tabpanel'
							aria-labelledby='contact-tab'
						>
							<iframe
								className='map-box'
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5750.578030978199!2d7.823295110841871!3d47.64731694397918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa95757f84cd123c7!2sDr.med.dent.%20Harry%20Klinger!5e0!3m2!1sro!2sde!4v1595757701858!5m2!1sro!2sde'
								allowFullScreen
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default MainContact;
