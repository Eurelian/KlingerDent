import Layout from "../components/layout";
import LeistungenData from "../components/leistungen";
import { motion } from "framer-motion";

const Leistungen = () => {
	return (
		<Layout>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				exit={{ opacity: 0, y: 20 }}
			>
				<LeistungenData></LeistungenData>
			</motion.div>
		</Layout>
	);
};

export default Leistungen;
