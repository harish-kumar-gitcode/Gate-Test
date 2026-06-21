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
import Scholar from "@/components/scholar";
import Batch from "@/components/batch";
import Testimonials from "@/components/testimonials";
import About from "@/components/about";

// State and form handling
import { useState } from "react";

export default function HomePage() {
  const [course, setCourse] = useState("");

  const handleSubmit = () => {
    if (course === "") {
      alert("Please select a course");
      return;
    }

    if (course === "starter") {
      window.open("https://rzp.io/rzp/NHjoM9M", "_blank");
    }

    if (course === "professional") {
      window.open("https://rzp.io/rzp/665XynIK", "_blank");
    }
  };
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
          <div className="rounded-md mx-5 h-110 bg-white mt-10" id="booking">
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
              <select className="p-1 pl-3 rounded-sm border border-gray-200 w-30 text-gray-500 text-sm">
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
              <select className="p-1 pl-3 rounded-sm border border-gray-200 w-30 text-gray-500 text-sm">
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
            <div className="flex justify-center mt-5">
              <select
                name="Course"
                id="course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="border border-gray-100 w-50 pl-3 p-1 rounded-sm border-gray-200 text-gray-500 text-sm"
              >
                <option value="">Select Course</option>
                <option value="starter">GATE STARTER</option>
                <option value="professional">GATE PROFESSIONAL</option>
              </select>
            </div>

            {/* Terms */}
            <div className="flex gap-2 justify-center items-center mt-5">
              <input type="checkbox" className="scale-125" required />

              <label>I agree to the terms & conditions</label>
            </div>

            {/* Submit */}
            <div className="flex justify-center mt-5">
              <button
                className="px-6 py-1 text-lg font-medium text-white bg-blue-600 rounded-md"
                onClick={handleSubmit}
              >
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
                <a href="#program">Explore Now</a>
              </button>
            </div>

            {/* Scholarship */}
            <div className="mt-3">
              <h1 className="text-center text-white text-xl font-medium">
                Get upto 30% Scholarship
              </h1>

              <div className="flex justify-center w-full">
                <button className="mt-2 rounded-md bg-indigo-950 py-1 px-3 text-gray-100">
                  <a href="#scholar">Check Eligibility</a>
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
                  <a href="#booking">Book now</a>
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

        {/* Access Features */}
        <div className="bg-blue-50 text-center" id="program">
          {/* Access heading */}
          <div>
            <h1 className="text-md pt-10 font-medium">GATE COACHING</h1>
            <h1 className="text-3xl font-bold w-80 mx-10">
              ACCESS FROM YOUR HOME
            </h1>
          </div>
          {/* Features list */}
          <div className="grid grid-cols-3 grid-rows-10 mt-5">
            {/* Header Row */}
            <div className="content-center bg-white text-2xl font-semibold">
              <h1>Features</h1>
            </div>
            <div className="bg-blue-950 text-white border-white border text-sm content-center">
              <h1>GATE LIVE ONLINE 2027 (STARTER)</h1>
            </div>
            <div className="bg-blue-950 text-white border-white border text-sm content-center">
              <h1>GATE LIVE ONLINE 2027 (PROFESSIONAL)</h1>
            </div>
            {/* Row 2 */}
            <div className="bg-blue-950 text-white border-white border text-sm content-center">
              <h1>Online Live Session</h1>
            </div>
            <div className="bg-gray-100 text-white border-white border text-sm content-center">
              <h1>✔</h1>
            </div>
            <div className="bg-gray-100 text-white border-white border text-sm content-center">
              <h1>✔</h1>
            </div>
            {/* Row 3 */}
            <div className="bg-blue-950 text-white border-white border text-sm content-center">
              <h1>Online Dedicated metorship</h1>
            </div>
            <div className="bg-gray-100 text-white border-white border text-sm content-center">
              <h1>❌</h1>
            </div>
            <div className="bg-gray-100 text-white border-white border text-sm content-center">
              <h1>✔</h1>
            </div>
            {/* Row 3 */}
            <div className="bg-blue-950 text-white border-white border text-sm content-center">
              <h1>Classroom Recorded Videos</h1>
            </div>
            <div className="bg-gray-100 text-white border-white border text-sm content-center">
              <h1>✔</h1>
            </div>
            <div className="bg-gray-100 text-white border-white border text-sm content-center">
              <h1>✔</h1>
            </div>
            {/* Row 4 */}
            <div className="bg-blue-950 text-white border-white border text-sm content-center">
              <h1>Total Session</h1>
            </div>
            <div className="bg-gray-100 text-black border-white border text-sm content-center font-semibold">
              <h1>600</h1>
            </div>
            <div className="bg-gray-100 text-black border-white border text-sm content-center font-semibold">
              <h1>800</h1>
            </div>
            {/* Row 5 */}
            <div className="bg-blue-950 text-white border-white border text-sm content-center">
              <h1>Gate Score Booster</h1>
            </div>
            <div className="bg-gray-100 text-black border-white border text-sm content-center font-semibold">
              <h1>❌</h1>
            </div>
            <div className="bg-gray-100 text-black border-white border text-sm content-center font-semibold">
              <h1>✔</h1>
            </div>
            {/* Row 6 */}
            <div className="bg-blue-950 text-white border-white border text-sm content-center">
              <h1>Post GATE Guidance</h1>
            </div>
            <div className="bg-gray-100 text-black border-white border text-sm content-center font-semibold">
              <h1>✔</h1>
            </div>
            <div className="bg-gray-100 text-black border-white border text-sm content-center font-semibold">
              <h1>✔</h1>
            </div>
            {/* Row 7 */}
            <div className="bg-blue-950 text-white border-white border text-sm content-center">
              <h1>PSU and MS(R) mock Interview Prep</h1>
            </div>
            <div className="bg-gray-100 text-black border-white border text-sm content-center font-semibold">
              <h1>❌</h1>
            </div>
            <div className="bg-gray-100 text-black border-white border text-sm content-center font-semibold">
              <h1>✔</h1>
            </div>
            {/* Row 8 */}
            <div className="bg-blue-950 text-white border-white border text-sm content-center">
              <h1>Doubt Solving Session</h1>
            </div>
            <div className="bg-gray-100 text-black border-white border text-sm content-center font-semibold">
              <h1>12</h1>
            </div>
            <div className="bg-gray-100 text-black border-white border text-sm content-center font-semibold">
              <h1>24 (One to One)</h1>
            </div>
            {/* Row 9 */}
            <div className="bg-blue-950 text-white border-white border text-sm content-center">
              <h1>Price</h1>
            </div>
            <div className="bg-gray-100 text-black border-white border text-xl content-center font-bold">
              <h1 className="text-green-800">
                Rs 22,999 <br />
                <span className="text-xs font-medium text-red-700">
                  <strike>Rs 24,999</strike>
                </span>
              </h1>
            </div>
            <div className="bg-gray-100 text-black border-white border text-xl content-center font-bold">
              <h1 className="text-green-800">
                Rs 29,999 <br />
                <span className="text-xs font-medium text-red-700">
                  <strike>Rs 34,999</strike>
                </span>
              </h1>
            </div>
          </div>
          <div className="text-gray-600 mx-4 mt-4 text-sm pb-2">
            <p>
              (2 Question Bank, One for Techincal and one for Math and GA would
              be provided as pdf.)
            </p>
            <p>
              <span className="font-semibold text-black">* </span>
              An additonal charge of Rs 1299 would be applicable for Hard Copy
              excluding Postal charges.
            </p>
          </div>
        </div>

        {/* Scholarships */}
        <div id="scholar">
          <h1 className="text-3xl font-bold text-center mt-15">SCHOLARSHIPS</h1>
          <div className="mt-5">
            <Scholar></Scholar>
          </div>
        </div>

        {/* Upcoming Batches */}
        <div className="text-center mt-10">
          <h1 className="text-sm font-medium">UPCOMING</h1>
          <h1 className="text-3xl font-bold">GATE 2027 BATCHES</h1>
          {/* Batch info */}
          <div>
            <Batch></Batch>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mt-10 bg-blue-50 pt-10">
          <h1 className="text-sm font-medium">OUR</h1>
          <h1 className="text-3xl font-bold">GATE ACHIEVERS</h1>
          <div>
            <Testimonials></Testimonials>
          </div>
        </div>

        {/* About */}
        <div>
          <About></About>
        </div>

        {/* Footer & Copyright */}
        <div className="text-lg bg-blue-50 mt-5 flex justify-center text-center p-2 text-gray-600">
          <p>&copy; All rights reserved to NueroCademy Learning Pvt Ltd.</p>
        </div>
      </div>
    </>
  );
}
