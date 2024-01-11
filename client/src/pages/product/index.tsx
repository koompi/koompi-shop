// import { MainButton } from "@twa-dev/sdk/react";
// import WebApp from "@twa-dev/sdk";

import { Button, Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";

import MySwiper from "../../components/Swiper";
import { ProductType } from "../../types/product";
import axios from "axios";

let data = JSON.stringify({
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
  variables: { slug: "evolis-badgy-200-card-printer_KAF6T" },
});

let config = {
  method: "post",
  maxBodyLength: Infinity,
  url: "https://backend.riverbase.org/graphql/public?store_id=65977008063b32aaf14813c2",
  headers: {
    "Content-Type": "application/json",
  },
  data: data,
};

export default function ProductDetail() {
  const [data, setData] = useState<ProductType | null>();

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

  return (
    <>
      <div className="h-30 relative">
        <MySwiper images={data.previews} />

        <h2 className="text-xl font-bold mt-8">{data.title}</h2>
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
        <p className="text-base opacity-50 mb-32">{data.desc}</p>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-lg p-3 pb-14">
        <div className="grid grid-cols-3 justify-between items-center gap-10">
          <div className="text-2xl font-black col-span-1">
            ${parseInt(data.price).toLocaleString()}
          </div>

          <Button className="w-full col-span-2" radius="full" color="primary">
            Add to cart
          </Button>
        </div>
      </div>
    </>
  );
}
