import { motion, AnimatePresence } from "framer-motion";
import { CircleX } from "lucide-react";
import FormInput from "./FormInput";


const Modal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999999] grid w-screen">
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
              {/* form input field component */}
              <FormInput />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
export default Modal;

