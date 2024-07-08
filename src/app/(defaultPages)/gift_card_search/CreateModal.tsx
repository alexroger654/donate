import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HiXMark } from "react-icons/hi2";
import { createData } from "@/shared/commonFunctions";
import { toast } from "sonner";

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  giftCardId: string;
}

////////////////// component ///////////////////////////
const CreateModal: React.FC<IProps> = ({ isOpen, setIsOpen, giftCardId }) => {
  const closeModal = () => setIsOpen(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleCreate() {
    await createData(
      {
        gift_card_name: giftCardId || "Birthday Gift Card",
        gift_card_id: "GC123456",
        gift_card_amount: "$50",
        sender_name: "John Doe",
        sender_email: "john@example.com",
        receiver_name: name,
        receiver_email: email,
      },
      "gift_card",
      setLoading
    );
    setIsOpen(false);
    toast.success("Gift Card Sent Successfully");
  }

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
                    Send Gift Card
                  </Dialog.Title>
                  <button onClick={closeModal} className="text-black">
                    <HiXMark className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="lg:px-8 px-3 space-y-6 mt-10">
                  <div className="">
                    <label className="block text-sm font-medium mb-2 dark:text-white">
                      Receiver Name
                    </label>
                    <input
                      type="text"
                      defaultValue={name}
                      onChange={(e: any) => setName(e.target.value as string)}
                      id="input-label"
                      className="py-3 border border-gray-300 rounded-xl px-4 w-full"
                      placeholder="name"
                    />
                  </div>
                  <div className="">
                    <label className="block text-sm font-medium mb-2 dark:text-white">
                      Receiver email
                    </label>
                    <input
                      type="text"
                      defaultValue={email}
                      onChange={(e: any) => setEmail(e.target.value as string)}
                      id="input-label"
                      className="py-3 border border-gray-300 rounded-xl px-4 w-full"
                      placeholder="email"
                    />
                  </div>

                  <div className="">
                    <label
                      //   for="input-label"
                      className="block text-sm font-medium mb-2 dark:text-white"
                    >
                      Message
                    </label>
                    <textarea
                      defaultValue={message}
                      onChange={(e: any) =>
                        setMessage(e.target.value as string)
                      }
                      className="py-3 border border-gray-300 rounded-xl px-4 w-full"
                      placeholder="Message"
                    />
                  </div>

                  <button
                    disabled={loading}
                    onClick={handleCreate}
                    className="bg-primary px-8 py-3 rounded-lg font-bold"
                  >
                    {loading ? "loading" : "Send"}
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

export default CreateModal;
