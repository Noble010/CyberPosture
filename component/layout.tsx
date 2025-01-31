"use client";
import { useState } from "react";
import NavBar from "./navbar";
import clsx from "clsx";
import Footer from "./footer";

interface IProps {
  children: React.ReactNode;
  navbarBg?: string;
}

export default function AppLayout({ children, navbarBg }: IProps) {
  const [open, setOpen] = useState(false);

  return (
    <main className="relative bg-black">
      <div className="">
        <section
          className={clsx(
            "sticky top-0 z-50",
            navbarBg ? `bg-[${navbarBg}]` : "bg-primary"
          )}
        // className="sticky top-0 z-50 bg-black"
        >
          <NavBar open={open} setOpen={setOpen} bg={navbarBg}/>
        </section>
        <div className={clsx(open && "hidden")}>{children}</div>
        <Footer />
      </div>
    </main>
  );
}
