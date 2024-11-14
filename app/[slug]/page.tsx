import Add from "@/components/Add";
import CustomizeProduct from "@/components/CustomizeProduct";
import ProductImages from "@/components/ProductImages";
import React from "react";

function SinglePage() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* Text */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ullam
          deleniti tempore rem natus laborum cupiditate deserunt consectetur
          inventore nihil eum repellendus optio, veniam provident molestias,
          nesciunt accusantium, facere laudantium.
        </p>
        <div className="h-0.5 bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-lg text-gray-500 line-through">$59</h3>
          <h2 className="font-medium text-2xl">$49</h2>
        </div>
        <div className="h-0.5 bg-gray-100" />
        <CustomizeProduct />
        <Add />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            perspiciatis sint rerum exercitationem numquam. Autem praesentium ad
            beatae placeat? Animi, minima! Unde cumque labore esse praesentium
            ratione voluptatem sed. Aut.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            perspiciatis sint rerum exercitationem numquam. Autem praesentium ad
            beatae placeat? Animi, minima! Unde cumque labore esse praesentium
            ratione voluptatem sed. Aut.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            perspiciatis sint rerum exercitationem numquam. Autem praesentium ad
            beatae placeat? Animi, minima! Unde cumque labore esse praesentium
            ratione voluptatem sed. Aut.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
