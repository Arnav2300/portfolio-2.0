import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiGithubFill,
  RiSendPlaneLine,
  RiHome4Line,
  RiCodeSSlashLine,
  RiStackLine,
} from "react-icons/ri";

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

export default function BottomBar() {
  return (
    <div className="flex h-16 bg-zinc-800 rounded-full fixed bottom-4 left-1/2 -translate-x-1/2 z-50 p-2 text-2xl lg:text-3xl items-center align-middle divide-x-2 divide-zinc-700 divide-dashed">
      <div className="flex pr-2 gap-2">
        <motion.div
          className="relative group cursor-pointer"
          initial="initial"
          animate="initial"
          whileHover="animate"
        >
          <motion.div
            className="absolute bg-zinc-800 text-white pt-1 pb-1 pr-2 pl-2 rounded-full text-sm -translate-x-1/2 left-1/2 w-fit text-center"
            variants={tooltip}
          >
            Home
          </motion.div>
          <motion.div
            className="rounded-full p-2"
            whileHover={{ scale: 1.1, backgroundColor: "#333333" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <RiHome4Line />
          </motion.div>
        </motion.div>
        <motion.div
          className="relative group cursor-pointer"
          initial="initial"
          animate="initial"
          whileHover="animate"
        >
          <motion.div
            className="absolute bg-zinc-800 text-white pt-1 pb-1 pr-2 pl-2 rounded-full text-sm -translate-x-1/2 left-1/2 w-fit text-center"
            variants={tooltip}
          >
            Projects
          </motion.div>
          <motion.div
            className="rounded-full p-2"
            whileHover={{ scale: 1.1, backgroundColor: "#333333" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <RiCodeSSlashLine />
          </motion.div>
        </motion.div>
        <motion.div
          className="relative group cursor-pointer"
          initial="initial"
          animate="initial"
          whileHover="animate"
        >
          <motion.div
            className="absolute bg-zinc-800 text-white pt-1 pb-1 pr-2 pl-2 rounded-full text-sm -translate-x-1/2 left-1/2 w-fit text-center"
            variants={tooltip}
          >
            Stack
          </motion.div>
          <motion.div
            className="rounded-full p-2"
            whileHover={{ scale: 1.1, backgroundColor: "#333333" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <RiStackLine />
          </motion.div>
        </motion.div>
        <motion.div
          className="relative group cursor-pointer"
          initial="initial"
          animate="initial"
          whileHover="animate"
        >
          <motion.div
            className="absolute bg-zinc-800 text-white pt-1 pb-1 pr-2 pl-2 rounded-full text-sm -translate-x-1/2 left-1/2 w-fit text-center"
            variants={tooltip}
          >
            Contact
          </motion.div>
          <motion.div
            className="rounded-full p-2"
            whileHover={{ scale: 1.1, backgroundColor: "#333333" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <RiSendPlaneLine />
          </motion.div>
        </motion.div>
      </div>
      {/* divider */}
      <div className="flex pl-2 gap-2">
        <motion.div
          className="relative group cursor-pointer"
          initial="initial"
          animate="initial"
          whileHover="animate"
        >
          <motion.div
            className="absolute bg-zinc-800 text-white pt-1 pb-1 pr-2 pl-2 rounded-full text-sm -translate-x-1/2 left-1/2 w-fit text-center"
            variants={tooltip}
          >
            Github
          </motion.div>
          <motion.div
            className="rounded-full p-2"
            whileHover={{ scale: 1.1, backgroundColor: "#333333" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <RiGithubFill />
          </motion.div>
        </motion.div>
        <motion.div
          className="relative group cursor-pointer"
          initial="initial"
          animate="initial"
          whileHover="animate"
        >
          <motion.div
            className="absolute bg-zinc-800 text-white pt-1 pb-1 pr-2 pl-2 rounded-full text-sm -translate-x-1/2 left-1/2 w-fit text-center"
            variants={tooltip}
          >
            LinkedIn
          </motion.div>
          <motion.div
            className="rounded-full p-2"
            whileHover={{ scale: 1.1, backgroundColor: "#333333" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <RiLinkedinBoxLine />
          </motion.div>
        </motion.div>
        <motion.div
          className="relative group cursor-pointer"
          initial="initial"
          animate="initial"
          whileHover="animate"
        >
          <motion.div
            className="absolute bg-zinc-800 text-white pt-1 pb-1 pr-2 pl-2 rounded-full text-sm -translate-x-1/2 left-1/2 w-fit text-center"
            variants={tooltip}
          >
            Instagram
          </motion.div>
          <motion.div
            className="rounded-full p-2"
            whileHover={{ scale: 1.1, backgroundColor: "#333333" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <RiInstagramLine />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
