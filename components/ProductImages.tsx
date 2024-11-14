"use client";
import Image from "next/image";
import React, { useState } from "react";

function ProductImages() {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images.map((image, i) => (
          <div
            key={image.id}
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            onClick={() => setIndex(i)}
          >
            <Image
              src={image.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductImages;

const images = [
  {
    id: "1",
    url: "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "2",
    url: "https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "3",
    url: "https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "4",
    url: "https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];
