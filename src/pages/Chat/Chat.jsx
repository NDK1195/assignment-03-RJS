import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function Chat() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div className="fixed bottom-20 right-10 z-50">
      <div className="relative cursor-pointer text-5xl" onClick={handleClick}>
        <i className="fa-brands fa-facebook-messenger"></i>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.25 }}
            className="absolute -top-[450px] right-0 w-[400px] rounded-lg bg-white shadow-lg"
          >
            <div className="flex items-center justify-between p-3">
              <h3 className="">Customer support</h3>
              <p className="bg-background p-2 text-xs text-gray-500">
                Let&apos;s chat app
              </p>
            </div>

            <hr className="h-[1px] w-full" />

            <div className="h-[300px] px-5 py-3">
              <p className="mb-3 ml-auto w-fit bg-blue-500 p-2 text-sm text-white">
                Xin chào
              </p>
              <p className="mb-3 ml-auto w-fit bg-blue-500 p-2 text-sm text-white">
                Làm thế nào để xem các sản phẩm
              </p>
              <p className="mb-3 w-fit bg-background p-2 text-sm text-gray-400">
                ADMIN: Chào bạn
              </p>
              <p className="mb-3 w-fit bg-background p-2 text-sm text-gray-400">
                ADMIN: Bạn có thể vào mục Shop để xem các sản phẩm
              </p>
            </div>

            <div className="flex items-center gap-5 bg-background px-5 py-3">
              <span className="flex items-center justify-center rounded-full bg-gray-200 p-2">
                <i className="fa-solid fa-user"></i>
              </span>
              <input
                type="text"
                placeholder="Enter message"
                className="border p-1 outline-none"
              />
              <span className="cursor-pointer">
                <i className="fa-solid fa-paperclip"></i>
              </span>
              <span className="cursor-pointer">
                <i className="fa-solid fa-face-smile"></i>
              </span>
              <span className="cursor-pointer text-blue-500">
                <i className="fa-solid fa-paper-plane"></i>
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default Chat;
