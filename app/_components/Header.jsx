import { Button } from "@/components/ui/button";
import { RxGithubLogo } from "react-icons/rx";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
     <Head>
        <title>AI Course Generator - Create Personalized AI Courses</title>
        <meta name="description" content="Generate personalized AI courses with our easy-to-use tool. Explore various topics and create your own curriculum today!" />
        <meta name="keywords" content="AI, Course Generator, Online Learning, Educational Tool, Machine Learning, Deep Learning" />
        <meta name="author" content="Tushar Rohilla" />
        {/* <link rel="canonical" href="https://https://mrpankajpandey-ai-course.vercel.app//" /> */}
        <meta property="og:title" content="AI Course Generator" />
        <meta property="og:description" content="Create personalized AI courses tailored to your needs." />
        
       
      </Head>
    <div className="flex justify-between p-5 shadow-sm items-center">
      <div className="flex items-center gap-2">
      <Link  href={'/'}  className="flex justify-center items-center gap-2">
      <Image src={'/logo.svg'} width={44} height={44} alt="AI Course Generator Logo" /> <span className="font-bold text-xl">AI Course Generator</span>
      </Link>
      </div>
      <div className="flex justify-center items-center gap-10 cursor-pointer">
       <Link href={"https://github.com/tusharrohilla11"} target="_blank" rel="noopener noreferrer">
         <RxGithubLogo className="text-3xl"/>
       </Link>          
      <Link href={'/dashboard'} >

      <Button variant="startButton" > Get started</Button>
      </Link>
      </div>
    </div>
    </>
  );
};

export default Header;
