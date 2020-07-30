import Navbar from "./navbar";
import NavbarMain from "./navbar_main";
import Footer from "./footer";
import Head from "next/head";

const Layout = (props) => {
	return (
		<div>
			{/* HEAD */}
			<Head>
				<title>Klinger Clinic</title>
				<meta name='description' content='Web site created using Next.js' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />

				<meta
					name='viewport'
					content='user-scalable=no, width=device-width, initial-scale=1.0'
				/>
				<meta name='apple-mobile-web-app-capable' content='yes' />

				<link
					rel='stylesheet'
					href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'
					integrity='sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk'
					crossOrigin='anonymous'
				></link>

				<link
					href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap'
					rel='stylesheet'
				></link>

				{/* BOOTSTRAP */}
				<script
					src='https://code.jquery.com/jquery-3.5.1.slim.min.js'
					integrity='sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj'
					crossorigin='anonymous'
				></script>
				<script
					src='https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js'
					integrity='sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo'
					crossorigin='anonymous'
				></script>
				<script
					src='https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js'
					integrity='sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI'
					crossorigin='anonymous'
				></script>
			</Head>

			{/* BODY */}
			<NavbarMain></NavbarMain>
			<Navbar></Navbar>
			{props.children}
			<Footer></Footer>
		</div>
	);
};

export default Layout;
