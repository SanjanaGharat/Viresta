import { motion } from "framer-motion";
import HeaderDashed from "../components/HeaderDashed";
import mainImg from "../assets/about_img.png";
import SubscriptionForm from "../components/SubscriptionForm";
import DescribedImage from "../components/DescribedImage";

const About = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="about-page text-center py-3 pt-5"
		>
			<div className="container">
				{/* Page header with dashed styling */}
				<HeaderDashed head1="ABOUT" head2="US" classStyle="fw-normal fs-3" />
				
				{/* Main image with descriptive text */}
				<DescribedImage img={mainImg} imgTitle="clothes image" 
				styleInLarge="column-gap-xl-4"
				styleImg="col-xl-5"
				styleText="col-xl-6"
				sideText={					
					<>
					<p>
					Welcome to Viresta, where virtue meets rest—a trustworthy platform designed to make your shopping experience seamless and reliable. Our name symbolizes the core values we stand by: virtue, representing honesty and integrity in every transaction, and rest, ensuring that our customers can shop with confidence and peace of mind.
						<br />
						<br />
						Since our inception, we&rsquo;ve worked tirelessly to curate a diverse
						At Viresta, we are more than just an e-commerce platform. We are committed to providing a secure, user-friendly environment where you can discover quality products from trusted vendors. Whether you're looking for the latest trends or everyday essentials, we strive to offer a curated selection of items that meet your needs while upholding the highest standards of service.
					</p>
					{/* Mission statement */}
					<div className="mission">
						<h4 className="my-3 mt-4 c-white">Our Mission</h4>
						<p className="mb-0">
						Our mission is to build a community of satisfied customers who can rely on Viresta for excellence, convenience, and trust. Shop with us today and experience the difference—where virtue and rest come together to redefine online shopping!







						</p>
					</div>
					</>}/>

				{/* Why Choose Us section */}
				<section className="choose-us mt-6">
					<HeaderDashed head1="WHY" head2="CHOOSE US" />
					<div className="pros mt-4">
						<div className="row row-gap-4">
							{/* Each article represents a benefit */}
							<article className="col-12 col-lg-4">
							<div className="text-start border rounded p-4 h-100">
								<h4 className="fs-6 fw-bold">Quality Assurance:</h4>
								<p className="c-mm-gray mb-0 mt-4">
									We meticulously select and vet each product to ensure it meets
									our stringent quality standards.
								</p>
							</div>
							</article>
							<article className="col-12 col-lg-4">
							<div className="text-start border rounded p-4 h-100">
								<h4 className="fs-6 fw-bold">Convenience:</h4>
								<p className="c-mm-gray mb-0 mt-4">
								We meticulously select and vet each product to ensure it meets
								our stringent quality standards.
								</p>
							</div>
							</article>
							<article className="col-12 col-lg-4">
							<div className="text-start border rounded p-4 h-100">
								<h4 className="fs-6 fw-bold">Exceptional Customer Service:</h4>
								<p className="c-mm-gray mb-0 mt-4">
								Our team of dedicated professionals is here to assist you the
									way, ensuring your satisfaction is our top priority.
								</p>
							</div>
							</article>
						</div>
					</div>
				</section>

				{/* Subscription form for users */}
				<SubscriptionForm />
			</div>
		</motion.div>
	);
};

export default About;
