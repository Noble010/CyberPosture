import Ellipse from "@/public/Ellipse 7.png";
import Vector from "@/public/Vector.png";
import Image from "next/image";

const testimonials = [
  {
    name: "Jacob Esau",
    title: "CEO Cellulant group",
    message:
      "Ensure your organization is prepared to meet the highest standards of cybersecurity compliance. Our readiness assessments identify gaps and provide actionable recommendations",
  },
  {
    name: "Jacob Esau",
    title: "CEO Cellulant group",
    message:
      "Ensure your organization is prepared to meet the highest standards of cybersecurity compliance. Our readiness assessments identify gaps and provide actionable recommendations",
  },
  {
    name: "Jacob Esau",
    title: "CEO Cellulant group",
    message:
      "Ensure your organization is prepared to meet the highest standards of cybersecurity compliance. Our readiness assessments identify gaps and provide actionable recommendations",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-black">
      <div className="z-10 items-center p-5 text-[#93B6B8]">
        <h3 className="uppercase tracking-wide font-normal text-center text-[12px] md:text-[16px] text-[#93B6B8] mb-3 md:mb-5 z-[20px]">
          WHAT THEY SAID ABOUT US
        </h3>
        <h2 className="font-inter text-2xl text-center md:text-[48px] font-bold">
          <span className="bg-gradient-to-r from-[#3637A0] to-[#09C6DE] bg-clip-text font-extrabold text-transparent">
            {" "}
            Loved By{" "}
          </span>
          <span className="bg-gradient-to-r from-[#09C6DE] to-[#460389] bg-clip-text font-extrabold text-transparent">
            Our Clients
          </span>
        </h2>
      </div>
      <div className=" w-full h-auto">
        <div className="block md:flex w-full radius-24 bg-[#000]">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/3 overflow-hidden">
              <div className="relative bg-[#242636] p-5 md:p- m-5 h-[300px] rounded-xl  w-auto overflow-hidden">
                <div className="absolute top-4 right-4 text-4xl bg-quote-gradient text-transparent bg-clip-text">
                  <Image src={Vector} alt="Vector" className="" />
                </div>
                <div className=" py-5 md:p-10 mt-5">
                  <div className="flex items-center space-x-4">
                    <Image src={Ellipse} alt="Ellipse" />
                    <div>
                      <h4 className="font-semibold text-gray-400">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-[#A7A7AF] font-normal text-[14px]">
                    {testimonial.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" w-full h-auto">
        <div className="block md:flex w-full radius-24">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/3 overflow-hidden">
              <div className="relative bg-[#242636] p-10 m-5 h-[300px] rounded-xl  w-auto overflow-hidden">
                <div className="absolute top-4 right-4 text-4xl bg-quote-gradient text-transparent bg-clip-text">
                  <Image src={Vector} alt="Vector" className="" />
                </div>
                <div className=" py-5 md:p-10 ">
                  <div className="flex items-center space-x-4">
                    <Image src={Ellipse} alt="Ellipse" />
                    <div>
                      <h4 className="font-semibold text-gray-400">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-[#A7A7AF] font-normal text-[14px]">
                    {testimonial.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
