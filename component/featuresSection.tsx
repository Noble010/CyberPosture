import Image from "next/image";
import solutions from "@/public/solutions.png";
import proactive from "@/public/proactive.png";
import expertise from "@/public/expertise.png";
import Handshake from "@/public/Handshake.png";
import government from "@/public/government.png";
import container from "@/public/Container.png";

export default function FeaturesSection() {
  return (
    <section className="bg-black text-white p-2">
      <div className="mb-20">
        <h3 className="text-sm uppercase text-center tracking-widest text-[#7DBDF8]">
          catering for all industries
        </h3>
        <Image src={government} alt="" className="mx-auto" />
      </div>

      <div className="mb-20">
        <h3 className="text-sm uppercase text-center tracking-widest text-[#7DBDF8] mb-10">
          Organizations that trust us
        </h3>
        <Image src={container} alt="" className="mx-auto" />
      </div>
      {/* Section Title */}
      <div className="text-center">
        <h3 className="text-sm uppercase tracking-widest text-[#7DBDF8]">
          HOW WE WORK
        </h3>
        <h2 className="text-2xl md:text-[42px] font-extrabold leading-tight bg-gradient-to-r from-[#3637A0] via-[#09C6DE] to-[#460389] bg-clip-text text-transparent mt-2">
          We Ensure Your Organization Is Protected
        </h2>
        <p className="text-lg font-medium text-gray-300 mt-2">
          Against Evolving Threats And Meets All Regulatory Requirements.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 px-6">
        {/* Feature Card 1 */}
        <div className="bg-gradient-to-b from-[#1e1f29] to-[#111216] p-6 rounded-2xl text-center shadow-lg">
          <div className="mx-auto flex items-center mb-4">
            <Image
              src={proactive}
              alt=""
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>
          <h4 className="text-xl font-semibold text-white">
            Proactive Approach
          </h4>
          <p className="text-gray-400 text-sm mt-2">
            We stay ahead of emerging threats to ensure your organization is
            always protected.
          </p>
        </div>

        {/* Feature Card 2 */}
        <div className="bg-gradient-to-b from-[#1e1f29] to-[#111216] p-6 rounded-2xl text-center shadow-lg">
          <div className="mx-auto flex items-center mb-4">
            <Image
              src={expertise}
              alt=""
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>
          <h4 className="text-xl font-semibold text-white">Expertise</h4>
          <p className="text-gray-400 text-sm mt-2">
            Our team of seasoned professionals brings deep industry knowledge
            and experience.
          </p>
        </div>

        {/* Feature Card 3 */}
        <div className="bg-gradient-to-b from-[#1e1f29] to-[#111216] p-6 rounded-2xl text-center shadow-lg">
          <div className="mx-auto flex items-center mb-4">
            <Image
              src={solutions}
              alt=""
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>
          {/* <img src="/icons/solutions.png" alt="Tailored Solutions" className="mx-auto w-16 h-16 mb-4" /> */}
          <h4 className="text-xl font-semibold text-white">
            Tailored Solutions
          </h4>
          <p className="text-gray-400 text-sm mt-2">
            We understand that every organization is unique. Our solutions are
            customized to meet your specific needs.
          </p>
        </div>

        {/* Feature Card 4 */}
        <div className="bg-gradient-to-b from-[#1e1f29] to-[#111216] p-6 rounded-2xl text-center shadow-lg">
          <div className="mx-auto flex items-center mb-4">
            <Image
              src={Handshake}
              alt=""
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>
          <h4 className="text-xl font-semibold text-white">
            Commitment to Excellence
          </h4>
          <p className="text-gray-400 text-sm mt-2">
            We are dedicated to delivering the highest quality services and
            achieving the best outcomes for our clients.
          </p>
        </div>
      </div>
    </section>
  );
}
