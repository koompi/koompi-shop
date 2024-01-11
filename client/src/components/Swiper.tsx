import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";

import { Image } from "@nextui-org/react";
import { Pagination } from "swiper/modules";

type Prop = {
  images: string[];
};

export default function MySwiper({ images }: Prop) {
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
                radius="md"
                className="object-cover overflow-hidden"
                src={`https://ipfs.backend.riverbase.org/api/ipfs?hash=${img}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
