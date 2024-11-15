"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Pagination({
  currentPage,
  hasPrev,
  hasNext,
}: {
  currentPage: number;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="mt-12 flex justify-between w-full">
      <button
        disabled={!hasPrev}
        onClick={() => createPageUrl(currentPage - 1)}
        className="rounded-md w-24 bg-lama_red text-white text-sm p-2 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200"
      >
        Prev
      </button>
      <button
        disabled={!hasNext}
        onClick={() => createPageUrl(currentPage + 1)}
        className="rounded-md w-24 bg-lama_red text-white text-sm p-2 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
