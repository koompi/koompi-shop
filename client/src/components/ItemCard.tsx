import { useContext, useState } from "react";

import { Button } from "@nextui-org/react";
import { CartContext } from "../context/CartContext";
import MySwiper from "./Swiper";
import { ProductType } from "../types/product";
import toast from "react-hot-toast";

export default function ItemCard({
	id,
	title,
	thumbnail,
	price,
	previews,
}: ProductType) {
	const { addToCart } = useContext(CartContext);
	const [pTitle, setpTitle] = useState<string>("");

	return (
		<div className="bg-white rounded-lg overflow-hidden relative p-2 h-full">
			{previews.length > 0 ? (
				<MySwiper images={previews} />
			) : (
				<img
					className="w-full object-cover rounded-t-lg rounded-r-lg rounded-l-lg"
					src={thumbnail}
					alt={title}
				/>
			)}

			<div className="p-2">
				<h3 className="text-sm font-semibold line-clamp-2">{title}</h3>
				<div className="font-bold text-sm text-primary mt-1">
					${parseInt(price).toLocaleString()}
				</div>
			</div>

			<Button
				onClick={async (e) => {
					e.stopPropagation();
					addToCart({
						id,
						thumbnail: thumbnail,
						name: title,
						price: parseFloat(price),
					});
					setpTitle(title);
					setTimeout(() => {
						setpTitle("");
					}, 500);
					await toast.success("Added to cart");
				}}
				size="sm"
				className="w-full"
				radius="full"
				color="primary"
				isLoading={pTitle === title}
				isDisabled={pTitle === title}
			>
				Add to Cart
			</Button>
		</div>
	);
}
