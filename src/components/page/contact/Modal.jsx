import { motion, AnimatePresence } from "framer-motion";
import { CircleX } from "lucide-react";
import Ellipse from "@/assets/img/contact/Ellipse.svg";
import Image from "next/image";

const Modal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 grid w-screen">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "120%" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="text-white rounded-lg shadow-lg w-ful overflow-hidden bg-[#121212] overflow-y-scroll"
          >
            <div className="grid place-items-center w-full">
              <button
                onClick={onClose}
                className="text-white text-2xl h-24 flex items-center justify-center bg-[#222] w-full"
              >
                <CircleX className="size-16" />
              </button>
            </div>
            <div className="p-6 max-w-2xl mx-auto">
              <h2 className="text-4xl my-10 text-center">
                Request Information
              </h2>
              <form className="space-y-10">
                <div className="mb-4">
                  <input
                    className="w-full pl-4 p-3 text-lg bg-[#1C1C1C] text-gray-200 border-b-2 border-gray-600 rounded"
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="w-full pl-4 p-3 text-lg bg-[#1C1C1C] text-gray-200 border-b-2 border-gray-600 rounded"
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
                <div className="mb-4">
                  <div className="flex">
                    <select
                      className="pl-4 p-3 text-lg bg-[#1C1C1C] text-gray-200 border-b-2 border-gray-600 rounded-l"
                      id="countryCode"
                    >
                      <option value="+1">+1</option>
                    </select>
                    <input
                      className="flex-grow p-2 bg-[#1C1C1C] text-gray-200 border-b-2 border-gray-600 rounded-r"
                      id="phone"
                      type="text"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <input
                    className="w-full pl-4 p-3 text-lg bg-[#1C1C1C] text-gray-200 border-b-2 border-gray-600 rounded"
                    id="email"
                    type="email"
                    placeholder="Email Address"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="w-full pl-4 p-3 text-lg bg-[#1C1C1C] text-gray-200 border-b-2 border-gray-600 rounded"
                    id="enquiry"
                    placeholder="Type Enquiry Here"
                    rows="4"
                  />
                </div>

                <div className="mb-8">
                  <h2 className="text-white text-lg mb-4">
                    Stay Informed with Achievement Cigar Company :
                  </h2>
                  <ul className="mb-4 list-disc pl-6 space-y-3">
                    <li>
                      Receive tailored updates on our latest products, services,
                      and events.
                    </li>
                    <li>
                      Choose your preferred method of communication for
                      personalized messages.
                    </li>
                    <li>
                      Join exclusive opportunities to share your feedback and
                      shape the future of ACC.
                    </li>
                  </ul>
                  <div className="mb-4">
                    <div class="flex mt-8">
                      <Image
                        href={Ellipse}
                        width={500}
                        height={500}
                        alt="Ellipse.svg"
                        class="h-4 w-4 shrink-0 mt-2"
                      />
                      <label
                        for="remember-me"
                        class="ml-3 block text-lg text-gray-400"
                      >
                        By opting in, you&apos;ll get marketing communications
                        about ACC&apos;s offerings. Expect personalized content
                        based on your interests, preferences, and interactions
                        with us. You may also receive invitations to provide
                        feedback on your experience.
                      </label>
                    </div>
                  </div>
                  <a href="#" className="text-blue-400 hover:underline">
                    More Information
                  </a>
                </div>

                <div className="flex items-center justify-center">
                  <button
                    className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-bold py-2 px-4 rounded-full"
                    type="button"
                  >
                    SEND REQUEST
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
export default Modal;
