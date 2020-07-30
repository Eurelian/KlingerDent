import Link from "next/link";

const LeistungenData = () => {
	return (
		<div className='container pt-5 pb-5'>
			<div className='row mb-5'>
				<div className='col-sm-12'>
					<h1 className='page-title'>Leistungen</h1>
				</div>
			</div>

			<div className='row row-cols-1 row-cols-md-3 '>
				<div className='col-sm-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center'>
					<Link href='/leistungen/knochenaufbau'>
						<div className='card h-100'>
							<img src='/grafting.jpg' className='card-img-top' alt='...' />
							<div className='card-body'>
								<h5 className='card-title'>Knochenaufbau</h5>
								<p className='card-text'>
									This is a longer card with supporting text below as a natural
									lead-in to additional content. This content is a little bit
									longer.
								</p>
							</div>
						</div>
					</Link>
				</div>

				<div className='col-sm-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center'>
					<div className='card h-100'>
						<img src='/implant.jpg' className='card-img-top' alt='...' />
						<div className='card-body'>
							<h5 className='card-title'>Card title</h5>
							<p className='card-text'>This is a short card.</p>
						</div>
					</div>
				</div>
				<div className='col-sm-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center'>
					<div className='card h-100'>
						<img src='/hygiene.jpg' className='card-img-top' alt='...' />
						<div className='card-body'>
							<h5 className='card-title'>Card title</h5>
							<p className='card-text'>
								This is a longer card with supporting text below as a natural
								lead-in to additional content.
							</p>
						</div>
					</div>
				</div>
				<div className='col-sm-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center'>
					<div className='card h-100'>
						<img src='/grafting.jpg' className='card-img-top' alt='...' />
						<div className='card-body'>
							<h5 className='card-title'>Card title</h5>
							<p className='card-text'>
								This is a longer card with supporting text below as a natural
								lead-in to additional content. This content is a little bit
								longer.
							</p>
						</div>
					</div>
				</div>
				<div className='col-sm-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center'>
					<div className='card h-100'>
						<img src='/grafting.jpg' className='card-img-top' alt='...' />
						<div className='card-body'>
							<h5 className='card-title'>Card title</h5>
							<p className='card-text'>
								This is a longer card with supporting text below as a natural
								lead-in to additional content. This content is a little bit
								longer.
							</p>
						</div>
					</div>
				</div>
				<div className='col-sm-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center'>
					<div className='card h-100'>
						<img src='/grafting.jpg' className='card-img-top' alt='...' />
						<div className='card-body'>
							<h5 className='card-title'>Card title</h5>
							<p className='card-text'>
								This is a longer card with supporting text below as a natural
								lead-in to additional content. This content is a little bit
								longer.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LeistungenData;
