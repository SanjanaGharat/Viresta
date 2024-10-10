import { motion } from "framer-motion";
import SubscriptionForm from "../components/SubscriptionForm";
import HeaderDashed from "../components/HeaderDashed";

const Contact = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="contact-page text-center py-3 pt-5"
		>
			<div className="container">
				{/* Header with dashed style */}
				<HeaderDashed head1="CONTACT" head2="US" classStyle="fw-normal fs-3" />
				
				{/* Centered Contact Information with Margins and Hover Effect */}
				<div className="p-4 contact-info d-flex flex-column align-items-center justify-content-center">
					<div className="our-store text-center p-4 my-5 border rounded-l shadow-sm contact-box">
						<h3 className=" mb-4">Our Store</h3>
						<address className="my-4">
							<span>Viresta Store</span>
							<br />
							<span>Mumbai, Maharashtra</span>
						</address>
						<div className="telephone my-3">
							Tel: 123-354-4892
							<br />
							Email: <a href="mailto:admin@viresta.com">admin@viresta.com</a>
						</div>
					</div>
				</div>

				
			</div>
		</motion.div>
	);
};

export default Contact;
