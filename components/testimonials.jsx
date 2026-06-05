"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Quote } from "lucide-react";
import Image from "next/image";

import "swiper/css";

// Import images from assets folder
import revathiImg from "@/assets/images/gate-test.png";
import vijayImg from "@/assets/images/gate-test-3.png";
import arijeetImg from "@/assets/images/gate-test-2.png";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Revathi Nambiar",
      image: revathiImg,
      comment:
        "Had a wonderful experience with Nuero Cademy for my gate coaching. The staffs were really helpful and the materials provided helped me in solving related problems.",
    },
    {
      name: "Vijay K",
      image: vijayImg,
      comment:
        "Joining this institute was a game-changer for my preparation. The faculty-to-student interaction is excellent, and the emphasis on clearing core fundamentals rather than memorization really helps with tough engineering problems. The regular chapter-wise tests and exhaustive mock test series boosted my confidence significantly.",
    },
    {
      name: "Arijeet Tripati",
      image: arijeetImg,
      comment:
        "Highly recommended for serious GATE aspirants. The mentors don't just focus on the written exam; they also provide excellent post-GATE guidance for higher education opportunities and PSU interviews. The interactive classroom sessions and regular evaluation metrics kept me on track throughout my preparation journey.",
    },
  ];

  return (
    <section className="w-full px-4 py-8">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="w-full max-w-md mx-auto"
      >
        {testimonials.map((test, index) => (
          <SwiperSlide key={index}>
            <div className="w-full min-h-[220px] rounded-xl border border-gray-200 bg-blue-100 p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={test.image}
                    alt={test.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                  <h3 className="text-lg font-semibold">{test.name}</h3>
                </div>

                <Quote size={35} color="blue" />
              </div>

              <p className="text-gray-600 leading-relaxed text-base">
                {test.comment}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
