import { Box, Card } from "@mantine/core";

const services = [
  {
    title: "Compliance Readiness and Self-Assessments",
    description:
      "Ensure your organization is prepared to meet the highest standards of cybersecurity compliance. Our readiness assessments identify gaps and provide actionable recommendations.",
  },
  {
    title: "Security Architecture and Design",
    description:
      "Build a resilient security infrastructure with our expert guidance. We design security frameworks that integrate seamlessly with your business operations, providing robust protection against threats.",
  },
  {
    title: "Ransomware Susceptibility Assessment",
    description:
      "Identify vulnerabilities and fortify your defenses against ransomware attacks. Our assessments help you understand your risk and implement effective prevention strategies.",
  },
];

const renders = [
  {
    title: "Technical Security Standards",
    description:
      "Adopt industry best practices with our technical security standards services. We help you develop and implement standards that ensure your systems and processes are secure.",
  },
  {
    title: "Business Impact Assessment",
    description:
      "Understand the potential impact of disruptions on your operations. Our assessments provide insights into critical business functions and guide you in developing effective continuity plans.",
  },
  {
    title: "Merger And Acquisition Due Diligence",
    description:
      "Ensure your mergers and acquisitions are secure with our due diligence services. We identify cybersecurity risks and provide recommendations to protect your investments.",
  },
];

export default function CybersecurityServices() {
  return (
    <section className="bg-black text-white p-2">
      <div className="bg-[url('../public/Gradient.png')] z-[20px] bg-center ">
        <div className="items-center px-6 mb-2">
          <h3 className=" text-[12] md:text-[16px] font-normal text-center uppercase tracking-wide text-gray-400 mb-5">
            What We Offer
          </h3>
          <h2 className="text-2xl md:text-[48px] text-center leading-tight">
            <span className="bg-gradient-to-r from-[#3637A0] to-[#09C6DE] bg-clip-text font-extrabold text-transparent">
              We Provide Expert{" "}
            </span>
            <span className="bg-gradient-to-r from-[#09C6DE] to-[#460389] bg-clip-text font-extrabold text-transparent">
              Cybersecurity Solutions{" "}
            </span>
          </h2>
          <p className="mt-2 md:mt-4 text-2xl md:text-[48px] text-center font-bold text-white uppercase leading-tight p-5">
            Tailored to your unique needs, ensuring compliance and robust
            protection against emerging threats.
          </p>
        </div>
        <div className=" w-full h-auto">
          <div className=" block md:flex w-full radius-24">
            {services.map((service, index) => (
              <div key={index} className="w-full md:w-1/3 overflow-hidden ">
                <div className="bg-[#242636] p-10 m-5 h-[250px] w-auto drop-shadow-xl overflow-hidden">
                  <h4 className="text-[16px] md:text-[24px] lg:text-[24px] text-[#C7D1EA] font-medium">
                    {service.title}
                  </h4>
                  <p className="text-[#A7A7AF] font-normal text-[14px] md:text-[14px]">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" w-full h-auto">
          <div className=" block md:flex w-full radius-24 bg-transparent">
            {renders.map((service, index) => (
              <div key={index} className="w-full md:w-1/3 overflow-hidden ">
                <div className="bg-[#242636] p-10 m-5 h-[250px] w-auto drop-shadow-xl overflow-hidden">
                  <h4 className="text-[#C7D1EA] font-medium text-[16px] md:text-[24px]">
                    {service.title}
                  </h4>
                  <p className="text-[#A7A7AF] font-normal text-[14px] md:text-[14px]">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
