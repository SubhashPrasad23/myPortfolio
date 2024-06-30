import React from "react";
import { RxCross2 } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";

const MobileMenu = ({ setIsMobileMenu, about, contact, skill, home }) => {
  const menuItems = ["Home", "About", "Contact", "Skills"];

  const menuVar = {
    initial: {
      scaleX: 0,
    },
    animate: {
      scaleX: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleX: 0,
      transition: {
        delay: 0.5,
        duration: 10,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const headerHeight = 70;

  const scrollToRef = (ref) => {
    const topOffset = ref.current.offsetTop - headerHeight;
    window.scrollTo({
      top: topOffset,
      behavior: "instant",
    });
  };

  const handleRef = (item) => {
    switch (item) {
      case "home":
        scrollToRef(home);
        break;
      case "about":
        scrollToRef(about);
        break;
      case "contact":
        scrollToRef(contact);
        break;
      case "skills":
        scrollToRef(skill);
        break;
    }
    setIsMobileMenu(false);
    console.log(item);
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={menuVar}
        initial="initial"
        animate="animate"
        exit="exit"
        className=" fixed inset-0 left-0 top-0 origin-right w-full h-screen bg-gradient-to-l from-[#22569f] to-black font-poppins z-50 py-2 "
      >
        <div className="flex items-center justify-end mr-4 mt-3">
          <RxCross2
            size={30}
            color="white"
            className="cursor-pointer"
            onClick={() => setIsMobileMenu(false)}
          />
        </div>

        <ul className="text-white font-semibold w-full h-3/4 flex flex-col items-center justify-center gap-5  text-lg uppercase">
          {menuItems.map((item, index) => (
            <motion.li
              key={index}
              onClick={() => handleRef(item.toLowerCase())}
              initial={{ opacity: 0, z: -100 }}
              animate={{ opacity: 1, z: 0 }}
              transition={{
                delay: 0.5 + index * 0.3,
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="cursor-pointer transition-all  hover:bg-emerald-400 px-2 py-1 rounded-md hover:shadow-md hover:shadow-gray-400"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileMenu;
