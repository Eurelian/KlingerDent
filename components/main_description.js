import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MainDescription = () => {
	const [ref, inView, entry] = useInView({
		/* Optional options */
		threshold: 0,
	});
	return (
		<div className='container'>
			<motion.div
				ref={ref}
				animate={{ y: inView ? 0 : 150, opacity: inView ? 1 : 0 }}
				transition={{ ease: "easeOut", duration: 0.7 }}
				className='row mb-5'
			>
				<div className='col-lg-6 order-lg-1 order-12'>
					<div className='img-background'></div>
					<div
						id='carouselExampleIndicators'
						className='carousel slide'
						data-ride='carousel'
					>
						<ol className='carousel-indicators'>
							<li
								data-target='#carouselExampleIndicators'
								data-slide-to='0'
								className='active'
							></li>
							<li
								data-target='#carouselExampleIndicators'
								data-slide-to='1'
							></li>
							<li
								data-target='#carouselExampleIndicators'
								data-slide-to='2'
							></li>
						</ol>
						<div className='carousel-inner hero-img'>
							<div className='carousel-item active'>
								<img
									className='d-block w-100 rounded '
									src='/slide_1.jpg'
									alt='first praxis'
								/>
							</div>
							<div className='carousel-item'>
								<img
									className='d-block w-100 rounded '
									src='/slide_2.jpg'
									alt='Second praxis'
								/>
							</div>
							<div className='carousel-item'>
								<img
									className='d-block w-100 rounded '
									src='/slide_3.jpg'
									alt='Third praxis'
								/>
							</div>
						</div>
						<a
							className='carousel-control-prev'
							href='#carouselExampleIndicators'
							role='button'
							data-slide='prev'
						>
							<span
								className='carousel-control-prev-icon'
								aria-hidden='true'
							></span>
							<span className='sr-only'>Previous</span>
						</a>
						<a
							className='carousel-control-next'
							href='#carouselExampleIndicators'
							role='button'
							data-slide='next'
						>
							<span
								className='carousel-control-next-icon'
								aria-hidden='true'
							></span>
							<span className='sr-only'>Next</span>
						</a>
					</div>
				</div>

				<div className='col-lg-6 order-1 mb-5 pl-lg-5 align-self-center '>
					<div>
						<h2 className='section-title mb-3 d-flex justify-content-lg-start justify-content-center'>
							Unserer Praxis
						</h2>
						<p className='section-text text-lg-left text-center'>
							Mit unserer Website möchten wir Ihnen einen Einblick in unsere
							Praxis für Oralchirurgie in Schopfheim und Lörrach geben und Sie
							über Behandlungsmethoden der modernen Zahnmedizin informieren. Wir
							freuen uns über Ihr Vertrauen und geben dafür unser Bestes
						</p>
						<div className='d-flex justify-content-lg-start justify-content-center'>
							<button type='button' className='btn hero-btn mt-5 mb-0  '>
								Mehr erfahren
							</button>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default MainDescription;
