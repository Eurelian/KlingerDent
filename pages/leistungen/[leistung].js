import Layout from "../../components/layout";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Adresse = () => {
	const router = useRouter();
	const { leistung } = router.query;
	return (
		<Layout>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				exit={{ opacity: 0, y: 20 }}
				className='container pt-5'
			>
				<div className='row m-0 mb-3'>
					{" "}
					<h1 className='title'>Knochenaufbau</h1>
				</div>
				<div className='row align-items-center mb-5'>
					<div className='col-md-7 mb-4'>
						{" "}
						<p className='section-text'>
							Die Praxis der Klinger Zahnärzte liegt direkt im Herzen von
							Zürich, direkt am Bellevue und dem schönen Zürich-See. Dort bieten
							wir Ihnen allgemeine sowie ästhetische Zahnmedizin mittels
							modernster, schonendster und schmerzfreier Verfahrensweisen – auf
							höchstem Niveau. Modernste Ausstattung in unserer Zahnarztpraxis
							in Zürich ist für uns eine unumgängliche Voraussetzung um eine
							erfolgreiche Behandlung zu ermöglichen. Daher investieren wir
							laufend in neue zahnmedizinische Instrumente. Zu unseren neuesten
							Anschaffungen zählt beispielsweise der 3D-Volumentomograph von
							Kodak und das Cerec-3D Gerät von Sirona, welches wir für die
							Zahnersatz-Behandlung verwenden.
						</p>
					</div>

					<div className='col-md-5 mb-4'>
						<div className='img-background'></div>

						<img
							className='img-fluid rounded hero-img '
							alt='praxis klinger'
							src='/grafting.jpg'
						></img>
					</div>
				</div>
				<div className='row align-items-center mb-5'>
					<div className='col-md-5 mb-4'>
						<div className='img-background'></div>
						<img
							className='img-fluid rounded hero-img '
							src='/hygiene.jpg'
							alt='praxis klinger'
						></img>
					</div>
					<div className='col-md-7 pl-5 mb-4'>
						<p className='section-text '>
							{" "}
							Ihre Zahnbehandlung in der Bellevue Zahnklinik erfolgt also
							ausschliesslich mittels modernster Geräte und neuester
							Ausstattung. In der Praxis der Bellevue Zahnärzte werden Sie
							ausschliesslich von gut ausgebildeten Zahnärzten behandelt, die
							über verschiedenste Fachausbildungen und Spezialisierungen
							verfügen – eine weitere Garantie für die bestmögliche Behandlung
							Ihrer Zähne. Unser Ärzteteam wird ergänzt durch diplomierte
							Dentalhygienikerinnen, die sich mit viel Feingefühl und den
							modernsten Produkten um Ihre Zahnhygiene bemühen.
						</p>
					</div>
				</div>
			</motion.div>
		</Layout>
	);
};

export default Adresse;
