"use client";
import React, { useEffect, useState } from "react";
import CreateCategory from "./(modules)/components/CreateModal";
import { deleteData, getData } from "@/shared/commonFunctions";
import Loading from "@/components/Loading";
import { ICategory } from "@/shared/interfaces/category.interface";
import UpdateModal from "./(modules)/components/UpdateModal";
import { IPost } from "@/shared/interfaces/post.interface";

export default function MainPage() {
  // states ============================
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setUpdateIsModalOpen] = useState(false);
  const [postData, setPostData] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentData, setCurrentData] = useState<any>("");

  // getting and setting data===========
  useEffect(() => {
    getData(setPostData, "blog_post/list", setLoading);
  }, []);

  //=== refetch ====================

  async function refetch() {
    getData(setPostData, "blog_post/list", setLoading);
  }

  // loading =======================

  if (loading) {
    return <Loading />;
  }

  //============ render =======================
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:p-14 min-h-[80vh] bg-white rounded-xl border">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            All Blog Posts
          </h3>
          <p className="text-gray-600 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="mt-3 md:mt-0">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-primary rounded-lg  md:text-sm"
          >
            Add new
          </button>
        </div>
      </div>
      <div className="mt-12 relative h-max overflow-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Image</th>
              <th className="py-3 px-6">Author Name</th>
              <th className="py-3 px-6">Title</th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {postData?.length ? (
              postData?.map((item, idx) => (
                <tr key={item._id}>
                  <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                    <img src={item.imageUrl} className="w-10 h-10 rounded-xl" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.userName}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">{item.title}</td>
                  <td className="text-right px-6 whitespace-nowrap">
                    <button
                      onClick={() => {
                        setCurrentData(item);
                        setUpdateIsModalOpen(true);
                      }}
                      className="py-2 px-3 font-medium text-primary hover:text-primary/70 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        deleteData(
                          "blog_post",
                          item?._id as string,
                          setLoading
                        );
                        refetch();
                      }}
                      className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <p className="mt-8 pl-3">No Category Found</p>
            )}
          </tbody>
        </table>
      </div>

      <CreateCategory
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        refetch={refetch}
      />
      <UpdateModal
        isOpen={isUpdateModalOpen}
        setIsOpen={setUpdateIsModalOpen}
        refetch={refetch}
        data={currentData}
      />
    </div>
  );
}
