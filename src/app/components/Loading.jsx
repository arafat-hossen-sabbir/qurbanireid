"use client";

import Lottie from "lottie-react";

const Loading = () => {
  const animationData = {
    v: "5.7.14",
    fr: 30,
    ip: 0,
    op: 60,
    w: 200,
    h: 200,
    nm: "Loading",
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "Loader",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: {
            a: 1,
            k: [
              { t: 0, s: [0] },
              { t: 60, s: [360] },
            ],
          },
          p: { a: 0, k: [100, 100, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] },
        },
        shapes: [
          {
            ty: "el",
            p: { a: 0, k: [0, 0] },
            s: { a: 0, k: [80, 80] },
            d: 1,
            nm: "Circle",
            fill: {
              a: 0,
              k: { c: { a: 0, k: [0.1, 0.6, 0.3, 1] } },
            },
            st: {
              a: 0,
              k: {
                c: { a: 0, k: [0.1, 0.6, 0.3, 1] },
                w: 8,
                lc: 2,
                lj: 1,
              },
            },
          },
        ],
        ip: 0,
        op: 60,
        st: 0,
        bm: 0,
      },
    ],
  };

  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <Lottie animationData={animationData} loop className="h-32 w-32" />
    </div>
  );
};

export default Loading;
