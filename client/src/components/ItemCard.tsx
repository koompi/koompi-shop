import MySwiper from "./Swiper";
import { ProductType } from "../types/product";

export default function ItemCard({
  title,
  thumbnail,
  price,
  previews,
}: ProductType) {
  return (
    <div className="bg-white rounded-lg overflow-hidden relative p-2 ">
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
    </div>
  );
}
