import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PraxisText = () => {
	const arr = [...Array(10).keys()];
	const [ref, inView, entry] = useInView({
		/* Optional options */
		threshold: 0,
	});
	return (
		<div className='pt-5 container'>
			<div className='row m-0 mb-3'>
				<h1 className='section-title'>Klinger Praxis</h1>
			</div>
			<div className='row align-items-center mb-5'>
				<div className='col-md-7 mb-4'>
					{" "}
					<p className='section-text'>
						Die Praxis der Klinger Zahnärzte liegt direkt im Herzen von Zürich,
						direkt am Bellevue und dem schönen Zürich-See. Dort bieten wir Ihnen
						allgemeine sowie ästhetische Zahnmedizin mittels modernster,
						schonendster und schmerzfreier Verfahrensweisen – auf höchstem
						Niveau. Modernste Ausstattung in unserer Zahnarztpraxis in Zürich
						ist für uns eine unumgängliche Voraussetzung um eine erfolgreiche
						Behandlung zu ermöglichen. Daher investieren wir laufend in neue
						zahnmedizinische Instrumente. Zu unseren neuesten Anschaffungen
						zählt beispielsweise der 3D-Volumentomograph von Kodak und das
						Cerec-3D Gerät von Sirona, welches wir für die Zahnersatz-Behandlung
						verwenden.
					</p>
				</div>

				<div className='col-md-5 mb-4'>
					<div className='img-background'></div>

					<img
						className='img-fluid rounded hero-img '
						alt='praxis klinger'
						src='/slide_1.jpg'
					></img>
				</div>
			</div>
			<div className='row align-items-center mb-5'>
				<div className='col-md-5 mb-4'>
					<div className='img-background'></div>
					<img
						className='img-fluid rounded hero-img '
						src='/slide_1.jpg'
						alt='praxis klinger'
					></img>
				</div>
				<div className='col-md-7 pl-5'>
					<p className='section-text'>
						{" "}
						Ihre Zahnbehandlung in der Bellevue Zahnklinik erfolgt also
						ausschliesslich mittels modernster Geräte und neuester Ausstattung.
						In der Praxis der Bellevue Zahnärzte werden Sie ausschliesslich von
						gut ausgebildeten Zahnärzten behandelt, die über verschiedenste
						Fachausbildungen und Spezialisierungen verfügen – eine weitere
						Garantie für die bestmögliche Behandlung Ihrer Zähne. Unser
						Ärzteteam wird ergänzt durch diplomierte Dentalhygienikerinnen, die
						sich mit viel Feingefühl und den modernsten Produkten um Ihre
						Zahnhygiene bemühen.
					</p>
				</div>
			</div>
			<div className='row mb-4 pt-4 justify-content-center'>
				<h1 className='section-title'>Das Team</h1>
			</div>
			<motion.div
				ref={ref}
				animate={{ y: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
				transition={{ ease: "easeOut", duration: 0.7 }}
				className='row d-flex justify-content-center m-0 mb-5'
				style={{ width: "100%" }}
			>
				{arr.map((item) => (
					<div key={item} className='col-auto m-0'>
						<div className='text-center' style={{ width: "18rem" }}>
							<div className='avatar-img'>
								<img
									className='img-fluid rounded-circle '
									src='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=698&q=80'
								></img>
							</div>
							<div className='card-body pt-5'>
								<h5 className='card-title'>Harry Klinger</h5>
								<p className='card-text'>
									With supporting text below as a natural lead-in to additional
									content.
								</p>
							</div>
						</div>
					</div>
				))}
			</motion.div>
		</div>
	);
};

export default PraxisText;
