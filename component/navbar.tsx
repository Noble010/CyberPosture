"use client"
import Image from "next/image"
import logo from "@/public/logo.png"
import { motion } from "motion/react";
import clsx from "clsx";

interface IProps {
    open: boolean;
    setOpen: (value: boolean) => void;
    bg?: string;
  }

  export default function NavBar({ open, setOpen, bg }: IProps) {
    return (<>
      <nav className="bg-black fixed top-0 left-0 w-full z-50">
        <div className="max-w-[1600] flex flex-wrap items-center justify-between mx-auto p-4 md:px-32 lg:px-20">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse z-50"
          >
            <Image
              src={logo}
              alt="logo"
              width={177}
              height={35}
              className="z-50"
            />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">Open main menu</span>
            {open ? (
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>
          <div className="hidden w-full md:flex md:w-auto" id="navbar-default">
            <ul className="font-medium font-inter flex flex-col items-center p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
              <li>
                <a
                  href="/"
                  className="font-medium text-base leading-6 block py-2 px-3 md:p-0 text-white"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="font-medium text-base leading-6 block py-2 px-3 md:p-0 text-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="font-medium text-base leading-6 block py-2 px-3 md:p-0 text-white"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className=" hidden md:flex  items-center justify-center gap-3">
            <button className=" bg-gradient-to-r from-[#09C6DE] to-[#460389] text-white p-3 rounded-full">
              Schedule a call
            </button>
          </div>
        </div>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <aside
              id="default-sidebar"
              className={clsx(
                "h-screen w-screen transition-all duration-500 transform -translate-x-0 peer-checked:translate-x-0",
                bg ? `bg-[${bg}]` : "bg-primary"
              )}
              aria-label="Sidebar"
            >
              <div className="h-full px-3 overflow-y-auto flex flex-col items-right">
                <ul className="space-y-2 font-medium font-inter ">
                  <li>
                    <a
                      href="/"
                      className=" font-medium text-base leading-6 block py-2 px-3 md:p-0 text-white hover:bg-white hover:text-black"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="font-medium text-base leading-6 block py-2 px-3 md:p-0 text-white hover:bg-white hover:text-black"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="font-medium text-base leading-6 block py-2 px-3 md:p-0 text-white hover:bg-white hover:text-black"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
                <button className="bg-gradient-to-r from-[#09C6DE] to-[#460389] text-white p-3 rounded-full w-[150px] hover:w-full" >
                  Schedule a call
                </button>
              </div>
            </aside>
          </motion.div>
        )}
      </nav>
    </>
    );
  }