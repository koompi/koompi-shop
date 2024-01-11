import MySwiper from "./Swiper";
import { ProductType } from "../types/product";

export default function ItemCard({
  title,
  thumbnail,
  price,
  previews,
  desc,
}: ProductType) {
  return (
    <div className="flex bg-white rounded-lg overflow-hidden relative p-2 ">
      <div className="w-[120px]">
        {previews.length > 0 ? (
          <MySwiper images={previews} />
        ) : (
          <img
            className="w-[120px] object-cover rounded-t-lg rounded-r-lg rounded-l-lg"
            src={thumbnail}
            alt={title}
          />
        )}
      </div>

      {/* <img
        className="w-[120px] object-cover rounded-t-lg rounded-r-lg rounded-l-lg"
        src={thumbnail}
        alt={title}
      /> */}

      <div className="p-2">
        <h3 className="text-sm font-semibold line-clamp-2">{title}</h3>
        <p className="line-clamp-2 text-sm mt-3 opacity-50">{desc}</p>
        <div className="flex justify-between mt-3">
          <div className="font-bold text-base text-primary ">
            ${parseInt(price).toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
}
