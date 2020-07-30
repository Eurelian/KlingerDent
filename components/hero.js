import { motion } from "framer-motion";
import Link from "next/link";
import { FaSmileBeam } from "react-icons/fa";

const Hero = () => {
	return (
		<div className='jumbotron'>
			<div className='container justify-content-center'>
				<div className='row align-items-center justify-content-between '>
					<motion.div
						initial={{ x: -50 }}
						animate={{ x: 0 }}
						transition={{ duration: 0.5 }}
						className='col-lg-4 pb-4 hero-align-center'
					>
						<FaSmileBeam className=' hero-icon mb-4 ml-2'></FaSmileBeam>
						<h1 className='hero-title mb-5'>
							Herzlich willkommen in unserer Praxis
						</h1>
						<Link href='/praxis'>
							<button type='button' className='btn hero-btn mt-3'>
								Unser Team
							</button>
						</Link>
					</motion.div>
					<motion.div
						initial={{ x: 50 }}
						animate={{ x: 0 }}
						transition={{ duration: 0.5 }}
						className='col-lg '
					>
						<div className='img-background'></div>
						<img
							className='rounded img-fluid hero-img  '
							alt='hero img'
							src='https://image.freepik.com/free-photo/female-patient-smiling-clinic_107420-65294.jpg'
						></img>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
