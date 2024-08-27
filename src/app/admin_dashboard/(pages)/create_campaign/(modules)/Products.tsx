import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getData } from "@/shared/commonFunctions";
import { IProduct } from "@/shared/interfaces/product.interface";
import { useEffect, useState } from "react";
import { HiCheck, HiCheckCircle, HiMinus, HiPlus } from "react-icons/hi2";

interface ISelectedProduct {
  product_id: string;
  product_name: string;
  product_description?: string;
  product_price: number;
  product_quantity: number;
  product_image_url: string;
}

interface IProps {
  selectedProducts: ISelectedProduct[];
  setSelectedProducts: (selectedProducts: ISelectedProduct[]) => void;
}

//////////////////// component /////////////////////////////
export function Products({ selectedProducts, setSelectedProducts }: IProps) {
  const [productData, setProductData] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  // const [selectedProducts, setSelectedProducts] = useState<ISelectedProduct[]>(
  //   []
  // );

  //=========== fetching data =============================
  useEffect(() => {
    getData(setProductData, "product/list", setLoading);
  }, []);

  //================ functions =============================

  function checkProduct(id: string) {
    const index = selectedProducts?.findIndex(
      (item) => item?.product_id === id
    );
    if (index !== -1) {
      return true;
    } else {
      return false;
    }
  }

  function toggleProduct(data: ISelectedProduct) {
    if (checkProduct(data.product_id)) {
      const newSelectedProducts = selectedProducts?.filter(
        (item) => item?.product_id !== data?.product_id
      );
      setSelectedProducts(newSelectedProducts);
    } else {
      const newSelectedProducts = [...selectedProducts, data];
      setSelectedProducts(newSelectedProducts);
    }
  }

  function handleUpdateQuantity(product_id: string, type: string) {
    const newSelectedProducts = selectedProducts?.map((item) => {
      if (item?.product_id === product_id) {
        return {
          ...item,
          product_quantity:
            type == "add"
              ? item?.product_quantity + 1
              : item?.product_quantity - 1,
        };
      } else {
        return item;
      }
    });
    setSelectedProducts(newSelectedProducts);
  }

  // =================== render ===========================
  return (
    <DialogContent className="sm:max-w-[925px] py-10">
      <DialogTitle className="text-xl pb-4">Select Products</DialogTitle>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {productData?.map((item, i) => (
          <div
            key={i}
            className={`flex items-center   space-x-4 
            ${checkProduct(item?._id) ? "border " : "border"}
             rounded-md  `}
          >
            <div
              onClick={() => {
                const selectedProduct = {
                  product_id: item?._id,
                  product_name: item?.name,
                  product_description: item?.description,
                  product_price: item?.price,
                  product_quantity: 1,
                  product_image_url: item?.image_url,
                };
                toggleProduct(selectedProduct);
              }}
              className="h-24 w-24 rounded-l-md flex  items-center justify-center text-3xl text-gray-500 bg-gray-300"
            >
              {selectedProducts?.find((i) => i?.product_id == item?._id) ? (
                <HiCheckCircle />
              ) : (
                <HiPlus />
              )}{" "}
            </div>

            <div className=" space-y-1">
              <p className="font-bold">{item?.name}</p>
              <p>{item?.price} per unit</p>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => {
                    handleUpdateQuantity(item?._id, "add");
                  }}
                  className="bg-gray-200 p-1 rounded-full"
                >
                  <HiPlus />
                </button>
                <input
                  type="text"
                  value={
                    selectedProducts?.find((i) => i?.product_id == item?._id)
                      ? selectedProducts.find((i) => i?.product_id == item?._id)
                          ?.product_quantity
                      : 1
                  }
                  className="border border-gray-200 rounded-md w-20 text-center"
                />
                <button
                  onClick={() => {
                    handleUpdateQuantity(item?._id, "remove");
                  }}
                  className="bg-gray-200 p-1 rounded-full"
                >
                  <HiMinus />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button type="button">Close</Button>
        </DialogClose>
        {/* <Button type="submit">Save changes</Button> */}
      </DialogFooter>
    </DialogContent>
  );
}
