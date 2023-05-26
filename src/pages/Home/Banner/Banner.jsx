import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="banner-con banner-bg-1 d-flex align-items-center">
            <div className="container">
              <div className=" row text-center">
                <div className="col-lg-4 col-md-10 ms-lg-auto banner-box">
                  <div className="banner-box-wrap">
                    <h2>Hard Chocolate Mix Coffee</h2>
                    <div className="short-separator my-3"></div>
                    <div className="d-flex justify-content-center align-items-center">
                      <Rating style={{ maxWidth: 100 }} value={4.5} readOnly />
                      <span className="m-1"> 4.5</span>
                    </div>
                    <p className="pt-2">
                      Ut enim ad minim veniam, quis nostrud exercitation ut
                      aliquip ex ea commodo corure dolor in amar sonar Bangla
                      ami tomay velit esse cillum dolore.
                    </p>
                    <div className=" pt-3">
                      <button type="submit">Learn More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-con banner-bg-2 d-flex align-items-center">
            <div className="container">
              <div className=" row text-center">
                <div className="col-lg-4 col-md-10 ms-lg-auto  banner-box">
                  <div className="banner-box-wrap">
                    <h2>Dealing With a Diet Plan</h2>
                    <div className="short-separator my-3"></div>
                    <div className="d-flex justify-content-center align-items-center">
                      <Rating style={{ maxWidth: 100 }} value={4.5} readOnly />
                      <span className="m-1"> 4.2</span>
                    </div>
                    <p className="pt-2">
                      Ut enim ad minim veniam, quis nostrud exercitation ut
                      aliquip ex ea commodo corure dolor in amar sonar Bangla
                      ami tomay velit esse cillum dolore.
                    </p>
                    <div className=" pt-3">
                      <button type="submit">Learn More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-con banner-bg-3 d-flex align-items-center">
            <div className="container">
              <div className=" row text-center">
                <div className="col-lg-4 col-md-10 ms-lg-auto  banner-box">
                  <div className="banner-box-wrap">
                    <h2>Chocolate Covered Cherry Cake</h2>
                    <div className="short-separator my-3"></div>
                    <div className="d-flex justify-content-center align-items-center">
                      <Rating style={{ maxWidth: 100 }} value={4.5} readOnly />
                      <span className="m-1"> 4.8</span>
                    </div>
                    <p className="pt-2">
                      Ut enim ad minim veniam, quis nostrud exercitation ut
                      aliquip ex ea commodo corure dolor in amar sonar Bangla
                      ami tomay velit esse cillum dolore.
                    </p>
                    <div className=" pt-3">
                      <button type="submit">Learn More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
