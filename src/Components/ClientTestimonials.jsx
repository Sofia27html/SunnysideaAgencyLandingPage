import React from "react";

function ClientTestimonials({ testimonials }) {
  return (
    <section>
      <div className="w-full flex flex-col items-center justify-center h-full md:h-[700px]">
        <h1 className="text-secundary-300 font-semibold text-3xl mt-5 font-title">
          CLIENT TESTIMONIALS
        </h1>
        <div className="flex  md:flex-row  md:items-center  md:justify-center w-full pt-12 flex-col px-12">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-full m-2 p-4 gap-10 "
            >
              <img
                src={item.img}
                alt={item.name}
                className="rounded-full h-20  "
              />
              <p className="leading-normal font-bold  text-secundary-100 w-1/2  text-center font-bd">
                {item.text}
              </p>
              <div>
                <h3 className="mt-6 text-2xl font-black font-title">
                  {item.name}
                </h3>
                <p className="text-secundary-100 text-sm py-3 font-bd font-semibold">
                  {item.job}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientTestimonials;
