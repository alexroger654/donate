import { ChangeEvent, Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HiXMark } from "react-icons/hi2";
import { createData, getData, updateData } from "@/shared/commonFunctions";
import { UploadFileAndGetUrl } from "@/shared/uploadFile";
import { v4 as uuid } from "uuid";
import { ICategory } from "@/shared/interfaces/category.interface";
import TextEditor from "@/components/TextEditor";
import { IPost } from "@/shared/interfaces/post.interface";

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
  const [blogImage, setBlogImage] = useState<any>("");
  const [image, setImage] = useState<any>("");
  const [editorState, setEditorState] = useState("");
  const [postData, setPostData] = useState<IPost>({
    userName: "",
    userImage: "",
    pageContent: "",
    imageUrl: "",
    tag: "",
    title: "",
  });

  async function handleCreate() {
    setLoading(true);
    let imageUrl;
    let blogImageUrl;
    if (image) {
      imageUrl = await handleUpload("categoryImages", image);
    } else {
      imageUrl = data?.userImage;
    }
    if (blogImage) {
      blogImageUrl = await handleUpload("categoryImages", blogImage);
    } else {
      blogImageUrl = data?.imageUrl;
    }

    await updateData(
      {
        userName: postData.userName,
        userImage: imageUrl,
        pageContent: editorState,
        imageUrl: blogImageUrl,
        tag: postData.tag,
        title: postData.title,
      },
      "blog_post",
      data?._id,
      setLoading
    );
    refetch();
    setLoading(false);
    setIsOpen(false);
  }

  async function handleUpload(folderName: string, file: any) {
    setLoading(true);

    try {
      let uploadResult = await UploadFileAndGetUrl(file, uuid(), folderName);
      setLoading(false);
      return uploadResult;
    } catch (error: any) {
      console.error("Failed to upload image:", error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (data) {
      setPostData(data);
      setEditorState(data.pageContent);
    }
  }, [data]);

  console.log(data, "----");

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
              <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-5xl sm:w-full">
                {/* Modal header */}
                <div className="flex justify-between items-center px-6 py-4 bg-gray-white border-b text-black">
                  <Dialog.Title className="text-lg font-bold">
                    Create Post
                  </Dialog.Title>
                  <button onClick={closeModal} className="text-black">
                    <HiXMark className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="lg:px-8 px-3  mt-10 grid lg:grid-cols-2 gap-4">
                  <div className="">
                    <label className="block text-sm font-medium mb-2 dark:text-white">
                      Author Name
                    </label>
                    <input
                      type="text"
                      defaultValue={postData?.userName}
                      onChange={(e: any) =>
                        setPostData({
                          ...postData,
                          userName: e.target.value as string,
                        })
                      }
                      id="input-label"
                      className="py-3 border border-gray-300 rounded-xl px-4 w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-white">
                      User Image
                    </label>

                    <input
                      type="file"
                      onChange={(e: any) => setImage(e.target.files[0])}
                      className="block w-full px-3 py-3 mt-2 text-sm text-gray-600 bg-white border border-gray-300 rounded-xl file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-white">
                      Blog Image
                    </label>

                    <input
                      type="file"
                      onChange={(e: any) => setBlogImage(e.target.files[0])}
                      className="block w-full px-3 py-3 mt-2 text-sm text-gray-600 bg-white border border-gray-300 rounded-xl file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300"
                    />
                  </div>
                  <div className="col-span-full">
                    <label className="block text-sm font-medium mb-2 dark:text-white">
                      Title
                    </label>
                    <input
                      type="text"
                      defaultValue={postData?.title}
                      onChange={(e: any) =>
                        setPostData({
                          ...postData,
                          title: e.target.value as string,
                        })
                      }
                      id="input-label"
                      className="py-3 border border-gray-300 rounded-xl px-4 w-full"
                    />
                  </div>
                  <div className=" col-span-full">
                    <label
                      //   for="input-label"
                      className="block text-sm font-medium mb-2 dark:text-white"
                    >
                      Description
                    </label>
                    <TextEditor
                      editorState={editorState}
                      setEditorState={setEditorState}
                    />
                  </div>

                  <button
                    disabled={loading}
                    onClick={handleCreate}
                    className="bg-primary px-8 py-3 rounded-lg font-bold w-28 text-white"
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
