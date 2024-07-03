import React, { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import MobileMenu from "./MobileMenu";

function Header({ about, contact,skill,home }) {
  const [isRotated, setIsRotated] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const headerHeight = 70

  const scrollToRef = (ref) => {
    const topOffset = ref.current.offsetTop - headerHeight;
    console.log(ref)
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

    console.log(item)
  };

  const menuItems = ["Home", "About", "Skills", "Contact"];

  // console.log(isMobileMenu);
  const handleRotate = () => {
    setIsRotated(true);
  };
  const handleRotateclose = () => {
    setIsRotated(false);
  };
  const menuHandler = () => {
    // console.log("fvdc");
    setIsMobileMenu(true);
  };

  return (
    <div className="z-20 w-full flex justify-center items-center font-poppins bg-opacity-10 backdrop-blur-sm fixed top-0 left-0 right-0">
      <div className={`w-full px-3 py-4 shadow-md shadow-emerald-600 text-white flex items-center  ${isMobile?"justify-between":"justify-around"}`}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.3, ease: "easeInOut" }}
          className=""
        >
          <motion.h3
            onMouseEnter={handleRotate}
            onMouseLeave={handleRotateclose}
            animate={{ rotate: isRotated ? [0, -5, 0] : [0] }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-widest"
          >
            <span className="text-emerald-300">&lt;</span>Subhash
            <span className="text-emerald-300">/&gt;</span>
          </motion.h3>
        </motion.div>

        <div >
          {isMobile ? (
            <button >
              <IoMenu size={40} onClick={menuHandler} />
            </button>
          ) : (
            <ul className="flex items-center space-x-8 ">
              {menuItems.map((item, index) => (
                <motion.li
                  onClick={() => handleRef(item.toLowerCase())}
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1 + index * 0.1,
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="cursor-pointer transition-all  hover:bg-emerald-400 px-2 py-1 rounded-md hover:shadow-md hover:shadow-gray-400 "
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {isMobileMenu && (
        <MobileMenu setIsMobileMenu={setIsMobileMenu}  about={about} contact={contact} skill={skill} home={home}/>
      )}
    </div>
  );
}

export default Header;
