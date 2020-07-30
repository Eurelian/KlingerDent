import { FaPhoneAlt, FaAt } from "react-icons/fa";

const AddressContent = () => {
	return (
		<div className='container pt-5'>
			<div className='row m-0 mb-4'>
				{" "}
				<h1 className='title'>Kontakt</h1>
			</div>
			<div className='row'>
				<div className='col-lg-12 '>
					<ul
						className='nav nav-tabs d-flex justify-content-center'
						id='myTab'
						role='tablist'
					>
						<li className='nav-item' role='presentation'>
							<a
								className='nav-link active '
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
								className='nav-link '
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
						<li className='nav-item ' role='presentation'>
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
				</div>
				<div className='col-sm-12 col-lg-6 pt-4 pr-3'>
					<div
						className='tab-content d-flex justify-content-center align-items-center '
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
				<div className='col-sm-12 col-lg-6 pt-4 pl-4'>
					<div className='row'>
						<div className='col-12 d-flex justify-content-lg-start justify-content-center'>
							<h5 className='card-title'>Öffnungszeiten</h5>
						</div>
						<div className='col-lg-8'>
							<table className='table table-borderless table-sm mb-5'>
								<tbody>
									<tr>
										<td className='text-lg-left text-center'>
											Montag - Freitag
										</td>
										<td className='text-lg-left text-center'>
											08:00 - 18:00 Uhr
										</td>
									</tr>
									<tr>
										<td className='text-lg-left text-center'>Samstag</td>
										<td className='text-lg-left text-center'>
											09:00 - 12:30 Uhr
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div className='row'>
						<div className='col-12 d-flex justify-content-lg-start justify-content-center'>
							<h5 className='card-title'>Termine</h5>
						</div>
						<div className='col-sm-12 col-lg-8'>
							<div className='row d-flex justify-content-around mb-5'>
								<div className='d-flex align-items-center'>
									<FaPhoneAlt className='nav-icon' />
									<p className='ml-4'>
										+49 0175 343 88 37 /<br />
										+49 0172 343 32 09
									</p>
								</div>
								<div className='d-flex align-items-center'>
									<FaAt className='nav-icon' />
									<p className='ml-4'>praxis@klinger.com</p>
								</div>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-12 d-flex justify-content-lg-start justify-content-center'>
							<h5 className='card-title'>Wir Sprechen Folgende Sprachen</h5>
						</div>
						<div className='col-lg-8 col-sm-12'>
							<table className='table table-borderless table-sm mb-5'>
								<tbody>
									<tr className='d-flex align-items-center justify-content-lg-start justify-content-center'>
										<td className='d-flex align-items-center'>
											<div className='d-flex align-items-center flag-icon ml-2'>
												<img className='img-fluid' src='/flag_ger.png'></img>
											</div>
										</td>
										<td>
											<div className='flag-icon ml-2'>
												<img className='img-fluid' src='/flag_swiss.png'></img>
											</div>
										</td>
										<td>
											<div className='flag-icon ml-2'>
												<img className='img-fluid' src='/flag_eng.png'></img>
											</div>
										</td>
										<td>
											<div className='d-flex align-items-center flag-icon ml-2'>
												<img className='img-fluid' src='/flag_ro.png'></img>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddressContent;
