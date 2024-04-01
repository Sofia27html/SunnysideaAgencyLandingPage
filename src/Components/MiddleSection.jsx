import clsx from "clsx";
import { FastAverageColor } from "fast-average-color";
import React, { useEffect, useState } from "react";

const fac = new FastAverageColor();

function MiddleSection({ reverse, title, text, link, img }) {
  const [mainColor, setMainColor] = useState(null);

  useEffect(() => {
    const getAverageColor = async () => {
      const color = await fac.getColorAsync(img);
      setMainColor(color.hex);
    };
    getAverageColor();
  }, []);

  return (
    <section
      className={clsx(
        "flex w-full flex-col-reverse h-[800px] md:h-[500px] ",
        reverse ? "md:flex-row-reverse" : " md:flex-row "
      )}
    >
      <div className="w-full h-1/2 md:h-full md:w-1/2 flex justify-center flex-col items-center   ">
        <div className="flex flex-col justify-center gap-5 w-80  ">
          <h1 className="text-3xl font-black font-title">{title}</h1>
          <p className="leading-normal text-base text-secundary-100 font-semibold font-body">
            {text}
          </p>
          <div className="w-32 relative z-10  ">
            <a href="#" className=" ml-1 font-black text-base font-title">
              {link}
            </a>
            <span
              className="border-b-8 w-full rounded-md block absolute -z-10 "
              style={{
                borderBottomColor: `${mainColor}`,
                opacity: "0.5",
              }}
            ></span>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-1/2  md:h-full ">
        <img src={img} alt={title} className="size-full" />
      </div>
    </section>
  );
}

export default MiddleSection;
