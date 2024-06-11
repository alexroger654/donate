"use client";
import React, { useEffect, useState } from "react";
import CreateCategory from "./(modules)/components/CreateModal";
import { getData } from "@/shared/commonFunctions";
import Loading from "@/components/Loading";
import { ICategory } from "@/shared/interfaces/category.interface";

const tableItems = [
  {
    avatar:
      "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Liam James",
    email: "liamjames@example.com",
    phone_nimber: "+1 (555) 000-000",
    position: "Software engineer",
    salary: "$100K",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    name: "Olivia Emma",
    email: "oliviaemma@example.com",
    phone_nimber: "+1 (555) 000-000",
    position: "Product designer",
    salary: "$90K",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
    name: "William Benjamin",
    email: "william.benjamin@example.com",
    phone_nimber: "+1 (555) 000-000",
    position: "Front-end developer",
    salary: "$80K",
  },
  {
    avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    name: "Henry Theodore",
    email: "henrytheodore@example.com",
    phone_nimber: "+1 (555) 000-000",
    position: "Laravel engineer",
    salary: "$120K",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Amelia Elijah",
    email: "amelia.elijah@example.com",
    phone_nimber: "+1 (555) 000-000",
    position: "Open source manager",
    salary: "$75K",
  },
];

export default function page() {
  // states ============================
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryData, setCategoryData] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState(false);

  // getting and setting data===========
  useEffect(() => {
    getData(setCategoryData, "category/list", setLoading);
  }, []);

  //=== refetch ====================

  async function refetch() {
    getData(setCategoryData, "category/list", setLoading);
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
            All Category
          </h3>
          <p className="text-gray-600 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="mt-3 md:mt-0">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-block px-4 py-2 text-black duration-150 font-medium bg-primary rounded-lg hover:bg-primary/70 active:bg-indigo-700 md:text-sm"
          >
            Add new Category
          </button>
        </div>
      </div>
      <div className="mt-12 relative h-max overflow-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Image</th>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Description</th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {categoryData?.length ? (
              categoryData?.map((item, idx) => (
                <tr key={item._id}>
                  <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                    <img
                      src={item.image_url}
                      className="w-10 h-10 rounded-xl"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.description}
                  </td>
                  <td className="text-right px-6 whitespace-nowrap">
                    <a
                      href="javascript:void()"
                      className="py-2 px-3 font-medium text-primary hover:text-primary/70 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                      Edit
                    </a>
                    <button
                      // href="javascript:void()"
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
    </div>
  );
}
