import me from "../Images/me_1.png";
import { PiArrowRight, PiEnvelopeSimple } from "react-icons/pi";
import react from "../Images/icons8-react.svg";
import express from "../Images/icons8-express-js.svg";
import mongo from "../Images/icons8-mongodb.png";
import node from "../Images/icons8-nodejs.svg";
import tailwind from "../Images/icons8-tailwindcss.svg";
import js from "../Images/icons8-javascript.svg";
import html from "../Images/icons8-html-5.svg";
import css from "../Images/icons8-css.svg";
import cpp from "../Images/icons8-cpp.svg";
import c from "../Images/icons8-c.svg";
import python from "../Images/icons8-python.svg";
import sql from "../Images/icons8-mysql.svg";
import blender from "../Images/icons8-blender.svg";
import framer from "../Images/framer-motion.svg";
import java from "../Images/icons8-java.svg";
import ubuntu from "../Images/icons8-ubuntu.png";
import { motion } from "framer-motion";

const tooltip = {
  initial: {
    opacity: 0,
    y: 0,
    x: "-50%",
  },
  animate: {
    opacity: 1,
    y: "-40px",
    x: "-50%",
  },
};

export default function HomeContent() {
  const arr = [
    { path: mongo, name: "MongoDB" },
    { path: express, name: "Express" },
    { path: react, name: "ReactJS" },
    { path: node, name: "NodeJS" },
    { path: tailwind, name: "TailwindCSS" },
    { path: framer, name: "Framer Motion" },
    { path: js, name: "Javascript" },
    { path: sql, name: "SQL" },
    { path: ubuntu, name: "Ubuntu" },
    { path: html, name: "HTML" },
    { path: css, name: "CSS" },
    { path: cpp, name: "CPP" },
    { path: c, name: "C" },
    { path: java, name: "Java" },
    { path: python, name: "Python" },
    { path: blender, name: "Blender" },
  ];
  return (
    <>
      <div className="flex gap-4 text-xl items-center align-middle">
        <div className="">
          <img src={me} alt="XD" className="rounded-full h-14 bg-zinc-800" />
        </div>
        <div>
          <div className="font-bold text-white">Arnav Saraswat</div>
          <div className="text-gray-600">B. 2000</div>
        </div>
      </div>
      <div className="text-2xl">
        <div className="text-3xl">
          I am a{" "}
          <span className="font-bold text-white">Full-stack Developer.</span>{" "}
        </div>
        <div className="font-body pt-4">
          I'm Arnav Saraswat, a developer with a passion for creating beautiful,
          responsive, and user-friendly websites and apps that feel like an
          experience, engage users on a deeper level and hold their attention.
        </div>
        <div className="pt-4 flex items-center align-middle gap-2 text-lg font-body">
          <div className="bg-green-600 rounded-full h-2 w-2"></div>
          <div>Available for new opportunities</div>
        </div>
        <div className="pt-4 text-xl">
          <button className="bg-zinc-800 text-white pt-1 pb-1 pl-2 pr-2 flex  items-center  align-middle rounded-lg gap-2 hover:bg-zinc-700 transition ease-in-out delay-100 duration-200">
            <span>
              <PiEnvelopeSimple className="text-2xl text-zinc-500" />
            </span>
            <span>Contact Me</span>
          </button>
        </div>
      </div>
      <div>
        <div className="text-xl font-sans flex justify-between align-middle items-center">
          <div className="font-bold text-white">Projects</div>
          <div className="flex font-bold gap-2 items-center align-middle hover:text-white transition ease-in-out delay-100 duration-200 cursor-pointer">
            <span>More</span>
            <span className="text-2xl">
              <PiArrowRight />
            </span>
          </div>
        </div>
        <div className="w-full font-body pt-4 text-lg">
          <div className="flex justify-between items-center align-middle gap-4">
            <div className="">WanderInn</div>
            <div className="h-[1px] w-full border-0 bg-zinc-500"></div>
            <div className="flex gap-2">
              <div>Website</div>
              <div>Github</div>
              <div>2023</div>
            </div>
          </div>
          <div className="flex justify-between items-center align-middle gap-4">
            <div>Scribe</div>
            <div className="h-[1px] w-full border-0 bg-zinc-500"></div>
            <div className="flex gap-2">
              <div>Github</div>
              <div>2023</div>
            </div>
          </div>
          <div className="flex justify-between items-center align-middle gap-4">
            <div>Visualizer</div>
            <div className="h-[1px] w-full border-0 bg-zinc-500"></div>
            <div className="flex gap-2">
              <div>Github</div>
              <div>2021</div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <div className="text-xl flex justify-between items-center align-middle">
          <div className="text-white font-bold">Stack</div>
          <div className="flex font-bold gap-2 items-center align-middle hover:text-white transition ease-in-out delay-100 duration-200 cursor-pointer">
            <span>More</span>
            <span className="text-2xl">
              <PiArrowRight />
            </span>
          </div>
        </div>
        <div className="pt-4 flex gap-6 justify-center flex-wrap w-full">
          {arr.map((elem) => (
            <motion.div
              className="group relative"
              initial="initial"
              animate="initial"
              whileHover="animate"
            >
              <motion.div
                className="absolute hidden group-hover:block bg-zinc-800 text-white pt-1 pb-1 pr-2 pl-2 rounded-full text-sm -translate-y-8 -translate-x-1/2 left-1/2 w-fit text-center"
                variants={tooltip}
              >
                {elem.name}
              </motion.div>
              <div className="bg-zinc-100 p-2 rounded-full overflow-hidden">
                <img src={elem.path} className="h-9 w-9" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="pt-4">
        <div className="text-xl text-white font-bold font-sans">Where</div>
        <div className="w-full font-body pt-4 text-lg">
          <div className="flex justify-between items-center align-middle gap-4">
            <div className="">LinkedIn</div>
            <div className="h-[1px] w-full border-0 bg-zinc-500"></div>
            <div className="flex gap-2">
              <div>Connect</div>
            </div>
          </div>
          <div className="flex justify-between items-center align-middle gap-4">
            <div>Instagram</div>
            <div className="h-[1px] w-full border-0 bg-zinc-500"></div>
            <div className="flex gap-2">
              <div>Follow</div>
            </div>
          </div>
          <div className="flex justify-between items-center align-middle gap-4">
            <div>Github</div>
            <div className="h-[1px] w-full border-0 bg-zinc-500"></div>
            <div className="flex gap-2">
              <div>Follow</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
