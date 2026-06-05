"use client";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const requirements = [
  {
    title: "Elite College Waiver",
    cat: "IIT/IISc/NIT Students",
    doc: "College ID Card/Latest marksheet/Degree certificate (any 2)",
  },
  {
    title: "GATE Qualifiers",
    cat: "GATE Rank up to 3000 in any of the past 2 GATE exam years",
    doc: "GATE Score Card",
  },
];

export default function Scholar() {
  return (
    <>
      <div>
        <Swiper
          slidesPerView={1}
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
        >
          <SwiperSlide>
            <div>
              <h1 className="bg-black text-white text-center py-2">
                {requirements[0].title}
              </h1>

              <div className="text-center border pb-2">
                <h1 className="text-3xl text-red-600 mt-5">30%</h1>

                <p className="mt-3 text-gray-400">{requirements[0].cat}</p>

                <p className="mt-2 font-medium">Documents Required</p>

                <p className="text-gray-400 mx-10">{requirements[0].doc}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h1 className="bg-black text-white text-center py-2">
                {requirements[1].title}
              </h1>

              <div className="text-center border pb-2">
                <h1 className="text-3xl text-red-600 mt-5">30%</h1>

                <p className="mt-3 text-gray-400">{requirements[1].cat}</p>

                <p className="mt-2 font-medium">Documents Required</p>

                <p className="text-gray-400 mx-10">{requirements[1].doc}</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
