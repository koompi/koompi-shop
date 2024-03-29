import { Badge } from "@nextui-org/react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

// Navbar Components
export default function Navbar() {
	const { cartItems } = useContext(CartContext);
	return (
		<div className="max-w-md mx-auto fixed top-0 left-0 w-screen z-10 bg-default-50/90 backdrop-blur-md px-3 border border-b flex items-center justify-between py-3">
			<Link to="/">
				<h2 className="font-bold text-lg">Riverbase</h2>
			</Link>

			<div className="flex">
				{/* <a
                  href="#"
                  className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 mx-auto"
                  >
                    <path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z"></path>
                  </svg>
                </a> */}

				<Link
					to="/checkout"
					className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500"
				>
					<Badge content={cartItems.length} color="primary">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-6 mx-auto"
						>
							<path d="M12.0049 2C15.3186 2 18.0049 4.68629 18.0049 8V9H22.0049V11H20.8379L20.0813 20.083C20.0381 20.6013 19.6048 21 19.0847 21H4.92502C4.40493 21 3.97166 20.6013 3.92847 20.083L3.17088 11H2.00488V9H6.00488V8C6.00488 4.68629 8.69117 2 12.0049 2ZM18.8309 11H5.17788L5.84488 19H18.1639L18.8309 11ZM13.0049 13V17H11.0049V13H13.0049ZM9.00488 13V17H7.00488V13H9.00488ZM17.0049 13V17H15.0049V13H17.0049ZM12.0049 4C9.86269 4 8.1138 5.68397 8.00978 7.80036L8.00488 8V9H16.0049V8C16.0049 5.8578 14.3209 4.10892 12.2045 4.0049L12.0049 4Z"></path>
						</svg>
					</Badge>
				</Link>
			</div>
		</div>
	);
}
