import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
// import { XIcon } from "@heroicons/react/outline";
// Assuming you're using Heroicons
import { HiXMark } from "react-icons/hi2";
import { createData, getData } from "@/shared/commonFunctions";
import { ICategory } from "@/shared/interfaces/category.interface";
import Loading from "@/components/Loading";
import { UploadFileAndGetUrl } from "@/shared/uploadFile";
import { v4 as uuid } from "uuid";

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  refetch: any;
}

const CreateCategory: React.FC<IProps> = ({ isOpen, setIsOpen, refetch }) => {
  const closeModal = () => setIsOpen(false);
  const [categoryData, setCategoryData] = useState<ICategory[]>([]);
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState<any>("");

  async function handleCreate() {
    let imageUrl;
    if (image) {
      imageUrl = await handleUpload("categoryImages");
    }

    await createData(
      {
        gift_card_name: name,
        gift_card_amount: amount,
        category: category,
        image_url: imageUrl,
        description: description,
      },
      "gift_card_template",
      setLoading,
      refetch
    );
    setIsOpen(false);
  }

  async function handleUpload(folderName: string) {
    setLoading(true);

    try {
      let uploadResult = await UploadFileAndGetUrl(image, uuid(), folderName);
      setLoading(false);
      return uploadResult;
    } catch (error: any) {
      console.error("Failed to upload image:", error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData(setCategoryData, "category/list", setLoading);
  }, []);

  if (loading) {
    return <Loading />;
  }

  //================== render
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
                    Create Gift Cards
                  </Dialog.Title>
                  <button onClick={closeModal} className="text-black">
                    <HiXMark className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="lg:px-8 px-3 grid lg:grid-cols-2 gap-5 mt-10">
                  <div className="">
                    <label
                      //   for="input-label"
                      className="block text-sm font-medium mb-2 dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      type="email"
                      id="input-label"
                      defaultValue={name}
                      onChange={(e) => setName(e.target.value)}
                      className="py-3 border border-gray-300 rounded-xl px-4 w-full"
                    />
                  </div>
                  <div className="">
                    <label className="block text-sm font-medium mb-2 dark:text-white">
                      Category
                    </label>
                    <select
                      defaultValue={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="py-3 border border-gray-300 rounded-xl px-4 w-full"
                    >
                      <option>Open this select menu</option>
                      {categoryData.map((item) => (
                        <option
                          className="capitalize"
                          key={item._id}
                          value={item.name}
                        >
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="">
                    <label
                      //   for="input-label"
                      className="block text-sm font-medium mb-2 dark:text-white"
                    >
                      Price
                    </label>
                    <input
                      type="email"
                      id="input-label"
                      defaultValue={amount}
                      onChange={(e) => setAmount(parseFloat(e.target.value))}
                      className="py-3 border border-gray-300 rounded-xl px-4 w-full"
                      placeholder="you@site.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-white">
                      Image
                    </label>

                    <input
                      type="file"
                      onChange={(e: any) => setImage(e.target.files[0])}
                      className="block w-full px-3 py-3 mt-2 text-sm text-gray-600 bg-white border border-gray-300 rounded-xl file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300"
                    />
                  </div>
                  <div className=" col-span-full">
                    <label
                      //   for="input-label"
                      className="block text-sm font-medium mb-2 dark:text-white"
                    >
                      Description
                    </label>
                    <textarea
                      defaultValue={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="py-3 border border-gray-300 rounded-xl px-4 w-full"
                      placeholder="...."
                    />
                  </div>

                  <button
                    onClick={handleCreate}
                    className="bg-primary px-8 py-3 rounded-lg font-bold"
                  >
                    Create
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

export default CreateCategory;
