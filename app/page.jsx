"use client";

// -----HOME PAGE-----

import Image from "next/image";
import Link from "next/link";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

// Images
import logo from "@/assets/images/logo.png";
import banner from "@/assets/images/gate bg.png";

// Feature Images
import test from "@/assets/images/test-series.png";
import interview from "@/assets/images/Interview.png";
import learning from "@/assets/images/learning.png";
import program from "@/assets/images/program.png";
import mentorship from "@/assets/images/mentorship.png";

// Components
import Feature from "@/components/feat";

export default function HomePage() {
  return (
    <>
      <div>
        {/* Header */}
        <div className="flex items-center justify-center gap-5">
          {/* Logo */}
          <div className="relative h-30 w-30">
            <Image
              src={logo}
              fill
              alt="logo"
              className="object-cover scale-125"
            />
          </div>

          {/* Navigation */}
          <div className="hidden md:flex gap-5 text-xl text-gray-600">
            <Link href="#" className="hover:text-blue-700 hover:font-semibold">
              Home
            </Link>

            <Link href="#" className="hover:text-blue-700 hover:font-semibold">
              Programs
            </Link>

            <Link href="#" className="hover:text-blue-700 hover:font-semibold">
              Scholarships
            </Link>

            <Link href="#" className="hover:text-blue-700 hover:font-semibold">
              Student's Success
            </Link>

            <Link href="#" className="hover:text-blue-700 hover:font-semibold">
              Our Mentors
            </Link>

            <Link href="#" className="hover:text-blue-700 hover:font-semibold">
              About Nuerocademy
            </Link>
          </div>
        </div>

        {/* Banner */}
        <div className="bg-sky-200 py-4 flex-column -translate-y-4">
          {/* Intro */}
          <div className="text-center">
            <h1 className="text-2xl font-bold">
              GATE LIVE ONLINE COACHING 2027/28
            </h1>

            <p className="text-sm">YOUR GATEWAY TO IITs & PSU JOBS</p>
          </div>

          {/* Banner Image */}
          <div className="mx-4 mt-5">
            <h1 className="text-center text-3xl font-bold">
              OUR GATE ACHIEVERS
            </h1>

            <Image src={banner} alt="banner" />
          </div>

          {/* Booking Form */}
          <div className="rounded-md mx-5 h-100 bg-white mt-10" id="booking">
            <h1 className="text-center pt-5 font-bold">Book your seat!</h1>

            {/* Name */}
            <div className="flex gap-5 justify-center mt-5">
              <input
                type="text"
                placeholder="First Name"
                className="p-1 pl-3 rounded-sm border border-gray-200 placeholder:text-sm w-30"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="p-1 pl-3 rounded-sm border border-gray-200 placeholder:text-sm w-30"
              />
            </div>

            {/* Mobile */}
            <div className="flex justify-center mt-5">
              <input
                type="text"
                placeholder="Mobile"
                className="p-1 pl-3 rounded-sm border border-gray-200 placeholder:text-sm w-65"
              />
            </div>

            {/* Email */}
            <div className="flex justify-center mt-5">
              <input
                type="text"
                placeholder="Email"
                className="p-1 pl-3 rounded-sm border border-gray-200 placeholder:text-sm w-65"
              />
            </div>

            {/* Year & Time */}
            <div className="flex gap-5 justify-center mt-5">
              {/* Exam Year */}
              <select className="p-1 pl-3 rounded-sm border border-gray-200 w-30">
                <option value="">Select Exam Year</option>

                {Array.from({ length: 5 }, (_, i) => {
                  const year = 2027 + i;

                  return (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>

              {/* Time Slots */}
              <select className="p-1 pl-3 rounded-sm border border-gray-200 w-40">
                <option value="">Select Time</option>

                {[
                  "4:30 PM - 6:30 PM",
                  "6:30 PM - 8:30 PM",
                  "7:00 PM - 9:00 PM",
                ].map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            {/* Terms */}
            <div className="flex gap-2 justify-center items-center mt-5">
              <input type="checkbox" className="scale-125" />

              <label>I agree to the terms & conditions</label>
            </div>

            {/* Submit */}
            <div className="flex justify-center mt-5">
              <button className="px-6 py-1 text-lg font-medium text-white bg-blue-600 rounded-md">
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Red Banner */}
        <div className="mx-4 bg-red-700 h-65 mt-10 rounded-md flex items-center justify-center">
          <div>
            {/* Programs */}
            <h1 className="text-center text-white text-xl font-medium">
              Programs offered
            </h1>

            <div className="w-full flex justify-center">
              <button className="mt-2 rounded-md bg-indigo-950 py-1 px-3 text-gray-100">
                Explore Now
              </button>
            </div>

            {/* Scholarship */}
            <div className="mt-3">
              <h1 className="text-center text-white text-xl font-medium">
                Get upto 30% Scholarship
              </h1>

              <div className="flex justify-center w-full">
                <button className="mt-2 rounded-md bg-indigo-950 py-1 px-3 text-gray-100">
                  Check Eligibility
                </button>
              </div>
            </div>

            {/* Booking */}
            <div className="mt-3">
              <h1 className="text-center text-white text-xl font-medium">
                Book your seat
              </h1>

              <div className="flex justify-center w-full">
                <button className="mt-2 rounded-md bg-indigo-950 py-1 px-3 text-gray-100">
                  Book now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-10 mb-5">
          <h1 className="text-center font-semibold text-base">
            SALIENT FEATURES OF
          </h1>

          <h1 className="text-center font-bold text-3xl mx-6">
            OUR GATE COACHING PROGRAM
          </h1>

          {/* Carousel */}
          <div className="mt-8 px-5 w-full overflow-hidden">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              touchEventsTarget="container"
              simulateTouch={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide>
                <Feature image={interview} title="Interview Support" />
              </SwiperSlide>

              <SwiperSlide>
                <Feature image={test} title="Test Preparation Support" />
              </SwiperSlide>

              <SwiperSlide>
                <Feature image={mentorship} title="Dedicated Mentorship" />
              </SwiperSlide>

              <SwiperSlide>
                <Feature image={learning} title="Personalized Learning" />
              </SwiperSlide>

              <SwiperSlide>
                <Feature
                  image={program}
                  title="Program Designed by Mentors from IIT/IISc"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
