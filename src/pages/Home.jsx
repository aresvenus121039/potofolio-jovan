/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-comment-textnodes */
import { RiCloseLine } from "@react-icons/all-files/ri/RiCloseLine";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

export default function Home() {
  const ALLOWED_KEYS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
  const [pressed, setPressed] = useState([]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;
      if (ALLOWED_KEYS.includes(key) && !pressed.includes(key)) {
        setPressed((prevPressed) => [...prevPressed, key]);
      }
    };

    const handleKeyUp = (event) => {
      const { key } = event;
      setPressed(pressed.filter((k) => k !== key));
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <motion.div
      className="w-full h-full bg-radial bg-no-repeat bg-right"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
    >
      <div className="flex items-center justify-center h-full max-w-7xl mx-auto">
        <div className="lg:w-1/2 w-full mx-10 lg:ml-10 flex flex-col justify-between h-[80%] lg:h-auto">
          <div className="mb-20">
            <p className="text-white text-xl">Hi everyone. I am</p>
            <h1 className="text-white lg:text-5xl md:text-4xl text-3xl">
              JOVAN POPOVIC
            </h1>

            <h2 className=" text-[#E99287] lg:text-3xl md:text-2xl text-xl flex items-center gap-3">
              <span className="animate-pulse">&#62;</span>
              <Typewriter
                options={{
                  loop: true,
                  wrapperClassName:
                    " text-[#E99287] lg:text-2xl md:text-2xl text-xl gap-3",
                  cursorClassName:
                    " text-[#E99287] lg:text-2xl md:text-2xl text-xl gap-3",
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Senior Full-Stack Developer")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("I love to learn new technology")
                    .pauseFor(1000)
                    .start()
                    .deleteAll()
                  }}
              />
            </h2>
          </div>

          <div className="flex flex-col gap-2.5">
            <p className="text-[#607B96]">
              // you can also see it on my Github page1
            </p>
            <p>
              <span className="text-[#4D5BCE]">const</span>{" "}
              <span className="text-[#43D9AD]">githubLink</span>{" "}
              <span className="text-white">=</span>{" "}                        
              <a
                href="https://github.com/jupiter950"
                className="text-[#E99287]"
                target="_blank"
                rel="noreferrer"
              >
                "https://github.com/jupiter950"
              </a>
            </p>
          </div>
        </div>

        <div className="w-1/2 overflow-hidden max-h-[90%] hidden lg:block mr-10">
          {/* <div className="border border-[#0C1616] bg-gradient-to-br from-[#175553] to-[#43D9AD]/10 rounded-lg p-[35px] backdrop-blur-[32px] relative flex gap-6 items-start justify-center"> */}
            <div className="w-100 h-[470px] ml-[30px]" style={{backgroundImage: `url("Venus.jpg")`}}>
                
            {/* </div> */}

            <div>
              <div className="x-button-snake p-1 w-max rounded-full top-3 left-3 absolute">
                <RiCloseLine className="text-[#48b3aa] text-[12px]" />
              </div>
              <div className="x-button-snake p-1 w-max rounded-full top-3 right-3 absolute">
                <RiCloseLine className="text-[#48b3aa] text-[12px]" />
              </div>
              <div className="x-button-snake p-1 w-max rounded-full bottom-3 right-3 absolute">
                <RiCloseLine className="text-[#48b3aa] text-[12px]" />
              </div>
              <div className="x-button-snake p-1 w-max rounded-full bottom-3 left-3 absolute">
                <RiCloseLine className="text-[#48b3aa] text-[12px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
