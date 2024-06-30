import React from "react";

function Footer({ about, contact }) {
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
      case "about":
        scrollToRef(about);
        break;
      case "contact":
        scrollToRef(contact);
        break;
    }

    console.log(item);
  };

  return (
    <div className=" w-full">
      <footer className=" rounded-lg bg-gray-900 ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 Subhash™. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
