import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Corusel.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <div className="container-carusel">
        <div className="swiper-left">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheadphones-gift.40a8eb73.png&w=828&q=75"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
            <img
                src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fz-flip6.f5aeb2c8.jpg&w=828&q=75"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
            <img
                src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwatch-fit.3099557b.png&w=828&q=75"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
            <img
                src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsummer_gifts.4815578d.png&w=828&q=75"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
            <img
                src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheadphones-gift.40a8eb73.png&w=828&q=75"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
            <img
                src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclimate.3c434809.png&w=828&q=75"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide><img
                src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpanas.85e6ed37.png&w=828&q=75"
                alt=""
              /></SwiperSlide>
            <SwiperSlide>
            <img
                src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbeko.f062affb.png&w=828&q=75"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
            <img
                src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhaier.498a37cb.png&w=828&q=75"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="swiper-right">
          <div className="box">
            <img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fair-from.d85b02d4.jpg&w=384&q=75" alt="" />
          </div>
          <div className="box">
            <img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frefrigerator-mini-oven.915963e6.png&w=384&q=75" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
