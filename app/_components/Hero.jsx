import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Footer from "./Footer";
import { HiChevronDoubleRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div>
      <section 
        className="h-screen bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/sign_in.gif')",
        }}
      >
        {/* Background overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative mx-auto max-w-screen-xl px-4 pt-32 pb-10 lg:flex lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-primary">
              <span className="text-white"> AI Course </span>Generator
              <strong className=" mt-12 font-medium text-3xl text-white sm:block">
                {" "}
                Your Own AI-Curated Learning Track.{" "}
              </strong>
            </h1>

            <p className="mt-4 text-xm text-gray-200 relaxed italic bold">
              AI builds your course, you build your future.
              Personalized learning at your pace, for your goals.<br />
            </p>
            <h2 className="mt-4 text-primary text-lg font-semibold">
              Grab coffee. Stay calm. Let’s learn smart.
            </h2>

            <div className="mt-40 flex flex-wrap justify-center gap-4 cursor-pointer">
              <Link href={"/explore-course"}>
                <Button variant="startButton" size="lg">Explore Now.<HiChevronDoubleRight className="text-xl" /></Button>
              </Link>
            </div>
          </div>
        </div>
      
      </section>
    </div>
  );
};

export default Hero;
