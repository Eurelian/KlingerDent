import Layout from "../components/layout";
import PraxisText from "../components/praxisText";
import { motion } from "framer-motion";

const Praxis = () => {
	return (
		<Layout>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				exit={{ opacity: 0, y: 20 }}
				className='container'
			>
				<PraxisText></PraxisText>
			</motion.div>
		</Layout>
	);
};

export default Praxis;
