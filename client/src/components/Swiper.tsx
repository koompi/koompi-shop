import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";

import { Image } from "@nextui-org/react";
import { Pagination } from "swiper/modules";

type Prop = {
  images: string[];
};

export default function MySwiper({ images }: Prop) {
  console.log("images", images);

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
      >
        {images.map((img) => {
          return (
            <SwiperSlide>
              <Image
                radius="none"
                className="w-screen h-[180px] object-cover"
                src={`https://ipfs.backend.riverbase.org/api/ipfs?hash=${img}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
