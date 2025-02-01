import AppLayout from "@/component/layout";
import Testimonials from "@/component/testimonials";
import CybersecurityServices from "@/component/cyberSecurityservice";
import FeaturesSection from "@/component/featuresSection";
import Animated from "@/component/animated";

export default function Home() {
  return (
    <AppLayout>
      <section className="bg-black bg-cover mt-10 md:mt-20">
        <div className="w-full flex item-center justify-center p-2 sm:p-4 bg-[url('../public/Gradient.png')] z-[20px] bg-center  ">
          <div className="justify-center text-center my-10">
            <h1 className="font-inter text-[18px] md:text-[32px] md:text-[49px] leading-[78px] text-[#E5E5E5]">
              Let&rsquo;s help you stay
            </h1>
            <Animated />
            <p className="font-inter font-normal text-[12px] md:text-[20px] text-[#E5E5E5]">
              Expert Cybersecurity Solutions Tailored to Protect
            </p>
            <p className="font-inter font-normal text-[12px] md:text-[20px] text-[#E5E5E5]">
              {" "}
              Your Organization from Emerging Thrqeats
            </p>
            <div className="block md:flex items-center justify-center text-white my-5 gap-5">
              <button className="mt-6 px-6 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-[#09C6DE] to-[#460389]  hover:opacity-80">
                Schedule a Call
              </button>
              <button className="mt-6 px-6 py-3 font-semibold rounded-full border-2 border-transparent bg-clip-text text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-80 relative">
                Get a Quote
                <span className="absolute inset-0 rounded-full border-2 border-blue-500/50"></span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <Secured /> */}
      <FeaturesSection />
      <CybersecurityServices />
      <Testimonials />
    </AppLayout>
  );
}
