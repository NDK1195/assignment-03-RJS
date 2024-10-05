import { useDispatch, useSelector } from "react-redux";
import { HIDE_POPUP } from "../../../store/popupSlice";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../../../components/Button";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Popup() {
  const dispatch = useDispatch();
  const location = useLocation();
  const isOpen = useSelector((state) => state.popup.isShow);
  const {
    id,
    imageUrl,
    name,
    price: originalPrice,
    description,
  } = useSelector((state) => state.popup.data);

  // hide popup when route changes
  useEffect(() => {
    dispatch(HIDE_POPUP());
  }, [location.pathname, dispatch]);

  // format price
  const price = new Intl.NumberFormat("vi-VN").format(originalPrice);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* backdrop */}
          <div
            className="fixed left-0 top-0 z-10 h-full w-full bg-black opacity-30"
            onClick={() => dispatch(HIDE_POPUP())}
          ></div>
          {/* backdrop */}

          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 bg-white p-8"
          >
            <div className="flex flex-col gap-8 xl:flex-row">
              <div className="basis-1/2">
                <img src={imageUrl} alt={name} className="w-full" />
              </div>

              <div className="flex basis-1/2 flex-col gap-3">
                <span
                  className="cursor-pointer self-end text-2xl font-bold"
                  onClick={() => dispatch(HIDE_POPUP())}
                >
                  X
                </span>
                <h3 className="text-[28px] font-semibold">{name}</h3>
                <p className="text-xl font-medium text-gray-500">{price} VND</p>
                <p className="tracking-wider text-gray-400 opacity-80">
                  {description}
                </p>
                <Button
                  className="flex w-fit items-center gap-1 px-8 py-2"
                  navigateTo={`/detail/${id}`}
                  type="button"
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span>View Details</span>
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
export default Popup;
