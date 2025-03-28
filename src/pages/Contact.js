import React, { useState } from "react";
import contact from "../assets/contact.png";
import { motion } from "framer-motion";

const Contact = React.forwardRef((props, contactRef) => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const formHandler = (e) => {
    e.preventDefault();

    if (!user.fullName || !user.email || !user.message) {
      alert("All fields are required.");
    } else {
      fetch("https://formspree.io/f/mnqeelqz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => {
          if (response.ok) {
            alert("Form submitted successfully!");
            setUser({
              fullName: "",
              email: "",
              message: "",
            });
          } else {
            alert("Failed to submit form. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
          alert("An unexpected error occurred. Please try again later.");
        });
    }
  };

  return (
    <div
      className="w-full flex items-center justify-center lg:h-[calc(100vh-10rem)] py-6"
      ref={contactRef}
    >
      <div className="w-4/5 text-white space-y-6">
        <h3 className="text-3xl text-center font-semibold tracking-widest text-shadow-custom-white">
          <span className="text-emerald-400">CONTACT</span> ME
        </h3>
        <div className="w-full flex lg:flex-row flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
            className="lg:w-2/5 w-full h-[435px] border-2 shadow-lg shadow-white p-3"
          >
            <img src={contact} alt="" className="w-full h-full" />
          </motion.div>
          <motion.div
            className="lg:w-3/5 w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="w-full text-black">
              <form className="space-y-5 flex flex-col" onSubmit={formHandler}>
                {/* Wrapper motion div for all form fields and submit button */}
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
                  className="w-full space-y-5"
                >
                  {/* Full Name Field */}
                  <div className="w-full space-y-1">
                    <label htmlFor="fullName" className="text-white bg-black">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      placeholder="Enter your name"
                      className="w-full px-2 py-2 rounded-md outline-none border border-white focus:ring-2  focus:border-emerald-400 focus:ring-emerald-400"
                      value={user.fullName}
                      name="fullName"
                      onChange={inputHandler}
                    />
                  </div>

                  {/* Email Field */}
                  <div className="w-full space-y-1">
                    <label htmlFor="email" className="text-white">
                      Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      placeholder="Enter your email"
                      className="w-full px-2 py-2 rounded-md  outline-none border border-white focus:ring-2  focus:border-emerald-400 focus:ring-emerald-400"
                      value={user.email}
                      name="email"
                      onChange={inputHandler}
                    />
                  </div>

                  {/* Message Field */}
                  <div className="w-full space-y-1">
                    <label htmlFor="message" className="text-white">
                      Your message
                    </label>
                    <textarea
                      className="w-full px-2 py-3 rounded-lg resize-none outline-none border border-white focus:ring-2  focus:border-emerald-400 focus:ring-emerald-400"
                      rows="6"
                      value={user.message}
                      name="message"
                      onChange={inputHandler}
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="bg-emerald-400 w-28 text-white px-6 py-1.5 mt-7 rounded-md font-semibold tracking-wider hover:scale-110 duration-300"
                 
                  >
                    SUBMIT
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
});

export default Contact;
