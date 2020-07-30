import Layout from "../components/layout";
import Hero from "../components/hero";
import Main from "../components/main";
import { motion } from "framer-motion";

const Index = () => {
	return (
		<Layout>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				exit={{ opacity: 0 }}
			>
				<Hero></Hero>
				<div className='container pt-5'>
					<Main></Main>
				</div>
			</motion.div>
		</Layout>
	);
};

export default Index;
