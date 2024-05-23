import { motion, AnimatePresence } from "framer-motion";
import { CircleX } from "lucide-react";

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
            className="text-white rounded-lg shadow-lg w-ful overflow-hidden bg-[#121212]"
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
              <h2 className="text-2xl mb-4 text-center">Request Information</h2>
              <form>
                <div className="mb-4">
                  <label className="block mb-1">First Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 rounded bg-gray-700 text-white"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 rounded bg-gray-700 text-white"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 rounded bg-gray-700 text-white"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">For Quality Info</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 rounded bg-gray-700 text-white"
                  />
                </div>
                <div className="mb-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Stay informed with future e-mails from Cigar Company
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-black py-2 rounded"
                >
                  SEND REQUEST
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
export default Modal;
