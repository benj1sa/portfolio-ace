"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "/aws.png",
    "/fam.png",
    "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "/easyd.jpeg",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Hello! I&apos;m Ben, originally from Severna Park, Maryland. When I'm not 
          buried in my computer engineering studies, you'll often find me out on 
          trails for a run or tinkering away on various side projects. I&apos;ve been 
          recently fascinated by the potential of AI and its applications in 
          transforming our world.
        </Paragraph>
        <Paragraph className=" mt-4">
          I believe in the power of technology to improve lives and am driven by a 
          curiosity to understand and innovate. In my approach to both my studies and 
          personal projects, I value creativity, persistence, and a collaborative spirit. 
          I love taking on challenges and learning from every experience along the way.
        </Paragraph>

        <Paragraph className=" mt-4">
          Feel free to connect with me or explore some of my projects. Thanks for stopping by!
        </Paragraph>
      </div>
    </div>
  );
}
