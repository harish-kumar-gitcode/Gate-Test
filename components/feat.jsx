"use client";
import Image from "next/image";

export default function Feature({ title, image }) {
  return (
    <div className="w-full h-40 rounded-2xl flex justify-center items-center bg-blue-50 p-6 shadow-md">
      <div>
        {/* Image */}
        <div className="relative h-20 w-20 mx-auto">
          <Image src={image} fill alt={title} className="object-contain" />
        </div>

        {/* Title */}
        <h1 className="text-xl font-semibold text-center mt-5 px-2">{title}</h1>
      </div>
    </div>
  );
}
