import React from "react";

function CustomizeProduct() {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium">Choose a color</h4>
      <ul className="flex items-center gap-3">
        <li className="size-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500">
          <div className="absolute size-10 rounded-full ring-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </li>
        <li className="size-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-green-500"></li>
        <li className="size-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-blue-500">
          <div className="absolute w-10 h-0.5 bg-red-400 rotate-45 rounded-full ring-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </li>
      </ul>
      <h4 className="font-medium">Choose a size</h4>
      <ul className="flex items-center gap-3">
        <li className="ring-1 ring-lama_red text-lama_red rounded-md py-1 px-4 text-sm cursor-pointer">
          Small
        </li>
        <li className="ring-1 ring-lama_red text-white bg-lama_red rounded-md py-1 px-4 text-sm cursor-pointer">
          Medium
        </li>
        <li className="ring-1 ring-pink-200 bg-pink-200 text-white rounded-md py-1 px-4 text-sm cursor-not-allowed">
          Small
        </li>
      </ul>
    </div>
  );
}

export default CustomizeProduct;
