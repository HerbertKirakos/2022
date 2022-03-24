import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";

import WavingHand from "../../envaironment/images/WavingHand.png";

export const ModalPage = ({ open, onClose, brand }) => {
  const cancelButtonRef = useRef(null);
  
  return (
    <Transition.Root show={open} as={Fragment} >
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={onClose}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-light bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>


            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200" 
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-end">
                      <div className="mr-8">
                        <div className="flex justify-between items-center gap-20 mb-8 ">
                          <Image
                          src={`${brand?.imgUrl?.src}`}
                          width={brand?.imgUrl?.width}
                          height={brand?.imgUrl?.height}
                          />
                          <h2 className="text-black text-2xl font-bold font-NotoSans">
                            {brand?.name}
                          </h2>
                        </div>
                    
                        <p className="text-black text-base font-normal font-NotoSans max-w-sm">
                          {`Добро пожаловать во флагман ${brand?.name} — новый дом бренда,
                          объединяющий под своей крышей наши главные ценности:
                          спорт, инновации, дизайн, устойчивое развитие,
                          инклюзивность, и погружающий каждого посетителя в
                          уникальную атмосферу.`}
                        </p>
                      </div>
                      <img src={`${WavingHand.src}`} className="max-w-[200px]" />
                    </div>
                </div>
                <div className="bg-[#7F797410] px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red text-base font-NotoSans font-medium text-white hover:bg-[#EB575770] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EB575750] sm:w-auto sm:text-sm"
                    onClick={onClose}
                    ref={cancelButtonRef}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
    </Transition.Root>
  );
};
