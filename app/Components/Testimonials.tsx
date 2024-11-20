"use client";

import React from "react";
import "../style.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination} from "swiper/modules";

import Image from "next/image";
import user1 from "../../public/images1/user-1.jpg";
import user2 from "../../public/images1/user-2.jpg";
import user3 from "../../public/images1/user-3.jpg";
import user4 from "../../public/images1/user-4.jpg";
import user5 from "../../public/images1/user-5.jpg";

export default function Testimonials() {
  return (
    <section className="Testimonials" id="testimonials">
      <div className="section-heading"><h1>Testimonials</h1></div>

      <div className="testimonial-box">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={3}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            1185: { slidesPerView: 3 },
            700:{slidesPerView: 2},
            200: { slidesPerView: 1 },
          }}
        >
          <SwiperSlide>
            <div className="customer-box">
              <div className="customer-img"><Image src={user1} alt="customer pic" /></div>
              <div className="costomer-feedback"><h1>Sarah Johnson</h1><p><i>"Love the French roast. Perfectly balanced and rich. Will order again!"</i></p></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="customer-box">
              <div className="customer-img"><Image src={user2} alt="customer pic" /></div>
              <div className="costomer-feedback"><h1>James Wilson</h1><p><i>"Great espresso blend! Smooth and bold flavour. Fast shipping too!"</i></p></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="customer-box">
              <div className="customer-img"><Image src={user3} alt="customer pic" /></div>
              <div className="costomer-feedback"><h1>Michael Brown</h1><p><i>"Fantastic mocha flavour. Fresh and aromatic Quick shipping!"</i></p></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="customer-box">
              <div className="customer-img"><Image src={user4} alt="customer pic" /></div>
              <div className="costomer-feedback"><h1>Emily Harris</h1><p><i>"Excellent Quality! Fresh beans and quick delivery. Highly recommend."</i></p></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="customer-box">
              <div className="customer-img"><Image src={user5} alt="customer pic" /></div>
              <div className="costomer-feedback"><h1>Anthony Thompson</h1><p><i>"Best decaf I've tried! Smooth and flavorful Arrived promptly."</i></p></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
