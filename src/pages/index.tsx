import ProductCard from "../components/Card";

const products = [
  {
    title: "KOOMPI Ministation",
    sold: 230,
    price: 369,
    image: "https://koompi.com/images/ministation.png",
    link: "/koompi/ministation",
  },
  {
    title: "KOOMPI Mini",
    sold: 120,
    price: 300,
    image: "https://koompi.com/images/contentserver.jpg",
    link: "/koompi/mini",
  },
  {
    title: "KOOMPI Monitor",
    sold: 130,
    price: 150,
    image: "https://koompi.com/images/monitor.png",
    link: "/koompi/monitor",
  },
];

export default function Index() {
  return (
    <>
      <h2 className="py-5 font-black text-2xl text-center">Our Products</h2>
      <div className="flex flex-col gap-3">
        {products.map((p) => {
          return (
            <ProductCard
              title={p.title}
              sold={p.sold}
              price={p.price}
              image={p.image}
              link={p.link}
            />
          );
        })}
      </div>
    </>
  );
}
