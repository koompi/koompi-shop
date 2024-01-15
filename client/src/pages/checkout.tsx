import { BackButton, MainButton } from "@twa-dev/sdk/react";

import { CartContext } from "../context/CartContext";
import WebApp from "@twa-dev/sdk";
import { useContext } from "react";

export default function Checkout() {
	const { cartItems, addToCart, removeFromCart, getCartTotal } =
		useContext(CartContext);

	// useEffect(() => {
	// 	window.addEventListener("beforeunload", () =>
	// 		WebApp.showConfirm("Are you sure?")
	// 	);
	// });

	return (
		<>
			<h1 className="text-lg font-bold my-4">My Cart</h1>
			<div className="flex flex-col gap-2">
				{cartItems.map((item) => (
					<div
						key={item.id}
						className="flex gap-4 bg-white p-2 rounded-md shadow-sm w-full"
					>
						<img
							src={item.thumbnail}
							alt={item.name}
							className="rounded-md w-16 h-16"
						/>
						<div className="flex-grow flex gap-1 justify-center flex-col">
							<h1 className="text-md font-bold">{item.name}</h1>
							<div className="flex gap-2 justify-between">
								<p className="text-gray-600 font-bold">
									${item.price.toLocaleString()}
								</p>
								<div className="flex gap-4">
									<button
										className="bg-slate-200 h-6 w-6 rounded-full"
										onClick={() => {
											const cartItem = cartItems.find(
												(product) => product.id === item.id
											);
											if (cartItem?.quantity === 1) {
												removeFromCart(item);
											} else {
												removeFromCart(item);
											}
										}}
									>
										-
									</button>
									<p>{item.quantity}</p>

									<button
										className="bg-slate-200 h-6 w-6 rounded-full"
										onClick={() => {
											addToCart(item);
										}}
									>
										+
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="bg-white  rounded-md shadow-sm p-3 mt-8">
				{cartItems.length > 0 ? (
					<div className="flex flex-col justify-between ">
						<div className="text-md flex justify-between gap-2">
							<div className="opacity-50">Subtotal:</div>
							<div>
								<b>${getCartTotal().toLocaleString()}</b>
							</div>
						</div>
						<div className="text-md flex justify-between gap-2">
							<div className="opacity-50">Discount:</div>
							<div>
								<b>10%</b>
							</div>
						</div>

						<div className="border my-4 opacity-60 rounded-full"></div>

						<div className="text-md flex justify-between gap-2">
							<div className="opacity-50">Total:</div>
							<div>
								<b>${(getCartTotal() * 0.9).toLocaleString()}</b>
							</div>
						</div>
					</div>
				) : (
					<h1 className="text-lg font-bold">Your cart is empty</h1>
				)}
			</div>

			{cartItems.length > 0 && (
				<MainButton
					color="#0070f0"
					text={`Pay  $${getCartTotal() * 0.9}`}
					onClick={() => {
						WebApp.showAlert("Pay success");
						// WebApp.showConfirm("Are you sure?");
					}}
				/>
			)}
			<BackButton onClick={() => window.location.replace("/")} />
		</>
	);
}
