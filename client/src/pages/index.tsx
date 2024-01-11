import { useEffect, useState } from "react";

import ItemCard from "../components/ItemCard";
import { ProductType } from "../types/product";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const data = JSON.stringify({
  query: `query($filter: OrderBy) {
  storeProducts(filter: $filter) {
    id
    title
    price
    thumbnail
    previews
    slug
    desc
  }
}`,
  variables: {},
});

const config = {
  method: "post",
  maxBodyLength: Infinity,
  url: "https://backend.riverbase.org/graphql/public?store_id=65977008063b32aaf14813c2",
  headers: {
    "Content-Type": "application/json",
  },
  data: data,
};

export default function Index() {
  const [data, setData] = useState<ProductType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .request(config)
      .then((response) => {
        setData(response.data.data.storeProducts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("data", data);

  return (
    <>
      {/* <MySwiper  /> */}
      <h2 className="mb-3 font-bold text-xl mt-4">Our Products</h2>
      <div className="grid grid-cols-2 gap-2">
        {data.map((item) => (
          <div onClick={() => navigate(`/product/${item.slug}`)} key={item.id}>
            <ItemCard
              id={item.id}
              title={item.title}
              price={item.price}
              thumbnail={`https://ipfs.backend.riverbase.org/api/ipfs?hash=${item.thumbnail}`}
              previews={item.previews}
              desc={item.desc}
            />
          </div>
        ))}
      </div>
    </>
  );
}
