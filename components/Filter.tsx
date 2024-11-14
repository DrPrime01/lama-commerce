import React from "react";

function Filter() {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#ebeded]"
        >
          <option value="type" defaultValue="type">
            Type
          </option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="min price"
          id=""
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          id=""
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <select
          name="size"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#ebeded]"
        >
          <option value="size" defaultValue="size">
            Size
          </option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <select
          name="color"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#ebeded]"
        >
          <option value="color" defaultValue="color">
            Color
          </option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <select
          name="category"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#ebeded]"
        >
          <option value="category" defaultValue="category">
            Category
          </option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <select
          name="all_filters"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#ebeded]"
        >
          <option value="all" defaultValue="all">
            All Filters
          </option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
      </div>
      <div>
        <select
          name="sort"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#ebeded]"
        >
          <option value="sort" defaultValue="sort">
            Sort By
          </option>
          <option value="low_to_high">Price (low to high)</option>
          <option value="high_to_low">Price (high to low)</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
