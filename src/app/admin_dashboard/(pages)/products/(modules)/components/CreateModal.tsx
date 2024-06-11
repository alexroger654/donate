import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HiXMark } from "react-icons/hi2";
import { createData } from "@/shared/commonFunctions";

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  refetch: () => void;
}

////////////////// component ///////////////////////////
const CreateCategory: React.FC<IProps> = ({ isOpen, setIsOpen, refetch }) => {
  const closeModal = () => setIsOpen(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleCreate() {
    await createData(
      {
        name,
        description,
        image_url: "",
        price: parseInt(price),
      },
      "product",
      setLoading,
      refetch
    );
    setIsOpen(false);
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
                    Create Product
                  </Dialog.Title>
                  <button onClick={closeModal} className="text-black">
                    <HiXMark className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="lg:px-8 px-3 space-y-6 mt-10">
                  <div className="">
                    <label className="block text-sm font-medium mb-2 dark:text-white">
                      Name
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
                      Price
                    </label>
                    <input
                      type="number"
                      defaultValue={price}
                      onChange={(e: any) => setPrice(e.target.value as string)}
                      id="input-label"
                      className="py-3 border border-gray-300 rounded-xl px-4 w-full"
                      placeholder="name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-white">
                      Image
                    </label>

                    <input
                      type="file"
                      // defaultValue={image}
                      onChange={(e: any) => setImage(e.target.value as string)}
                      className="block w-full px-3 py-3 mt-2 text-sm text-gray-600 bg-white border border-gray-300 rounded-xl file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300"
                    />
                  </div>
                  <div className="">
                    <label
                      //   for="input-label"
                      className="block text-sm font-medium mb-2 dark:text-white"
                    >
                      Description
                    </label>
                    <textarea
                      defaultValue={description}
                      onChange={(e: any) =>
                        setDescription(e.target.value as string)
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
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default CreateCategory;
