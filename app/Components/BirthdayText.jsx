"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const BirthdayText = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Wishing you a day filled with love, laughter, and all your favorite things. May this year bring you happiness, success, and endless smiles. Have an amazing day! Party Dinu na birsinu!",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex items-center justify-center py-6">
      <span className="text-xl text-center w-6/12 ">
        <span ref={el} className="text-white"></span> {/* Animated text */}
      </span>
    </div>
  );
};

export default BirthdayText;
