import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import HeaderDashed from "./HeaderDashed";
import CollectionCard from "./CollectionCard";

const BestSeller = () => {
	const { productsData } = useContext(ShopContext);
	const [bestSeller, setBestSeller] = useState([]);

	useEffect(() => {
		const bestProducts = productsData.filter((product) => product.bestseller);
		setBestSeller(bestProducts.slice(0, 5));
	}, [productsData]);

	return (
		<div className="best-seller py-5">
			<HeaderDashed
				head1="BEST"
				head2="SELLERS"
				paragraph="Explore the most popular picks on Viresta! Our Best Sellers collection features top-rated items loved by our customers. Whether you're shopping for fashion, accessories, or home essentials, these high-demand products combine quality and value.

Shop now to see what’s trending and grab your favorites before they’re gone!"
			/>
			<section>
                <div className="row justify-content-center">
				{bestSeller.map((product) => (
                    <div key={product._id} className="col-6 col-md-4 col-lg-3 col-xl mt-3" style={{maxWidth: '350px'}}>
                        <CollectionCard data={product} classPadding="px-10" />
                    </div>
				))}
                </div>
			</section>
		</div>
	);
};

export default BestSeller;
