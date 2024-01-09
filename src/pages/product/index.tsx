import { MainButton } from "@twa-dev/sdk/react";
import WebApp from "@twa-dev/sdk";

export default function SinglePage() {
  return (
    <div className="p-3">
      <h3 className="text-xl font-bold p-3">Your Order</h3>
      <MainButton
        text="Add to cart"
        onClick={() => {
          WebApp.showAlert("Cart Added");
        }}
      />
    </div>
  );
}
