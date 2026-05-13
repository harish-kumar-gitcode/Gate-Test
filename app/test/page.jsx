"use client";

import Feature from "@/components/feat";

import test from "@/assets/images/test-series.png";
import interview from "@/assets/images/Interview.png";
import learning from "@/assets/images/learning.png";

import { useEffect, useState } from "react";

export default function TestPage() {
  const features = [
    {
      title: "Comprehensive Test Series",
      image: test,
    },
    {
      title: "Interview Prep",
      image: interview,
    },
    {
      title: "Learning based mentorship",
      image: learning,
    },
  ];

  const [curr, setCurr] = useState(0);

  // Previous
  const prev = () => {
    setCurr((prevCurr) =>
      prevCurr === 0 ? features.length - 1 : prevCurr - 1
    );
  };

  // Next
  const next = () => {
    setCurr((prevCurr) =>
      prevCurr === features.length - 1 ? 0 : prevCurr + 1
    );
  };

  // AUTO PLAY
  useEffect(() => {
    const timeout = setTimeout(() => {
      next();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [curr]);

  return (
    <div className="w-full px-5 mt-10">
      {/* Feature */}
      <Feature title={features[curr].title} image={features[curr].image} />

      {/* Buttons */}
      <div className="flex justify-center gap-5 mt-5">
        <button
          onClick={prev}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Prev
        </button>

        <button
          onClick={next}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
}
