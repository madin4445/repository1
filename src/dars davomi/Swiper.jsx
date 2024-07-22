import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Swiper.css";

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
                src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpopular-brand-1.7d0e760d.png&w=256&q=75"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
            <img
                src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpopular-brand-2.da638971.png&w=256&q=75"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
            <img
                src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpopular-brand-3.1.7e56cb14.png&w=256&q=75"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
            <img
                src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpopular-brand-4.6b225624.png&w=256&q=75"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
            <img
                src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpopular-brand-5.6370db44.png&w=256&q=75"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
            <img
                src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpopular-brand-6.230d8c1e.png&w=256&q=75"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide><img
                src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpopular-brand-7.1.e1cf4ffd.png&w=256&q=75"
                alt=""
              /></SwiperSlide>
            <SwiperSlide>
            <img
                src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpopular-brand-8.1.f5839910.png&w=256&q=75"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
            <img
                src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpopular-brand-18.cc44aa25.png&w=256&q=75"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="swiper-right">
          <div className="box">
            <img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpopular-brand-23.ffff3ff7.png&w=256&q=75" alt="" />
          </div>
          <div className="box">
            <img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpopular-brand-20.916b7f40.png&w=256&q=75" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
