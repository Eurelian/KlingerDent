import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MainServices = () => {
	const [ref, inView, entry] = useInView({
		/* Optional options */
		threshold: 0,
	});
	return (
		<div className='container justify-content-center'>
			<motion.div
				ref={ref}
				animate={{ y: inView ? 0 : 200, opacity: inView ? 1 : 0 }}
				transition={{ ease: "easeOut", duration: 0.4 }}
				className='container pt-5'
			>
				<div className='row d-flex justify-content-md-start justify-content-center'>
					<div>
						<h2 className='section-title mb-3'> Beruflich Leistungen</h2>
					</div>
				</div>
				<div className='row mb-5 d-flex justify-content-center'>
					<div className='col-sm-auto'>
						<div className='card-background'></div>
						<div className='card-deck pt-3 pb-2 d-flex flex-sm-row flex-column justify-content-center'>
							<div className='card mb-4'>
								<img
									src='./implant.jpg'
									className='card-img-top'
									alt='zahn implant'
								/>
								<div className='card-img-overlay d-flex justify-content-center'>
									<button type='button' className='btn card-btn mt-3 mb-0'>
										Mehr erfahren
									</button>
								</div>
								<div className='card-body'>
									<h5 className='card-title'>Implantate</h5>
									<p className='card-text'>
										Zahnimplantate sind künstliche Zahnwurzeln, auf denen der
										eigentliche Zahnersatz befestigt wird – sie ermöglichen es
										Ihnen, wieder sorglos lachen, kauen und sprechen zu können!
									</p>
								</div>
							</div>
							<div className='card mb-4'>
								<img
									src='./grafting.jpg'
									className='card-img-top'
									alt='hygiene zahn'
								/>
								<div className='card-img-overlay d-flex justify-content-center'>
									<button type='button' className='btn card-btn mt-3 mb-0'>
										Mehr erfahren
									</button>
								</div>
								<div className='card-body'>
									<h5 className='card-title'>Knochenaufbau</h5>
									<p className='card-text'>
										Zahnimplantate brauchen eine ausreichende Knochensubstanz,
										um fest und sicher im Kiefer zu sitzen. Bei einigen
										Patienten ist dies jedoch wegen eines Knochenrückgangs nicht
										gegeben. Abhilfe schafft hier in vielen Fällen ein
										Knochenaufbau.
									</p>
								</div>
							</div>

							<div className='card mb-4'>
								<img
									src='./hygiene.jpg'
									className='card-img-top'
									alt='hygiene zahn'
								/>
								<div className='card-img-overlay d-flex justify-content-center'>
									<button type='button' className='btn card-btn mt-3 mb-0'>
										Mehr erfahren
									</button>
								</div>
								<div className='card-body border-0'>
									<h5 className='card-title'>Parodontologie</h5>
									<p className='card-text'>
										Die Parodontitis ist eine durch bakterielle Beläge
										verursachte Entzündung des Zahnbettes und bei Erwachsenen
										heute die Hauptursache für Zahnverlust! Darüber hinaus kann
										die Parodontitis die Allgemeingesundheit beeinträchtigen.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default MainServices;
