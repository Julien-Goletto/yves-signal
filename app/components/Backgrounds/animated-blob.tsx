"use client";
import React from 'react';
import { motion } from 'framer-motion';

const blobVariants = {
  start: {
    d: "M645.016 328.317C639.08 176.085 408.218 75.2755 327.491 61.8813C163.632 34.694 -21.6475 50.5041 80.0239 166.224C169.499 268.063 118.804 378.258 135.41 446.367C152.016 514.475 285.75 515.823 356.094 461.84C431.258 404.158 652.437 518.606 645.016 328.317Z"
  },
  end: {
    d: "M606.998 272.503C500.499 131.883 418.998 62 280.499 101C211.794 120.347 199.718 162.972 91.407 272.502C-5.502 370.502 93.8381 471.644 157.498 501.002C369.998 599.002 333.598 448.641 418.998 472.502C520.998 501.002 721.972 424.312 606.998 272.503Z",
  }
};

const transitionOptions = {
  duration: 25, 
  yoyo: Number.POSITIVE_INFINITY, 
  repeat: Number.POSITIVE_INFINITY,
  repeatType: "reverse",
} as const;

export const AnimatedBlob = () => {
  return (
    <>
      <div className="relative w-full  h-[600px] overflow-hidden">
        <motion.svg 
          initial="start" 
          viewBox="0 0 900 600"
          width="900" 
          height="600" 
          fill="#DC85E0"
          fillOpacity={0.15}
          xmlns="http://www.w3.org/2000/svg" 
          xmlnsXlink="http://www.w3.org/1999/xlink" 
          version="1.1"
          animate="end"
          className="absolute inset-0">
            <motion.g filter="url(#filter0_f_226_5281)">
              <motion.path
                variants={blobVariants}
                transition={transitionOptions}>
              </motion.path>
            </motion.g>
          <defs>
            <filter id="filter0_f_226_5281" x="0.986328" y="0.382812" width="694.212" height="549.722" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_226_5281"/>
            </filter>
          </defs>
        </motion.svg>
      </div>
    </>
  );
};
