import Image from "next/image";
import layer from "@/public/Layer_1.png";
export default function Footer() {
  return (
    <footer className="w-full">
      <div className="w-full flex item-center justify-center p-2 sm:p-4  bg-[url('../public/Gradient.png')] z-[20px] bg-center">
        <div className="w-[602px] justify-center text-center my-10 pt-10">
          <h1 className="font-inter font-semibold text-[48px] md:text-[60.75px] leading-[64px] text-white">
            Get started. It's easy
          </h1>

          <p className="font-inter font-normal text-[18px] leading-[27px] text-gray-300 mt-2">
            Everything you need to remain cybersecurity compliant is just a call
            away
          </p>

          <button className="mt-6 px-6 py-3 text-white font-medium bg-gradient-to-r from-[#09C6DE] to-[#460389] rounded-full shadow-lg hover:opacity-90 transition-all">
            Schedule a Call
          </button>
        </div>
      </div>
      <div className="w-full sm:p-4 md:flex md:items-center md:justify-between md:p-6 -mt-[10px]">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="px-auto py-6 lg:py-8 md:flex justify-between flex-wrap">
            <div className="max-w-[300px] md:w-1/5 md:mt-0 lg:mt-0">
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <div className="flex mt-4 space-x-5 rtl:space-x-reverse">
                    <div className="bg-[#F4F4F4] w-10 h-10 rounded-full flex items-center justify-center">
                      <a
                        href="#"
                        className="text-gray-400 hover:text-gray-900"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_3439_59848)">
                            <g clipPath="url(#clip1_3439_59848)">
                              <path
                                d="M12.3099 11.5677H14.3933L15.2266 8.23438H12.3099V6.56771C12.3099 5.70937 12.3099 4.90105 13.9766 4.90105H15.2266V2.10105C14.9549 2.06522 13.9291 1.98438 12.8458 1.98438C10.5832 1.98438 8.97656 3.36522 8.97656 5.90105V8.23438H6.47656V11.5677H8.97656V18.6511H12.3099V11.5677Z"
                                fill="#323232"
                              />
                            </g>
                          </g>
                          <defs>
                            <clipPath id="clip0_3439_59848">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0.644531 0.320312)"
                              />
                            </clipPath>
                            <clipPath id="clip1_3439_59848">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0.644531 0.320312)"
                              />
                            </clipPath>
                          </defs>
                        </svg>

                        <span className="sr-only">Facebook page</span>
                      </a>
                    </div>
                    <div className="bg-[#F4F4F4] w-10 h-10 rounded-full flex items-center justify-center">
                      <a
                        href="#"
                        target="_blank"
                        className="text-gray-400 hover:text-gray-900"
                        rel="noreferrer"
                      >
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_3439_59854)">
                            <g clipPath="url(#clip1_3439_59854)">
                              <path
                                d="M19.1109 5.03798C18.4747 5.31939 17.8 5.50421 17.1092 5.58631C17.8373 5.15084 18.3823 4.46549 18.6425 3.65798C17.9592 4.06465 17.21 4.34965 16.4292 4.50381C15.9047 3.94263 15.2095 3.57045 14.4517 3.44513C13.6938 3.31982 12.9158 3.44839 12.2386 3.81086C11.5613 4.17333 11.0228 4.74938 10.7068 5.44947C10.3907 6.14956 10.3148 6.93446 10.4908 7.68215C9.10509 7.61269 7.74945 7.25258 6.51191 6.6252C5.27437 5.99782 4.18261 5.11719 3.3075 4.04048C2.99774 4.57252 2.83496 5.17734 2.83584 5.79298C2.83584 7.00131 3.45084 8.06881 4.38584 8.69381C3.83251 8.67639 3.29136 8.52696 2.8075 8.25798V8.30131C2.80767 9.10606 3.08614 9.88599 3.59571 10.5088C4.10527 11.1317 4.81457 11.5592 5.60334 11.7188C5.08968 11.858 4.55109 11.8785 4.02834 11.7788C4.25072 12.4715 4.68417 13.0773 5.268 13.5114C5.85182 13.9455 6.55678 14.1861 7.28417 14.1996C6.56124 14.7674 5.73348 15.1871 4.84824 15.4348C3.96299 15.6824 3.03761 15.7532 2.125 15.643C3.71808 16.6675 5.57258 17.2114 7.46667 17.2096C13.8775 17.2096 17.3834 11.8988 17.3834 7.29298C17.3834 7.14298 17.3792 6.99131 17.3725 6.84298C18.0549 6.34979 18.6439 5.73883 19.1117 5.03881L19.1109 5.03798Z"
                                fill="#323232"
                              />
                            </g>
                          </g>
                          <defs>
                            <clipPath id="clip0_3439_59854">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0.644531 0.320312)"
                              />
                            </clipPath>
                            <clipPath id="clip1_3439_59854">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0.644531 0.320312)"
                              />
                            </clipPath>
                          </defs>
                        </svg>

                        <span className="sr-only">Twitter page</span>
                      </a>
                    </div>
                    <div className="bg-[#F4F4F4] w-10 h-10 rounded-full flex items-center justify-center">
                      <a
                        href="#"
                        className="text-gray-400 hover:text-gray-900"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_3439_59860)">
                            <g clipPath="url(#clip1_3439_59860)">
                              <path
                                d="M6.42708 4.48781C6.42686 4.92984 6.25105 5.35368 5.93833 5.66608C5.62562 5.97849 5.20161 6.15387 4.75958 6.15365C4.31755 6.15343 3.89372 5.97762 3.58131 5.6649C3.26891 5.35219 3.09352 4.92817 3.09375 4.48615C3.09397 4.04412 3.26977 3.62028 3.58249 3.30788C3.89521 2.99548 4.31922 2.82009 4.76125 2.82031C5.20327 2.82053 5.62711 2.99634 5.93951 3.30906C6.25192 3.62178 6.4273 4.04579 6.42708 4.48781ZM6.47708 7.38781H3.14375V17.8212H6.47708V7.38781ZM11.7437 7.38781H8.42708V17.8212H11.7105V12.3462C11.7105 9.29615 15.6854 9.01281 15.6854 12.3462V17.8212H18.977V11.2128C18.977 6.07115 13.0938 6.26281 11.7105 8.78781L11.7437 7.38781Z"
                                fill="#323232"
                              />
                            </g>
                          </g>
                          <defs>
                            <clipPath id="clip0_3439_59860">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0.644531 0.320312)"
                              />
                            </clipPath>
                            <clipPath id="clip1_3439_59860">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0.644531 0.320312)"
                              />
                            </clipPath>
                          </defs>
                        </svg>

                        <span className="sr-only">LinkedIn page</span>
                      </a>
                    </div>
                    <div className="bg-[#F4F4F4] w-10 h-10 rounded-full flex items-center justify-center">
                      <a
                        href="#"
                        className="text-gray-400 hover:text-gray-900"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_3439_59866)">
                            <g clipPath="url(#clip1_3439_59866)">
                              <path
                                d="M10.6458 1.98438C12.91 1.98438 13.1925 1.99271 14.0808 2.03437C14.9683 2.07604 15.5725 2.21521 16.1042 2.42188C16.6542 2.63354 17.1175 2.92022 17.5808 3.38271C18.0046 3.79929 18.3325 4.3032 18.5417 4.85937C18.7475 5.39021 18.8875 5.99522 18.9292 6.88272C18.9683 7.77105 18.9792 8.05354 18.9792 10.3177C18.9792 12.5819 18.9708 12.8644 18.9292 13.7527C18.8875 14.6402 18.7475 15.2444 18.5417 15.7761C18.3331 16.3325 18.0051 16.8366 17.5808 17.2527C17.1641 17.6763 16.6603 18.0042 16.1042 18.2136C15.5733 18.4194 14.9683 18.5594 14.0808 18.6011C13.1925 18.6402 12.91 18.6511 10.6458 18.6511C8.38167 18.6511 8.09917 18.6427 7.21084 18.6011C6.32334 18.5594 5.71917 18.4194 5.1875 18.2136C4.63111 18.0048 4.12711 17.6768 3.71084 17.2527C3.28701 16.8362 2.95911 16.3323 2.75 15.7761C2.54334 15.2452 2.40417 14.6402 2.3625 13.7527C2.32334 12.8644 2.3125 12.5819 2.3125 10.3177C2.3125 8.05354 2.32084 7.77105 2.3625 6.88272C2.40417 5.99438 2.54334 5.39104 2.75 4.85937C2.95853 4.30286 3.28651 3.79882 3.71084 3.38271C4.12723 2.95873 4.63119 2.63082 5.1875 2.42188C5.71917 2.21521 6.3225 2.07604 7.21084 2.03437C8.09917 1.99521 8.38167 1.98438 10.6458 1.98438ZM10.6458 6.15104C9.54077 6.15104 8.48096 6.59003 7.69956 7.37144C6.91816 8.15284 6.47917 9.21265 6.47917 10.3177C6.47917 11.4228 6.91816 12.4826 7.69956 13.264C8.48096 14.0454 9.54077 14.4844 10.6458 14.4844C11.7509 14.4844 12.8107 14.0454 13.5921 13.264C14.3735 12.4826 14.8125 11.4228 14.8125 10.3177C14.8125 9.21265 14.3735 8.15284 13.5921 7.37144C12.8107 6.59003 11.7509 6.15104 10.6458 6.15104ZM16.0625 5.94271C16.0625 5.66645 15.9527 5.40149 15.7574 5.20615C15.562 5.0108 15.2971 4.90105 15.0208 4.90105C14.7446 4.90105 14.4796 5.0108 14.2843 5.20615C14.0889 5.40149 13.9792 5.66645 13.9792 5.94271C13.9792 6.21898 14.0889 6.48392 14.2843 6.67929C14.4796 6.87464 14.7446 6.98438 15.0208 6.98438C15.2971 6.98438 15.562 6.87464 15.7574 6.67929C15.9527 6.48392 16.0625 6.21898 16.0625 5.94271ZM10.6458 7.81771C11.3089 7.81771 11.9448 8.0811 12.4136 8.54994C12.8824 9.01878 13.1458 9.65466 13.1458 10.3177C13.1458 10.9808 12.8824 11.6167 12.4136 12.0855C11.9448 12.5543 11.3089 12.8177 10.6458 12.8177C9.98279 12.8177 9.34691 12.5543 8.87807 12.0855C8.40923 11.6167 8.14584 10.9808 8.14584 10.3177C8.14584 9.65466 8.40923 9.01878 8.87807 8.54994C9.34691 8.0811 9.98279 7.81771 10.6458 7.81771Z"
                                fill="#323232"
                              />
                            </g>
                          </g>
                          <defs>
                            <clipPath id="clip0_3439_59866">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0.644531 0.320312)"
                              />
                            </clipPath>
                            <clipPath id="clip1_3439_59866">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0.644531 0.320312)"
                              />
                            </clipPath>
                          </defs>
                        </svg>

                        <span className="sr-only">Instagram page</span>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-3/5 lg:w-3/5">
              <div className="block md:flex justify-between items-center mx-2">
                <div className=" md:mt-3">
                  <h2 className="mt-6 md:mt-0 mb-4 text-sm tracking-[1.12px] font-inter font-bold text-white uppercase ">
                    Use cases
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-1">
                      <a
                        href="/"
                        className="hover:underline text-{#A7A7AF} text-lg font-aeonik font-normal"
                      >
                        UI design
                      </a>
                    </li>

                    <li className="mb-1">
                      <a
                        href="/"
                        className="hover:underline text-{#A7A7AF} font-aeonik font-normal text-lg"
                      >
                        UX design
                      </a>
                    </li>

                    <li className="mb-1">
                      <a
                        href="/"
                        className="hover:underline text-{#A7A7AF} font-aeonik font-normal text-lg"
                      >
                        wireframing
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        href="/"
                        className="hover:underline text-{#A7A7AF} font-aeonik font-normal text-lg"
                      >
                        Diagramming
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        href="/"
                        className="hover:underline text-{#A7A7AF} font-aeonik font-normal text-lg"
                      >
                        Brainstorming
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        href="/"
                        className="hover:underline text-{#A7A7AF} font-aeonik font-normal text-lg"
                      >
                        Online Whiteboard
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        href="/"
                        className="hover:underline text-{#A7A7AF} font-aeonik font-normal text-lg"
                      >
                        Team Collaboration
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="md:mt-0">
                  <h2 className="mt-6 md:mt-0 mb-4 text-sm tracking-[1.12px] font-inter font-bold text-white uppercase ">
                    Explore
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-1">
                      <a
                        href="/"
                        className="hover:underline text-{#A7A7AF} font-aeonik font-normal text-lg"
                      >
                        Design
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        href="/"
                        className="hover:underline text-{#A7A7AF} font-aeonik font-normal text-lg"
                      >
                        Prototyping
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        href="/"
                        className="hover:underline text-{#A7A7AF} font-aeonik font-normal text-lg"
                      >
                        Development Features
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        href="/"
                        className="hover:underline text-{#A7A7AF} font-aeonik font-normal text-lg"
                      >
                        Design System
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        href="/"
                        className="hover:underline text-{#A7A7AF} font-aeonik font-normal text-lg"
                      >
                        Collaboration Features
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        href="/"
                        className="hover:underline text-{#A7A7AF} font-aeonik font-normal text-lg"
                      >
                        Design Process
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        href="/"
                        className="hover:underline text-{#A7A7AF} font-aeonik font-normal text-lg"
                      >
                        FigJam
                      </a>
                    </li>
                  </ul>
                </div>
                <div className=" md:mt-0">
                  <h2 className="mt-6 md:mt-0 mb-4 text-sm tracking-[1.12px] font-inter font-bold text-white uppercase ">
                    Use cases
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-1">
                      <a
                        href="/"
                        className="hover:underline text-{#A7A7AF} text-lg font-aeonik font-normal"
                      >
                        UI design
                      </a>
                    </li>

                    <li className="mb-1">
                      <a
                        href="/"
                        className="hover:underline text-{#A7A7AF} font-aeonik font-normal text-lg"
                      >
                        UX design
                      </a>
                    </li>

                    <li className="mb-1">
                      <a
                        href="/"
                        className="hover:underline text-{#A7A7AF} font-aeonik font-normal text-lg"
                      >
                        wireframing
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        href="/"
                        className="hover:underline text-{#A7A7AF} font-aeonik font-normal text-lg"
                      >
                        Diagramming
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        href="/"
                        className="hover:underline text-{#A7A7AF} font-aeonik font-normal text-lg"
                      >
                        Brainstorming
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        href="/"
                        className="hover:underline text-{#A7A7AF} font-aeonik font-normal text-lg"
                      >
                        Online Whiteboard
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        href="/"
                        className="hover:underline text-{#A7A7AF} font-aeonik font-normal text-lg"
                      >
                        Team Collaboration
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/5 mb-4 mt-4 md:mt-0 lg:mt-0 md:mb-0   ">
              <Image src={layer} alt="" width={205} height={22} className="" />
            </div>
          </div>
          <div className="bg-[url('../public/Rectangle 2.png')] w-full mt-6 md:mt-0 lg:mt-0 md:mb-0   ">
            <Image src={layer} alt="" width={1512} height={153} className="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
