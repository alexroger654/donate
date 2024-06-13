import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HiXMark } from "react-icons/hi2";
import { createData, updateData } from "@/shared/commonFunctions";

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  refetch: () => void;
  data: any;
}

////////////////// component ///////////////////////////
const UpdateModal: React.FC<IProps> = ({
  isOpen,
  setIsOpen,
  refetch,
  data,
}) => {
  const closeModal = () => setIsOpen(false);
  const [loading, setLoading] = useState(false);
  const [faqData, setFaqData] = useState({
    ans: "",
    qus: "",
    type: "gift_cards",
  });

  async function handleCreate() {
    await updateData(faqData, "faq", data?._id, setLoading);
    setIsOpen(false);
  }

  useEffect(() => {
    if (data) {
      setFaqData(data);
    }
  }, [data]);

  //================= render ======================
  return (
    <>
      {/* Modal */}
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-[200000] overflow-y-auto"
          onClose={closeModal}
        >
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
            {/* Background overlay */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
            </Transition.Child>

            {/* Modal content */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                {/* Modal header */}
                <div className="flex justify-between items-center px-6 py-4 bg-gray-white border-b text-black">
                  <Dialog.Title className="text-lg font-bold">
                    Create F.A.Q
                  </Dialog.Title>
                  <button onClick={closeModal} className="text-black">
                    <HiXMark className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="lg:px-8 px-3 space-y-6 mt-10">
                  <div className="">
                    <label className="block text-sm font-medium mb-2 dark:text-white">
                      Type
                    </label>
                    <select
                      name=""
                      id=""
                      defaultValue={"gift_cards"}
                      onChange={(e) =>
                        setFaqData({
                          ...faqData,
                          type: e.target.value,
                        })
                      }
                      className="py-3 border border-gray-300 rounded-xl px-4 w-full"
                    >
                      <option value="gift_cards">Gift cards</option>
                      <option value="partners">Partners</option>
                      <option value="company">Company</option>
                      <option value="donation">Donation</option>
                      <option value="monthly_payment">Monthly Donation</option>
                    </select>
                  </div>
                  <div className="">
                    <label className="block text-sm font-medium mb-2 dark:text-white">
                      Qus
                    </label>
                    <input
                      type="text"
                      defaultValue={faqData.qus}
                      onChange={(e) =>
                        setFaqData({
                          ...faqData,
                          qus: e.target.value,
                        })
                      }
                      id="input-label"
                      className="py-3 border border-gray-300 rounded-xl px-4 w-full"
                      placeholder="name"
                    />
                  </div>

                  <div className="">
                    <label
                      //   for="input-label"
                      className="block text-sm font-medium mb-2 dark:text-white"
                    >
                      Ans
                    </label>
                    <textarea
                      defaultValue={faqData.ans}
                      onChange={(e) =>
                        setFaqData({
                          ...faqData,
                          ans: e.target.value,
                        })
                      }
                      className="py-3 border border-gray-300 rounded-xl px-4 w-full"
                      placeholder="description"
                    />
                  </div>

                  <button
                    disabled={loading}
                    onClick={handleCreate}
                    className="bg-primary px-8 py-3 rounded-lg font-bold"
                  >
                    {loading ? "loading" : "create"}
                  </button>
                </div>

                {/* Modal body */}
                <div className="px-6 py-4">{/* Form */}</div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default UpdateModal;
