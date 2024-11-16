"use client";
import { useCartStore } from "@/hooks/useCartStore";
import { useWixClient } from "@/hooks/useWixClient";
import { useState } from "react";

function Add({
  productId,
  variantId,
  stockNumber,
}: {
  productId: string;
  variantId?: string;
  stockNumber?: number;
}) {
  const [quantity, setQuantity] = useState(1);

  const handleQty = (type: "inc" | "dec") => {
    if (type === "dec" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "inc" && quantity < stockNumber!) {
      setQuantity((prev) => prev + 1);
    }
  };

  const wixClient = useWixClient();

  const { addItem, isLoading } = useCartStore();

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQty("dec")}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQty("inc")}
            >
              +
            </button>
          </div>
          <p className="text-xs">
            Only <span className="text-orange-500">{stockNumber} items</span>{" "}
            left!
            <br /> Don&apos;t miss it!
          </p>
        </div>
        <button
          onClick={() => addItem(wixClient, productId, variantId!, quantity)}
          disabled={isLoading}
          className="rounded-3xl w-36 ring-1 ring-lama_red text-lama_red py-2 px-4 text-xs hover:bg-lama_red hover:text-white transition ease-in"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Add;
