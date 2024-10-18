"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Happy_Birthday_Text = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Happy Birthday Roshan!"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex items-center justify-center py-6 ">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold birthday_text">
        <span ref={el} className="text-white"></span>
      </h1>
    </div>
  );
};

export default Happy_Birthday_Text;
