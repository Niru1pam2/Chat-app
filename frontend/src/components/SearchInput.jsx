import React from "react";

import { RiSearchEyeLine } from "react-icons/ri";
function SearchInput() {
  return (
    <form className="flex items-center gap-2 p-4">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-md"
      />
      <button type="submit" className="btn ">
        <RiSearchEyeLine className="h-6 w-6 outline-none" />
      </button>
    </form>
  );
}

export default SearchInput;
