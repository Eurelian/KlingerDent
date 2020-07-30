import Layout from "../components/layout";
import AddressContent from "../components/address";
import { motion } from "framer-motion";

const Adresse = () => {
	return (
		<Layout>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				exit={{ opacity: 0, y: 20 }}
			>
				<AddressContent></AddressContent>
			</motion.div>
		</Layout>
	);
};

export default Adresse;
