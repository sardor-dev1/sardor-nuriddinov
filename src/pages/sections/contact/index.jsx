import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [buttonDisable, setButtonDisable] = useState(false);

  const botToken = "7793950833:AAHDoN9rZZ-B3yh-YmYMUYiINYPvE5yVgi0";
  const chatId = "7188548579";

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      chat_id: chatId,
      text: `New message received!\n\nName: ${
        name || "N/A"
      }\nMessage: ${message}`,
    };

    setButtonDisable(true);

    axios
      .post(`https://api.telegram.org/bot${botToken}/sendMessage`, payload)
      .then(() => {
        setName("");
        setMessage("");
      })
      .catch(() => {
        setButtonDisable(false);
      })
      .finally(() => {
        setButtonDisable(false);
      });
  };

  return (
    <>
      <div className="bg-[#1A367C] relative rounded-t-[50px] mt-[40px] h-[60px] w-[100%]"></div>
      <section
        id="contact"
        className=" bg-[#1A367C] pb-[40px] max-[500px]:pt-0 pt-[20px]"
      >
        <div className="container">
          <div className="mx-auto flex max-[740px]:flex-col justify-between gap-10 max-[500px]:gap-5  rounded-xl">
            <div className="flex flex-col text-[#fff] gap-5">
              <h2 className="text-[30px] lg:text-[40px] max-[500px]:text-[24px] font-bold">
                Contact Info
              </h2>
              <div className="flex items-center gap-3 text-[18px] max-[500px]:text-[14px] lg:text-[20px]">
                <span className="w-[50px] max-[500px]:w-[30px] h-[50px] max-[500px]:h-[30px]  rounded-md bg-gradient-to-r from-[#52A2D9] to-[#4A57C9] flex items-center justify-center">
                  <FaPhone />
                </span>
                <a href="tel:+998934670522">+998 93 467 0522</a>
              </div>
              <div className="flex items-center gap-3 text-[18px] max-[500px]:text-[14px] lg:text-[20px]">
                <span className="w-[50px] max-[500px]:w-[30px] max-[500px]:h-[30px] rounded-md h-[50px] bg-gradient-to-r from-[#52A2D9] to-[#4A57C9] flex items-center justify-center">
                  <MdOutlineMail />
                </span>
                <a href="email:sardorprogramist@gmail.com">
                  sardorprogramist@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-[18px] max-[500px]:text-[14px] lg:text-[20px]">
                <span className="w-[50px] max-[500px]:w-[30px] max-[500px]:h-[30px] rounded-md h-[50px] bg-gradient-to-r from-[#52A2D9] to-[#4A57C9] flex items-center justify-center">
                  <FaHome />
                </span>
                <a
                  target="blank"
                  href="https://www.google.com/maps/search/uchtepa+14+21/@41.2961989,69.1185388,10469m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
                >
                  Uchtepa, Toshkent, Uzbekistan
                </a>
              </div>
            </div>
            {/* Right */}
            <div className="w-full lg:w-[50%]">
              <h2 className="text-[30px] max-[500px]:text-[24px] font-bold mb-6 text-white">
                Get in Touch
              </h2>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col max-[500px]:gap-4 gap-6"
              >
                <input
                  className="w-full p-3 max-[500px]:p-2 max-[500px]:text-[14px] rounded-lg border-2 focus:outline-none focus:border-primary"
                  type="text"
                  placeholder="Your Name (optional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <textarea
                  className="w-full p-4 max-[500px]:p-2 max-[500px]:text-[14px] max-[500px]:h-[70px] rounded-lg border-2 focus:outline-none focus:border-primary h-[100px]"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                <button
                  disabled={buttonDisable}
                  className={`w-full p-3 max-[500px]:py-2 max-[500px]:text-[14px] rounded-lg text-white font-medium ${
                    buttonDisable
                      ? "bg-opacity-50 bg-primary"
                      : "bg-primary hover:shadow-lg"
                  } duration-200`}
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="pt-8 border-t-[1.5px] mt-8">
            <ul className="flex items-center justify-center gap-5">
              <li>
                <Link target="_blank" to="https://www.instagram.com/sardor_n0/">
                  <button className="outline-none w-[50px] max-[500px]:w-[40px] max-[500px]:h-[40px] rounded-md h-[50px] text-white text-[28px] max-[500px]:text-[18px] bg-gradient-to-r from-[#52A2D9] to-[#4A57C9] hover:from-[#4A57C9] hover:to-[#52A2D9] duration-150 flex items-center justify-center">
                    <FaInstagram />
                  </button>
                </Link>
              </li>
              <li>
                <Link target="_blank" to="https://t.me/SardorN_1">
                  <button className="outline-none w-[50px] max-[500px]:w-[40px] max-[500px]:h-[40px] rounded-md h-[50px] text-white text-[28px] max-[500px]:text-[18px] bg-gradient-to-r from-[#52A2D9] to-[#4A57C9] hover:from-[#4A57C9] hover:to-[#52A2D9] duration-150 flex items-center justify-center">
                    <FaTelegramPlane />
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/in/sardor-nuriddinov-6846b332a/"
                >
                  <button className="outline-none w-[50px] max-[500px]:w-[40px] max-[500px]:h-[40px] rounded-md h-[50px] text-white text-[28px] max-[500px]:text-[18px] bg-gradient-to-r from-[#52A2D9] to-[#4A57C9] hover:from-[#4A57C9] hover:to-[#52A2D9] duration-150 flex items-center justify-center">
                    <FaLinkedinIn />
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
