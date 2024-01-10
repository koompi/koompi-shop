import MySwiper from "./Swiper";
import { ProductType } from "../types/product";

export default function ItemCard({
  title,
  image,
  price,
  previews,
}: ProductType) {
  return (
    <div className="bg-white border rounded-md">
      {previews.length > 0 ? (
        <MySwiper images={previews} />
      ) : (
        <img
          className="w-full object-cover rounded-t-lg"
          src={image}
          alt={title}
        />
      )}

      <div className="p-2">
        <h3 className="text-xs font-normal line-clamp-1">{title}</h3>
        <div className="font-bold text-sm text-primary mt-1">${price}</div>
      </div>
    </div>
  );
}
