import { BackButton, MainButton } from "@twa-dev/sdk/react";
import { Button, Image, Spinner } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { CartContext } from "../../context/CartContext";
import { Pagination } from "swiper/modules";
import { ProductType } from "../../types/product";
// import WebApp from "@twa-dev/sdk";
import axios from "axios";
import toast from "react-hot-toast";

export default function ProductDetail() {
	const params = useParams();
	const navigate = useNavigate();
	const [pTitle, setpTitle] = useState<string>("");

	const { addToCart, removeFromCart, cartItems } = useContext(CartContext);

	const [data, setData] = useState<ProductType | null>();

	// useEffect(() => {
	//   WebApp.op
	// })

	let queryData = JSON.stringify({
		query: `query($slug: String!) {
    storeProduct(slug: $slug) {
      brand
      createdAt
      currency
      desc
      detail
      id
      previews
      price
      title
      thumbnail
      slug
      rating
      tags {
        id
        titleEn
        titleKh
        logo
        createdAt
        updatedAt
      }
      variants {
        id
        label
        price
        preview
        option
        available
      }
    }
  }`,
		variables: { slug: params.id },
	});

	let config = {
		method: "post",
		maxBodyLength: Infinity,
		url: "https://backend.riverbase.org/graphql/public?store_id=65a4a66033b9eda51233220c",
		headers: {
			"Content-Type": "application/json",
		},
		data: queryData,
	};

	useEffect(() => {
		axios
			.request(config)
			.then((response) => {
				setData(response.data.data.storeProduct);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	// console.log("data", data);

	if (!data) {
		return (
			<div className="flex flex-col justify-center items-center mt-10">
				<Spinner size="md" />
				<p className="mt-3 text-md text-primary">Loading</p>
			</div>
		);
	}

	const foundItem = cartItems?.find((item) => item.id === data?.id);

	return (
		<div className="relative">
			<div className="min-h-[calc(100dvh-152px)] w-full pb-6">
				<Swiper
					pagination={{
						dynamicBullets: true,
					}}
					modules={[Pagination]}
					// className="scale-110"
				>
					{data?.previews?.map((img, index) => {
						return (
							<SwiperSlide key={index}>
								<div
									className="bg-center bg-cover"
									style={{
										backgroundImage: `url("https://ipfs.backend.riverbase.org/api/ipfs?hash=${img}")`,
									}}
								>
									<Image
										radius="md"
										className="object-contain h-[240px] w-screen backdrop-blur-sm"
										src={`https://ipfs.backend.riverbase.org/api/ipfs?hash=${img}`}
									/>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>

				<h2 className="text-xl font-bold mt-8">{data?.title}</h2>
				<div className=" px-2 py-1 rounded-md text-sm text-primary bg-primary-50 inline-block">
					<div className="flex">
						<svg
							className="h-4"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M13 9H21L11 24V15H4L13 0V9ZM11 11V7.22063L7.53238 13H13V17.3944L17.263 11H11Z"></path>
						</svg>{" "}
						<div>Available in stock</div>
					</div>
				</div>

				<h2 className="text-lg font-semibold mt-8">Description</h2>
				<p className="text-base opacity-50">{data?.desc}</p>
			</div>
			<div className="fixed left-0 bottom-0 w-screen bg-white/80 backdrop-blur-lg p-4 rounded-lg shadow-lg">
				<div className="grid grid-cols-5 justify-between items-center gap-10">
					<div className="col-span-2">
						<small>Price:</small>
						<div className="text-xl font-black ">
							${parseInt(data?.price).toLocaleString()}
						</div>
					</div>

					<div className="flex h-auto gap-4 justify-between items-center col-span-3">
						{foundItem && foundItem.quantity > 0 ? (
							<>
								<Button
									onClick={() =>
										removeFromCart({
											id: data?.id,
											name: data?.title,
											thumbnail: data?.thumbnail,
											price: parseFloat(data?.price),
										})
									}
									size="sm"
									className="w-full"
									radius="full"
									color="primary"
								>
									<svg
										className="h-4"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path d="M5 11V13H19V11H5Z"></path>
									</svg>
								</Button>

								<div>
									{cartItems.find((item) => item.id === data?.id)?.quantity}
								</div>
								<Button
									onClick={() =>
										addToCart({
											id: data?.id,
											thumbnail: data?.thumbnail,
											name: data?.title,
											price: parseFloat(data?.price),
										})
									}
									size="sm"
									className="w-full"
									radius="full"
									color="primary"
								>
									<svg
										className="h-4"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
									</svg>
								</Button>
							</>
						) : (
							<Button
								onClick={() => {
									addToCart({
										id: data?.id,
										thumbnail: data?.thumbnail,
										name: data?.title,
										price: parseFloat(data?.price),
									});

									setpTitle(data.title);
									setTimeout(() => {
										setpTitle("");
									}, 500);
									toast.success("Added to cart");
								}}
								className="w-full"
								radius="full"
								color="primary"
								isLoading={pTitle === data.title}
								isDisabled={pTitle === data.title}
							>
								Add to Cart
							</Button>
						)}
					</div>
				</div>
			</div>
			{foundItem && foundItem.quantity > 0 && (
				<MainButton
					color="#0070f0"
					text="VIEW ORDER"
					onClick={() => {
						// WebApp.showAlert("Pay success");
						navigate("/checkout");
					}}
				/>
			)}
			<BackButton onClick={() => window.history.back()} />
		</div>
	);
}
