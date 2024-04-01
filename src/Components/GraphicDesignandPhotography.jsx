import React from "react";

function GraphicDesignandPhotography({ designerPhotography }) {
  return (
    <section>
      <div className="flex flex-col md:flex-row  w-full h-[900px] md:h-[600px] ">
        {designerPhotography.map((item, index) => (
          <div
            key={index}
            className=" flex flex-col items-center justify-end relative gap-4 h-full md:w-1/2 md:pb-10 pb-4  "
          >
            <h2
              className="z-10 text-3xl font-black font-title"
              style={{ color: item.titleColor }}
            >
              {item.title}
            </h2>
            <p
              className="z-10 leading-normal md:w-1/2  font-semibold text-base text-center w-96 font-bd"
              style={{ color: item.textColor }}
            >
              {item.text}
            </p>
            <div className=" absolute top-0 left-0 w-full h-full md:h-full">
              <img src={item.img} className="size-full " alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GraphicDesignandPhotography;
